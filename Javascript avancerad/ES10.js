//flat()
//metod vi kan använda på array med nästade arrays
const array = [1,[2,3],[4,5]];
array.flat();
//returnerar en array utan nästade arrays
//funkar på en level
//vid fler "levels" array.flat(2). 2 berättar hur många layers den ska gå

//flatMap()
//slår ihop dem bägge

userEmail = "              blabla@gmail.com";
userEmail2 = "blabla@gmail.com        ";

userEmail.trimStart();
userEmail2.trimEnd();

//fromentries
userProfiles = [['commanderTom', 23], ['derekZlander',40], ['hanzel', 34]];

//Bildar ett objekt från en array. Motsatt sak från Object.entries
Object.fromEntries(userProfiles);

//try catch update

