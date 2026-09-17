var prompt = require('prompt-sync')();

let lit=prompt("entrer La quantité de carburant consommée en litres: ");
let dis=prompt("entrer La distance parcourue en kilomètres: ");
let cons=lit*100/dis;
console.log("Distance : "+dis+" Km");
console.log("Carburant : "+lit+" litres");
console.log("Consommation : "+cons+" L/100 km");