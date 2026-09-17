var prompt = require('prompt-sync')();
let a=prompt("entrer le premier nombre: ")*1;
let opp=prompt("entrer '+' ou '-' ou '*' ou '/': ");
let b=prompt("entrer le deuxieme nombre: ")*1;
let bool=true;
if(opp!="+"&&opp!="-"&&opp!="*"&&opp!="/"){
    bool=false;
    console.log("Opérateur invalide.");
}
else{
    console.log("premier nombre : "+a);
console.log("opperateur : "+opp);
console.log("deuxieme nombre : "+b);
console.log("");
console.log("le resultat est:");
}
switch(true){
    case(opp=="+"&&bool):{
        console.log(a+b);
        break
    }
    case(opp=="-"&&bool):{
        console.log(a-b);
        break
    }
    case(opp=="*"&&bool):{
        console.log(a*b);
        break
    }
    case(opp=="/"&&bool):{
        console.log(a/b);
        break
    }
}