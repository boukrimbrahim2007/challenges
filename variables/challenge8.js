var prompt = require('prompt-sync')();

let u=prompt("entrer la tension: ");
let i=prompt("entrer l'intensité: ");
let t=prompt("entrer le temps: ");
let energie=u*1*i*t;
console.log("tension: "+u);
console.log("intensite : "+i);
console.log("temps : "+t);
console.log("energie : "+energie);