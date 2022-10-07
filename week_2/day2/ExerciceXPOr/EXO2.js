// Exercice 3 : Verbe
// Des Instructions
// Demander à l'utilisateur une chaîne. Ce doit être un verbe.
// Si la longueur de la chaîne est d'au moins 3
// et que la chaîne ne se termine pas par « ing », ajoutez « ing » à la fin de la chaîne.
// Si la longueur de la chaîne est d'au moins 3 et que la chaîne se termine par "ing", ajoutez "ly" à sa fin.
// Si la longueur de la chaîne est inférieure à 3, laissez-la inchangée.
// Exemple:

//   The string is : "swim" , your program should console.log : "swimming"
//   The string is : "swimming", your program should console.log : "swimmingly"
//   The string is : "go" your program should console.log : "go"
//--------------------------------------------
let chnVerbe = prompt("enter un verbe",0);
console.log(chnVerbe);
        lgVerb = chnVerbe.length;
        console.log(lgVerb);
        if(lgVerb>=3){
            let strai = lgVerb - 3;
            console.log(strai);
            let rst = strai - 1; 
            console.log(rst)
            for(let i=0; i<rst;i++){
                let verbe1 = chnVerbe.slice();

            }
            
            console.log(verbe1);
            verbe1 = verbe1.toUpperCase();
            console.log(verbe1);
                if(verbe1="ING"){
                    console.log(chnVerbe);
                }else{
                    console.log(chnVerbe+"ING");
                }
        } else{
            console.log(chnVerbe);
        }
