var prompt = require('prompt-sync')();

let x1=prompt("entrer Ax: ");
let y1=prompt("entrer Ay: ");
let z1=prompt("entrer Az: ");
let x2=prompt("entrer Bx: ");
let y2=prompt("entrer By: ");
let z2=prompt("entrer Bz: ");

let distance = ((x2-x1)**2 + (y2-y1)**2 + (z2-z1)**2)**(1/2);
console.log("Position A : ("+x1+", "+y1+", "+z1+")");
console.log("Position B : ("+x2+", "+y2+", "+z2+")");
console.log("Distance: "+distance);