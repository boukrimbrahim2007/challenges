var prompt = require('prompt-sync')();
let x=prompt("entrer la duree en sec: ")*1;
let sec=x%60;
let min=((x-sec)/60)%60;
let h=(x-min*60-sec)/3600;
console.log(sec);
console.log(min)
console.log(h)