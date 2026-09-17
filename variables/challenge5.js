var prompt = require('prompt-sync')();

let long=prompt("entrer la durée du film en minutes : ");
console.log("Durée : "+long+" minutes");
if(long<60){
    console.log("Catégorie : Court métrage");
}
if(long>=60&&long<120){
    console.log("Catégorie : Film standard");
}
if(long>=120) {
    console.log("Catégorie : Film long");
}
