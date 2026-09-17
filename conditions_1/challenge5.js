var prompt = require('prompt-sync')();

const note=prompt("entrer la note");
if(note<10){
    console.log("Échec");
}
if(note<11.99 && note>=10){
    console.log("Passable");
}
if(note<13.99 && note>=12){
    console.log("Assez bien");
}
if(note<15.99 && note>=14){
    console.log("Bien");
}
if(note<17.99 && note>=16){
    console.log("Très bien");
}
if(note<20 && note>=18){
    console.log("Excellent");
}