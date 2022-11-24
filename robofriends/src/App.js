import React, {Component} from "react";
import CardList from "./cardlist";
import {robots} from './robots.js';
import SearchBox from './SearchBox';

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
            robots: robots,
            searchfield: ''
        }
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
        return (
            <div className = 'tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots = {filteredRobots}/>
            </div>
        );
    
    }
}

export default App;