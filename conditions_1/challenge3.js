var prompt = require('prompt-sync')();

const note=prompt("entrer la note: ");
if(note>=10){
    console.log("admis");
}
else{
    console.log("non admis");
}