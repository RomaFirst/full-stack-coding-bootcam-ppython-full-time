// 🌟 Exercice 5 : Famille
// Des Instructions
// Créez un objet appelé famille avec quelques paires clé-valeur.
// A l' aide d'une for inboucle, console.log les clés de l'objet.
// À l' aide d'une for inboucle, console.log les valeurs de l'objet.
var famille = {
    Name : "KABRE",
    Prenom : "AZIZ",
    sexe : "M",
}
for(let i in famille){
    console.log(i);
}
console.log("***********************************************************")

for(let i in famille){
    console.log(famille[i]);
}