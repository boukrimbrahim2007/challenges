var prompt = require('prompt-sync')();

const num=prompt("entrer un nombre");
if(num<0){
    console.log('negative');
}
else{
    if(num==0){
        console.log("zero");
    }
    else{
        console.log("psitive");
    }
}