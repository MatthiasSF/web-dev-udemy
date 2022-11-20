const basket = ["Äpple", "apelsin", "vindruvor"];
const detailedBasket = {
    apples: 5,
    oranges: 7,
    Grapes: 20
}
//funkar till arrays och strings
for (let i = 0; i < basket.length; i++){
    //gör något
}

basket.forEach(item => {
    //gör något
})

//for of
for (item of basket){
    //gör något
}

//for in
//Funkar med objekt properties (alltså äpple, oranges och grapes)
//Heter inte iterating med objekt utan enumerating
for (item in detailedBasket){
    //gör något
}

