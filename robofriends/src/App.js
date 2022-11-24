import React, {Component} from "react";
import CardList from "./cardlist";
import SearchBox from './SearchBox';
import './App.css';

/*
App.js sammanfogar alla moduler som visas i Index.js
*/
class App extends Component{
    /*
    En constructor() är en inbyggd funktion som skapar och
    initierar ett nytt objekt. 
    i detta fall Objektet App med properties
    robots och searchfield
    */
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    /*
    Inbyggd react metod som blir automatiskt callad om efter render 
    om sidan laddats.
    Hämtar en namn lista från hemsidan med fetch och updaterar state och
    robots[]
    fetch() är en metod på window objekt som kommer med samtliga
    browsers. Det är ett verktyg som används för att göra requests till servrar
    */
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then (users => this.setState({robots: users}));
    }
    /*
    eventhanterare som tar emot varje event i searchbar och fyller på 
    propertien searchfield för varje knapptryck som inträffar
    */
    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value}); 
    }
    /*
    Skapar variablen filteredRobots som är en filtrerad lista av robotar vars
    namn innehåller dem bokstäver som skrivits in i searchfield. 
    */
    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        /*Funkar inte... skulle ge en header som visar loading */
        if(this.state.robots.lenght === 0){
            return <h1>Loading users</h1>
        }else{
            return (
                <div className = 'tc'>
                    <h1 className ='f2'>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <CardList robots = {filteredRobots}/>
                </div>
            );
        }
        
    
    }
}

export default App;