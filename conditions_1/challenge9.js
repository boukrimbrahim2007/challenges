var prompt = require('prompt-sync')();
let x=prompt("1-Bus     → 5 DH 2-Train   → 20 DH 3-Tramway → 6 DH 4-Taxi    → 15 DH  5-Vélo    → 10 DH :   ")*1;
let bool=true;
if(x>5||x<1){
    bool=false;
    console.log("Transport invalide.")
}
else{
console.log("choix : "+x);
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
    case(x==5&&bool):{
        console.log("Transport : velo");
        console.log("prix : 10 Dh");
        break;
    }
}