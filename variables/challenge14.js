var prompt = require('prompt-sync')();
var a=prompt("entrer le score de joueur 1");
var b=prompt("entrer le score de joueur 2");
[a,b]=[b,a];
console.log("joueur A: "+a);
console.log("joueur B: "+b);