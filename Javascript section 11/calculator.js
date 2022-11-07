var firstNum = prompt ("Enter first number");
var secondNum = prompt ("Enter second number");
var arythmic = prompt ("Enter +, -, / or *");

/*notera den skumma syntaxen för att addera :S */
if (arythmic === "+"){
    var result = +firstNum + +secondNum;
} 
if (arythmic === "-"){
    var result = firstNum - secondNum;
    } 
if (arythmic === "/"){
    var result = firstNum / secondNum;
    } 
if (arythmic === "*"){
    var result = firstNum * secondNum;
        } 
alert(result);