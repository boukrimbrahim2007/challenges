var prompt = require('prompt-sync')();

let gb=prompt("entrer le stockage en gb: ");
let mb=gb*1024;
console.log("Stockage : "+gb+"GB");
console.log("Résultat : "+mb+ "MB");