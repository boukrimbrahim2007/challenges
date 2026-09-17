var prompt = require('prompt-sync')();
let x = prompt("1 → Pizza (60 DH) | 2 → Burger (45 DH) | 3 → Tacos (40 DH) | 4 → Salade (30 DH) : ")*1;
let y=prompt("entrer la quantite: ")*1;
let bool=true;
if(x>4||x<1){
    bool=false;
    console.log("choix invalide.")
}
else{
console.log("choix : "+x);
console.log("quantite : "+y);
}
switch(true){
    case(x==1&&bool):{
        console.log("Transport : bus");
        console.log("prix : 5 Dh");
        break;
    }
    case(x==2&&bool):{
        console.log("Transport : train");
        console.log("prix : 20 Dh");
        break;
    }
    case(x==3&&bool):{
        console.log("Transport : tramway");
        console.log("prix : 6 Dh");
        break;
    }
    case(x==4&&bool):{
        console.log("Transport : taxi");
        console.log("prix : 15 Dh");
        break;
    }
}
