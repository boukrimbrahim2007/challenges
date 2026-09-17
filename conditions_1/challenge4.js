var prompt = require('prompt-sync')();

const prix=prompt("Montant de la commande : ");
if(prix>=500){
    console.log("Livraison : Gratuite");
    console.log("Total à payer :"+prix);
}
else{
    console.log("Livraison : 40 DH");
    console.log("Total à payer :"+ prix);    
}