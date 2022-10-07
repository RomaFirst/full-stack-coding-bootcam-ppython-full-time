//🌟 Exercice 4 : Discussion De Groupe
//Des Instructions
// Vous trouverez ci-de+ssous un tableau d'utilisateurs qui sont en ligne dans une discussion de groupe.

// let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
// À l'aide du tableau ci-dessus, console.log indique le nombre d'utilisateurs connectés au chat de groupe en fonction des règles suivantes :
// S'il n'y a pas d'utilisateurs (le tableau des utilisateurs est vide), console.log "personne n'est en ligne".
// S'il y a 1 utilisateur, console.log " <name_user>est en ligne".
// S'il y a 2 utilisateurs, console.log « <name_user1>et <name_user2>sont en ligne ».
// S'il y a plus de 2 utilisateurs, console.log les deux premiers noms dans le tableau des utilisateurs et le nombre d'utilisateurs supplémentaires en ligne.
// Par exemple, s'il y a 5 utilisateurs, il doit afficher :
// name_user1, name_user2 and 3 more are online
//*****************************
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000", "kabre","mousssa"];
       let  nbUsers = users.length;
       
        console.log(nbUsers+" " +"sont connecter");
        console.log("*******************************************")
        if(nbUsers==0){
            console.log("personne n'est en ligne");
        } else if(nbUsers==1){
            console.log(users[0]+ " est en ligne");
        }else if(nbUsers==2) {
            console.log(users[0]+" and"+ users[1]+ " sont en ligne");
        }else{
           let  nb=nbUsers-2;
            console.log(users[0]+","+ users[1]+ " et "+ " "+ nb +" autres " + " sont en ligne");
        }






            // for(let i=0; i<users.length();i++){
            //     if(users[i]!=null){
            //         return i;
            //         console.log()
            //     }

            // }