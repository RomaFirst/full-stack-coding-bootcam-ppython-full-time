
//----------------------------Parti I Examen de tableau-----------------------------------
// 🌟 Exercice 1 : Liste Des Personnes
// Des Instructions
// let people = ["Greg", "Mary", "Devon", "James"];
// Partie I - Examen Des Tableaux
// Écrivez du code pour supprimer "Greg" du peopletableau.
// Écrivez le code pour remplacer "James" par "Jason".
// Écrivez du code pour ajouter votre nom à la fin du peopletableau.
// Écrivez le code qui console.logs l'index de Mary. jetez un oeil à la indexOfméthode sur Google .
// Écrivez du code pour faire une copie du peopletableau à l'aide de la sliceméthode.
// La copie ne doit PAS inclure "Marie" ou votre nom.
// Astuce : rappelez-vous que maintenant le peopletableau devrait ressembler à ceci let people = ["Mary", "Devon", "Jason", "Yourname"];
// Astuce : Consultez la documentation de la sliceméthode
// Écrivez le code qui donne l'index de "Foo". Pourquoi renvoie-t-il -1 ?
// Créez une variable appelée lastdont la valeur est le dernier élément du tableau.
// Astuce : Quelle est la relation entre l'indice du dernier élément du tableau et la longueur du tableau ?

let people = ["Greg", "Mary", "Devon", "James"];
console.log(people);
    people.shift();                              // question 1
    console.log(people);
        people[2]="Jason"  ;              //Quewtion 2
        console.log(people);
            people.push("a.aziz")               // Question 3
            console.log(people);
                console.log(people.indexOf("Mary"));    //   Question 4
                    let copieTab =people.slice(1,3);      // Question 5
                    console.log(copieTab);
                        console.log(people.indexOf("Foo"));    //   Question 6
                        //Ca retourn -1 car il n'existe pas de foot dans le tableau
                            let lastdont = people[people.length-1];  //Question 7
                            console.log(lastdont);

//----------------------------------------------Parti II --------------------------------------
// Partie II - Boucles
// À l'aide d'une boucle, parcourez le peopletableau et console.log chaque personne.
// À l'aide d'une boucle, parcourez le peopletableau et quittez la boucle après avoir console.log "Jason" .
// Indice : jetez un œil à l' breakénoncé de la leçon.
console.log("**********************************************")

for(let i =0; i<people.length; i++){
    console.log(people[i]);
}

console.log("**********************************************")
let i=0;
while(i<=people.indexOf("Jason")){  
        console.log(people[i]);
        i=i+1;
    }








    