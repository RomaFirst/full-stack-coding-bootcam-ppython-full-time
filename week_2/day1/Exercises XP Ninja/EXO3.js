// Exercice 3 : Trouver Nemo
// Des Instructions
// Indice : if statement (la leçon de demain)

// Demandez à l'utilisateur de vous donner une phrase contenant le mot "Nemo". Par exemple"I love the movie named Nemo"
// Trouver le mot "Nemo"
// Console.log une chaîne comme suit :"I found Nemo at [the position of the word Nemo]".
// Si vous ne trouvez pas Nemo, console.log "Je ne trouve pas Nemo".
// Quelques exemples:

//     "I love the movie named Nemo" ➞ "I found Nemo at 5"
//     "Nemo is a cute fish" ➞ "I found Nemo at 0"
//     "My fish is called Nemo, I love it" ➞ "I found Nemo at 4"
//-------------------------------------

let users = prompt("Enter une phrase contenant Nemo",0);
let Rch = users.search("Nemo")
        console.log(users[Rch]);
        if(Rch != -1){
            console.log("I found Nemo at "+ Rch);
        } else{
            console.log("Je ne trouve pas Nemo")
        }
