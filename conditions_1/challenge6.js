var prompt = require('prompt-sync')();

const x=prompt("entrer la valeur");
switch (true) {
    case x==1:
        console.log("choix : 1");
        console.log("Afficher le profil")
        break;

        break;
    case x==2:
        console.log("choix : 2");
        console.log("Afficher les paramètres")
        break;

        break;
    case x==3:
        console.log("choix : 3");
        console.log("Afficher les notifications")
        break;

        break;
    case x==4:
        console.log("choix : 4");
        console.log("Se déconnecter")
        break;
}