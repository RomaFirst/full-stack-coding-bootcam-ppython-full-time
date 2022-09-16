// Exercice 1 : Vérification De L'IMC
// Des Instructions
// Astuce :
// - Vous devez utiliser des fonctions pour réaliser cet exercice, pour cela jetez un œil à la leçon de demain.
// Créez deux objets, chaque objet doit contenir les détails d'une personne. Voici les détails:
// Nom et prénom
// Masse
// Hauteur
// Chaque objet doit également avoir une clé dont la valeur est une fonction (c'est-à-dire une méthode), qui calcule l'indice de masse corporelle (IMC) de chaque personne
// En dehors des objets, créez une fonction JS qui compare l'IMC des deux objets.
// Affichez le nom de la personne qui a le plus grand IMC.

var etudiant= {
    nom: "KABRE",
    prenom : "Abdoul Aziz",
    masse : 62,
    hauteur : 1.85,
}
function calculImce(etudiant){
    let IMCe= (etudiant.masse)/(etudiant.hauteur*etudiant.hauteur);
    return IMCe;
}
const Imce = calculImce(etudiant);
console.log("L'Indice de Masse Corporelle de "+etudiant.nom+ " "+etudiant.prenom+ " est :"+" "+Imce)


console.log("******************************************")

var prof= {
    nom: "LINGANI",
    prenom : "Malick",
    masse : 72,
    hauteur : 1.75,
}
function calculImcp(prof){
    let IMCp= (prof.masse)/(prof.hauteur*prof.hauteur);
    return IMCp;
}
const Imcp = calculImcp(prof);
console.log("L'Indice de Masse Corporelle de "+prof.nom+ " "+prof.prenom+ " est :"+" "+Imcp);