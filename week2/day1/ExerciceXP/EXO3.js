// 🌟 Exercice 2 : Série
// Des Instructions
// Première Partie
// En utilisant ce tableau :let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Créez une variable myWatchedSeriesLengthdont le nom est égal au nombre de séries dans le myWatchedSeriestableau.

// Créez une variable nommée myWatchedSeriesSentence, qui est égale à une phrase décrivant la série que vous avez regardée
// Par exemple :black mirror, money heist, and the big bang theory

// Console.log une phrase utilisant les deux variables créées ci-dessus
// Par exemple :I watched 3 series : black mirror, money heist, and the big bang theory
//*******************************************

let myWatchedSeries =["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = myWatchedSeries.toString();
console.log(myWatchedSeriesSentence);

console.log("I watched" + myWatchedSeriesLength + "series :"+ " "+myWatchedSeriesSentence);


// Partie II
// Remplacez la série « the big bang theory » par « friends ». Astuce : Vous devrez utiliser l'index de la série « the big bang theory ».
// Ajoutez, à la fin du tableau, le nom d'une autre série que vous avez regardée.
// Ajoutez, au début du tableau, le nom de votre série préférée.
// Supprimer la série « miroir noir ».
// Console.log la troisième lettre de la série "money heist".
// Enfin, console.log le myWatchedSeriestableau, pour voir toutes les modifications que vous avez apportées.


myWatchedSeries[2]="friends";
myWatchedSeries.push("3femmes 1villages");
myWatchedSeries.unshift("Naruto");
myWatchedSeries.shift()
console.log("la troisieme lettre de la serie"+myWatchedSeries[2]);
console.log(myWatchedSeries);





