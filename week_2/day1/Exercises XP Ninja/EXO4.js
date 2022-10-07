// Exercice 4 : Boum
// Des Instructions
// Indice : if statement (la leçon de demain)

// Demander à l'utilisateur un numéro. En fonction du nombre d'utilisateurs, vous renverrez une chaîne du mot "Boom". Suivez les règles ci-dessous :

// Si le nombre donné est inférieur à 2 : renvoie "boum"
// Si le nombre donné est supérieur à 2 : la chaîne doit comporter n nombre de "o" (n étant le nombre donné)
// Si le nombre donné est divisible par 2, ajoutez un point d'exclamation à la fin.
// Si le nombre donné est divisible par 5, renvoyez la chaîne en MAJUSCULES.
// Si le nombre donné est divisible à la fois par 2 et 5, renvoyez la chaîne en MAJUSCULES et ajoutez un point d'exclamation à la fin.
// Examples
// 4 ➞ "Boooom!"
// // There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)
// 1 ➞ "boom"
// // 1 is lower than 2, so we return "boom"


let numero = parseFloat(prompt('entrer un nimero',0));
        if(numero==0){
            let anonce = Boom;
            if(numero%2==0){
                alert(anonce+"!")
            }else{alert(anonce)};
            
        } else{
            alert("la chaîne doit comporter"+ " "+numero+" "+"o")
        }

        if(numero%5==0){
            console.log(anonce.toUppercase());
        } else if(anonce%2==0 && anonce%5==0) {
            console.log(anonce.toUppercase()+"!");

        }