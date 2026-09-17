var prompt = require('prompt-sync')();

let note_CC=prompt("entrer la note de Contrôle continu: ");
let note_Projet=prompt("entrer la note de Contrôle continu: ");
let note_Examen=prompt("entrer la note de Contrôle continu: ");
let note_finale =(noteCC * 2 + noteProjet * 3 + noteExamen * 5) / 10;
console.log("Contrôle continu : "+note_CC);
console.log("Projet : "+note_Projet);
console.log("Examen : "+note_Examen);
console.log("Note finale : "+note_Projet);