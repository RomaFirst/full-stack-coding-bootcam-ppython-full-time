// Exercice 2 : Demander Des Nombres
// Des Instructions
// Demander à l'utilisateur une chaîne de chiffres séparés par des virgules
// Console.log la somme des nombres.
// Astuce : utilisez des méthodes de chaîne
// Examples
// "2,3"➞ 5
//***********************

// let uneChaine =prompt("Enter une chaire de nomber separe par des , " ,0);
//     uneChaine= uneChaine.split(',');
//     uneChaine= parseInt(uneChaine);
//         for(i=0; i<uneChaine.length; i+1) {
//             let somme=0;
//              =somme+0;
//         };

var chaine =prompt("entre les nombrr :",0)
let tab =chaine.split(',');
let somme = 0;
for(let i=0; i<tab.length; i++){
    somme=somme+parseInt(tab[i])
}
console.log(somme)

        
