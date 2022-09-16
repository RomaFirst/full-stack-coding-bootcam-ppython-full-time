// Des Instructions
// const numbers = [5,0,9,1,7,4,2,6,3,8];

// À l'aide de la .toString()méthode, convertissez le tableau en chaîne.
// À l'aide de la .join()méthode, convertissez le tableau en chaîne. Essayez de transmettre différentes valeurs dans la jointure.
// Par exemple .join("+"), .join(" "), .join("")
// Bonus : Pour ce faire, regardez comment travailler avec des boucles for imbriquées
// . Triez le numberstableau dans l'ordre décroissant, faites-le en utilisant des boucles for (sans utiliser les méthodes de tri intégrées).
// La sortie devrait être : [9,8,7,6,5,4,3,2,1,0]
// Astuce : L'algorithme est appelé "Bubble Sort"
// Utilisez une variable temporaire pour échanger des valeurs dans le tableau.
// Utilisez 2 boucles for "imbriquées" (imbriquées signifie l'une dans l'autre).
// Ajoutez des commentaires et console.log le résultat pour chaque étape, cela vous aidera à comprendre.
// Exigence : Ne pas copier coller les solutions de Google

const numbers = [5,0,9,1,7,4,2,6,3,8];
let convertir=numbers.toString()
console.log(convertir)
console.log("--------------------------------------")
console.log(numbers.join("+"))
console.log("--------------------------------------")
console.log(numbers.join(""))
console.log("--------------------------------------")
console.log(numbers.join(" "))
console.log("--------------------------------------")
console.log("--------------------------------------")
console.log("--------------------------------------")
[5,0,9,1,7,4,2,6,3,8];
var trier =numbers
console.log(trier)
for(let i=0; i<trier.length;i++){
    for(let j=1; j<trier.length;j++){
        if(trier[j]>trier[i]){
            trier[0]=trier[j]
            trier[j]=trier[i];
            
        }
        
    }
}
console.log(trier);
