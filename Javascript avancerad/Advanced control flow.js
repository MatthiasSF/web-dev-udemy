//ternary operator
// if true = expr1 if false = expr2
//condition ? expr1 : expr 2;
//Bra att ersätta if statements där det är en ceck efter conditions 
//och sen två möjliga svar

function isUserValid(bool){
    return bool;
}
var answer = isUserValid(true) ? "You may enter" : "Access denied";

var automatedAnswer =
"Your account # is " + (isUserValid(false) ? "1234" : "not available");


