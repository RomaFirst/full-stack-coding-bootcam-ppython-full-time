// Exercice 2 : Moyenne Scolaire
// Des Instructions
// Astuce :
// - Cet exercice est plus délicat que les autres. Vous devez réfléchir à sa structure avant de commencer à coder.
// - Vous devez utiliser des fonctions pour réaliser cet exercice, pour cela jetez un oeil à la leçon de demain.
// Dans cet exercice, nous allons créer une fonction qui prend un tableau de notes comme argument et console.log la moyenne.
// Créez une fonction appelée findAvg(gradesList)qui prend un argument appelé gradesList.
// Votre fonction doit calculer et console.log la moyenne.
// Si la moyenne est supérieure à 65, faites savoir à l'utilisateur qu'il a réussi
// Si la moyenne est inférieure à 65, faites savoir à l'utilisateur qu'il a échoué et qu'il doit répéter le cours.
// Bonus Essayez de diviser les parties 1, 2 et 3, 4 de cet exercice en deux fonctions distinctes.
// Astuce Une fonction doit appeler l'autre.
   //********************************************

let  nbNote = prompt("Entre le nombre de notes")
let tableauNote = [];
var nb = parseFloat(nbNote);
console.log(nb);
var somme = 0;
 for(i=0; i<nb; i++){
    var  Notes = prompt("Entre la notes " + i);
    tableauNote[i] =parseFloat(Notes)
    somme = somme+tableauNote[i];
    
 }
 console.log(tableauNote);
 console.log(somme);
 console.log('***************************************************************************')
 
function findAvg(tableauNote){
        for(i=0; i<tableauNote.length; i++){
        tableauNote[i] =parseFloat(Notes);
        let moyenne = somme/tableauNote.length;
        return moyenne;
    }

}
var MG=findAvg(tableauNote);
console.log(MG);

function compare(MG){
    let mention;
    if(MG >=65){
        mention ='Vous avez reusi a voute examen';
    }else{
        mention= ' Desolé vous aver echouer votre, Exament reesseyer';
    }
    return mention;
}
console.log(compare(MG));


//BONUS
