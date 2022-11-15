const array = [1, 2, 10, 16];

//kan använda for, foreach m.m.

// tar varje element i array, gångar alla element med 2 och sparar i double
const double = [];
array.forEach((num) =>{
double.push (num * 2);
})

//map, filter, reduce

//map
//map måste alltid returnera
//måste inte initiera en ny array som i foreach.
//map är functional pure
const mapArray = array.map((num) =>{
    return num * 2
});

//filter
// filtrerar alla element som är större än 5 och sparar i filterArray
const filterArray = array.filter(num => {
    return num > 5
});

//reduce
//ex. accumulator = 0 vilket vi specifierar efter closing bracket.
//resultat = 0+1=1, 1+2=3, 3+10=13, 13+16=29 reduceArray = 29 
const reduceArray = array.reduce((accumulator, num) =>{
    return accumulator + num
}, 0);

