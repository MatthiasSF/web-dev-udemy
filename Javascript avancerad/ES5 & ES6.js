//let och const istället för var. både let och const existerar i sina 
//scopes till skillnad från var
//const står för konstant och kan inte förändras

//Destructuring
 const obj = {
     player :'Bobby',
     experience: 100,
     wizardLevel: false
 }
 // "Gamla sättet" eller för mig "Normala sättet"
 const player1 = obj.player;
 const experience1 = obj.experience;
 let wizardLevel1 = obj.wizardLevel;

//Nya sättet
const {player, experience } = obj;
let {wizardLevel} = obj;

// output blir = obj = {3: "hihi", john snow: "hello"}
const name = 'John snow';

const obj1 = {
    [name]: 'hello',
    [1+2]: 'hihi'
}

const a = "Simon";
const b = true;
const c = {};

//gamla
const obj2 = {
    a:a,
    b:b,
    c:c
}
//nya
const obj3 ={a,b,c}

//template strings
let age = 30;
//gamla
const greeting = "Hello " + name + " you seem to be doing " + greeting +"!";

//nya
const greeting1 = `Hello ${name} you look to be ${age-10}!`;

//Default arguments
//Utskriften blir samma som return

function greet(name = '', age = 30, pet = 'cat'){
    return `Hello ${name} you seem to be ${age-10}. What a lovely ${cat} you have`;
}
//greet("john", 50, "monkey")
//utskriften blir Hello john you seem to be 40. What a lovely monkey you have

//symbol
//Det unika med symbol är att om man jämför dem blir det falskt t.ex.
//sym2 === sym3 blir false
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo')

//arrow function
//gamla
function add (a,b){
    return a +b;
}
//nya
const add1 = (a,b) => a+b;