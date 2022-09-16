// Exercice 3 : Calculatrice
// Des Instructions
// Faire une calculatrice. Suivez les instructions:

// Demander à l'utilisateur le premier numéro.
// Stockez le premier nombre dans une variable appelée num1.
// Astuce : console.log le type de la variable num1. Que faire pour le convertir en nombre ?
// Demander à l'utilisateur le deuxième numéro.
// Stockez le deuxième nombre dans une variable appelée num2.
// Créez une alerte dont la valeur est la SOMME de num1et num2.
// BONUS : Réalisez un programme qui peut soustraire, multiplier et aussi diviser !


//1,2,3

let num1 = parseFloat (prompt('Entrer le 1er nombre' , 0 ));
let num2 = parseFloat (prompt('Entrer le 2nd nombre' , 0 ));
//4
let somme = num1+num2;
alert( 'la somme de num1 et num2 est :'+ somme);

//BONUS

let soustraire = num1-num2;
let multiplier = num1*num2;
let diviser = num1/num2