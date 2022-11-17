// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes("John");

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons1 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

const nameChecker = () => {
    let newArray = [];
    newArray = dragons1.filter(str => str.includes('John'));
    return newArray;
}
nameChecker();
// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const powerOfHundred = (x) => x**100;
alert(powerOfHundred(10000));

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
//The special value Infinity is returned in JavaScript 
//by anything bigger than the largest possible number value
