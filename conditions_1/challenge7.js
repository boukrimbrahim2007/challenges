var prompt = require('prompt-sync')();
let x=prompt("entrer le nombre: ");
console.log("number: "+x);
if(x*1<8&&x*1>0){
    switch(true){
        case(x==1):{
            console.log("jour: Lundi");
            break;
        }
        case(x==2):{
            console.log("jour: Mardi");
            break;
        }
        case(x==3):{
            console.log("jour: Mercredi");
            break;
        }
        case(x==4):{
            console.log("jour: Jeudi");
            break;
        }
        case(x==5):{
            console.log("jour: Vendredi");
            break;
        }
        case(x==6):{
            console.log("jour: Samedi");
            break;
        }
        case(x==7):{
            console.log("jour: Dimanche");
            break;
        }
    }
}
else{
    console.log("Numéro invalide.")
}