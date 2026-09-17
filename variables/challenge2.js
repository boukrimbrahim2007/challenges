var prompt = require('prompt-sync')();

const sold=prompt("entrer votre solde en DH: ");
const eur=sold/11;
console.log("Budget en MAD : "+ sold);
console.log("Budget en EUR : "+ eur);