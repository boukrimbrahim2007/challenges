var prompt = require('prompt-sync')();
let bill=prompt("entrer le prix de billet: ");
let num_bill=prompt("entrer le nombre des billets: ");
let boi=prompt("entrer le prix du poisson: ");
let num_boi=prompt("entrer le nombre des boissons: ");
let tot=bill*1*num_bill+boi*1*num_boi;

console.log("Prix billet  : "+bill+" DH");
console.log("Nombre de billets  : "+num_bill);
console.log(" Prix boisson : "+boi+" DH");
console.log("Nombre de boissons  : "+num_boi);
console.log("");
console.log("total: "+tot+" DH");
