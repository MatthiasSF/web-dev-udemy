// function first (){
//     var greet ="Hi";
//     function second(){
//         alert(greet);
//     }
//     return second;
// }

 const first = () =>{
     const greet ="Hi";
     const second = () =>{
         alert(greet);
     }
     return second;
 }
var newFunc = first();
newFunc();

//Closures
// a function ran, the function executed. Its never going to execute again
//BUT its going to remember that there are references to those variables 
//so the child scope always has access to the parent scope

//Currying
//The process of converting a function that takes multiple arguments into a function that
//takes them one at a time

const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a*b;
//a = 3. b = undefined
curriedMultiply(3);
//a = 3 b = 4
curriedMultiply(3)(4);
//varför, jo det är nu mer accesible t.ex.
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(b);

//compose
//The act of putting two functions togheter to form a third function, where the output 
//of one function is the input of the other

const compose = (f,g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose (sum, sum) (5);
// const compose = (f,g) => (a) => f(sum(5));
//const compose = (f,g) => (a) => f(6);
//6+1 7
//const compose = (f,g) => (a) => f(7);

// Dessa tre nyckelord hjälper till att uppnå functional purity
//functional purity = 
//undvika sidoeffekter där en funtion kan påverka saker utanför dess scope
//avoid sideeffects and always return. Kallas deterministic. 
//Resultat kommer alltid bli det samma.
