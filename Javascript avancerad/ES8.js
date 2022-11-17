// string padding
// .padStart();
// .padEnd();
"Turtle".padStart(10); //utskrift = "          Turtle"
"Turtle".padEnd(10); //utskrift = "Turtle          "

//trailing commas in function parameter lists and calls
const fun = (a,b,c,d,) =>{
    console.log(a);
}
fun(1,2,3,4,); //valid anrop hjälper vid långa anrop

//nya
Object.values
Object.entries
//gammal
Object.keys

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Grinch'
}
//låter en loopa genom objekt, man kan använda alla array functions
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})
//sammma
Object.values(obj).forEach(value => {
    console.log(value);
})
//ger en array
Object.entries(obj).forEach(value => {
    console.log(value);
})
//tar andra värdet (namnet) och första värdet (username) och tar bort username och byter plats
Object.entries(obj).map(value=> {
    return value[1] + value[0].replace('username', '');
})
