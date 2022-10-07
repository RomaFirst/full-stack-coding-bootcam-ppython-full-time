// Des Instructions
// Créez une variable appelée sentence. La valeur de la variable doit être une chaîne contenant les mots « not » et « bad ».
// Par exemple, "Le film n'est pas si mal, j'aime bien" .

// Créez une variable appelée wordNot où sa valeur est la première apparition (c'est-à-dire la position) de la sous-chaîne "not" (de la sentencevariable).

// Créez une variable appelée wordBadoù sa valeur est la première apparition (c'est-à-dire la position) de la sous-chaîne "bad" (de la sentencevariable).

// Si le mot "bad" vient après le mot "not", vous devez remplacer toute la sous-chaîne "not…bad" par "good", puis console.log le résultat.
// Par exemple, le résultat ici devrait être : "Le film est bon, je l'aime"
// Si le mot "bad" ne vient pas après "not" ou si les mots ne sont pas dans la phrase, console.log la phrase originale.
// Exemple:

//   Your string is : 'This dinner is not that bad ! You cook well', 
//   --> the result is : 'This dinner is good ! You cook well'

//   Your string is : 'This movie is not so bad !' 
//   --> the result is : 'This movie is good !'

//   Your string is : 'This dinner is bad !' 
//   --> the result is : 'This dinner is bad !'

let sentence = "Le film is not pas  bad si mal, j'aime bien";
let wordNot = "not";
let wordBad = "bad";
        for(let i=0; i<sentence.length; i++ ){
            var Ind1 = sentence.indexOf('not');
            var Ind2 = sentence.indexOf('bad');
            if(Ind1<Ind2){
                for(i=Ind1; i=Ind2; i++){
                    sentence =sentence.replace("i", " ");
                }
                console.log(sentence + "good")

            }else{console.log(sentence)};
        }

