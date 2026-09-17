var prompt = require('prompt-sync')();

let p1=prompt("entrer le score partie 1: ");
let p2=prompt("entrer le score partie 2: ");
let p3=prompt("entrer le score partie 3: ");
let p4=prompt("entrer le score partie 4: ");
let tot=p1*1+p2*1+p3*1+p4*1;
let moy=tot/4;
console.log("Score total : "+ tot);
console.log("Moyenne : " +moy);