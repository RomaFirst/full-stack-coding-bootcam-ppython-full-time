// Exercice 2 : L'assignateur De Notes
// Des Instructions
// Demandez à l'utilisateur sa note.

// Si la note est supérieure à 90, console.log "A"

// Si la note est comprise entre 80 et 90 (inclus), console.log "B"
// Si la note est comprise entre 70 (inclus) et 80 (inclus), console.log "C"
// Si la note est inférieure à 70, console.log "D"
//.................................

ntUsers = prompt("Entrer votre note ",0)
        if(ntUsers>90){
            console.log("A");
        } else if(ntUsers>80 && ntUsers<90){
            console.log("B")
        }else if(ntUsers>=70 && ntUsers<=80){
            console.log("C")

        }else{
            console.log("D")
        }

