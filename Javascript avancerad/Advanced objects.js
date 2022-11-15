//reference type
//Inget att programmera. Basically så är två objekt inte samma även om dem innehåller samma värden

//context != scope
// context berättar var vi är i objektet
//handlar om this
//this används för att referera till något som har "dubbletter" i referenser
function a(){
    //nytt scope här
}
//instantiation
//Varje gång jag skapar en kopia av en 'player' det första som blir executed är constructor function
// och varje spelare får dessa värden
class Player {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    introduce (){
        console.log(`Hi I am ${this.name}, Im a ${this.type}`);
    }
}
//varje gång man extendar så måste man använda super för att ge värdena till parent class
class Wizard extends player{
    constructor(name, type){
        super(name, type);
    }
    play(){
        console.log (`WEEEEEE I'm a ${this.type}`);
    }
}
const Wizard1 = new Wizard ('röven', 'präst');

//Om man vill undvika att referera till samma "låda" genom att referera ett objekt till ett annat
//kan man använda nedanstående kod

let obj = {a: 'a', b:'b', c:'c'};
//här pekar vi på samma referens. om jag ändrar i objektet kopia så ändras också obj
let kopia = obj;
//här klonar vi och dem har olika referenser
let clone = Object.assign({}, obj);
//samma sak men ett nytt sätt att skriva
let clone2 = {...obj}

//objekt i objekt
//här funkar inte ovanstående kloner dem kallas "shallow kloner"
let objIObj = {a: 'a', b:'b', c: {deep: "Try and copy me"}};

//Detta är en "deep clone". Kan ha "performance issues" och skall användas sparsamt
let superClone = JSON.parse(JSON.stringify(objIObj));

//type coercion

1 == '1'; // =true (dafuq??????)

//händer när man använder == istället för ===

if (1){
    //här tolkar javascript 1 som true eftersom den vill ha en boolean
}
if(0){
    //här tolkar javascipt 0 som false (detta är med ett big dafuq moment)
}