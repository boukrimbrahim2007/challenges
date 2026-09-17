var prompt = require('prompt-sync')();

const age=prompt("what's your age");

if (age>=18){
    console.log("Accès autorisé");
}
else{
    console.log("Accès refusé")
}