// Exercice 3 : Jouer Avec Les Chiffres
// Des Instructions

// Exigences : N'utilisez pas les méthodes Javascript intégrées pour répondre aux questions suivantes. Vous devez créer la logique par vous-même. Utilisez des boucles for simples.
// 1. Console.log la somme de tous les nombres dans le tableau d'âge.
// 2. Console.log l'âge le plus élevé de la baie.
//******************************************************** 
let age = [20,5,12,43,98,55];

var maxAge;
var Somme =0;

for(i=0; i<age.length; i++){
    Somme=Somme+age[i];
}
console.log("La somme des ages est : "+Somme)
console.log("-----------------------------------------------------")
maxAge=age[0];
for(j=0; j<age.length; j++){
    if(age[j]>maxAge){
        maxAge=age[j];
    }  
}
console.log("l'age le plu éléver est : "+maxAge);