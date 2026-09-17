var prompt = require('prompt-sync')();
let x = prompt("A → Électronique | B → Vêtements | C → Alimentation | D → Maison | E → Sport : ");
let bool=true;
if(x!="A"&&x!="B"&&x!="C"&&x!="D"&&x!="E"){
    bool=false;
    console.log("Catégorie inconnue.")
}
else{
console.log("choix : "+x);
}
switch(true){
    case(x=="A" &&bool):{
        console.log("Catégorie : Électronique");
        break;
    }
    case(x=="B" &&bool):{
        console.log("Catégorie : Vêtements");

        break;
    }
    case(x=="C" &&bool):{
        console.log("Catégorie : Alimentation");

        break;
    }
    case(x=="D"&&bool):{
        console.log("Catégorie : Maison");

        break;
    }
    case(x=="E"&&bool):{
        console.log("Catégorie : Sport");

        break;
    }
}