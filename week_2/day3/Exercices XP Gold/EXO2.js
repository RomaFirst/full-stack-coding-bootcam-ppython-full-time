// Exercice 2 : Présence
// Des Instructions
// Étant donné l'objet ci-dessus où la clé est le nom de l'étudiant et la valeur est le pays d'où il vient.
// Invitez l'élève à donner son nom.
// Si le nom est dans l'objet, console.log le nom de l'étudiant et le pays d'où il vient.
// Par exemple:"Hi! I'm [name], and I'm from [country]."
// Astuce : Vous n'avez pas besoin d'utiliser une boucle for, recherchez simplement l'instructionif ... in
// Si le nom n'est pas dans l'objet, console.log :"Hi! I'm a guest."
//*********************************************** 

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }

var student= prompt("entrer votre nom",0);
for(let i in guestList){
    if(i==student){
        console.log("salut!!, je suis "+ i + " et je vien deb "+ guestList[i]);
    } else("Hi! I'm a guest.")
}
