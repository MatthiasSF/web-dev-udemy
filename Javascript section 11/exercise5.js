import {without} from 'lodash';

alert(without);
function askForAge(age){
    if(Number(age) < 18){
        return("Sorry, you are too young to drive this car. Powering off");
    }
    if(Number(age) === 18){
        return("Congratulations on your first year of driving. Enjoy the ride!");
    }
    if (Number(age) > 18){
        return("Powering On. Enjoy the ride!");
    }
}
var a = function(age){
    if(Number(age) < 18){
        return("Sorry, you are too young to drive this car. Powering off");
    }
    if(Number(age) === 18){
        return("Congratulations on your first year of driving. Enjoy the ride!");
    }
    if (Number(age) > 18){
        return("Powering On. Enjoy the ride!");
    }
}