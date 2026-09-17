var prompt = require('prompt-sync')();
let x=prompt("entrer le nombre: ");
console.log("Code : "+x);
let u=x%10;
x=x-u;
let d=(x%100)/10;
x=x-(d*10);
let c=(x%1000)/100;
x=x-(c*100);
let m=x/1000;
console.log("");
console.log("Premier chiffre : "+m);
console.log("Deuxième chiffre : "+c);
console.log("Troisième chiffre : "+d);
console.log("Quatrième chiffre : "+u);

