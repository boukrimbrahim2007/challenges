var prompt = require('prompt-sync')();
let long=prompt("entrer la longueur: ");
let larg=prompt("entrer la largeur: ");
let sur=long*1*larg;
let peri=2*(long*1+larg);

console.log("la longueur : "+long+" m");
console.log("la largeur : "+larg+" m");
console.log("");
console.log("la surface : "+sur+" m²");
console.log("le perimetre : "+peri+" m");