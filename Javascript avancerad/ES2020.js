//Bigint
// typeof 4 = number, typeof true = boolean typeof 1n = Bigint
//det är en ny variabel som är över max_safe_integer

//nullish coalescing operator ??

let will_pokemon1 ={
    pikachu: {
        species: "mouse pokemon",
        height: 0.4,
        weight:6,
        power: "lightning"
    }
}
let weight2 = will_pokemon1?.pikachu?.weight??
//Optional chaining operator?.
let will_pokemon ={
    pikachu: {
        species: "mouse pokemon",
        height: 0.4,
        weight:6
    }
}
let andre_pokemon ={
    raichu: {
        species: "mouse pokemon",
        height: 0.8,
        weight:30
    }
}
//blir error när man har två
// let weight = will_pokemon.pikachu.weight;
// let weight2 = andre_pokemon.pikachu.weight;
//har använts istället för att undvika error
// if(andre_pokemon.pikachu && andre_pokemon.pikachu.weight){
//     let weight2 = andre_pokemon.pikachu.weight
// }else{
//     let weight2 = undefined;
// }
//----------------
//nya
//varje frågetecken är en kontroll om det finns. Om false = undefined 
//funkar tydligen inte att kontroller den sista i kedjan
let weight = andre_pokemon?.pikachu?.weight;
//promise.allSettled
//globalThis