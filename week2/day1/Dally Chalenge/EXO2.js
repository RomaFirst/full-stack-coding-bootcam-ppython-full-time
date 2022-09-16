// Des Instructions
// Exercice 1 :
// En utilisant ce tableau :

// let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// Supprimez Banana de la baie.
// Triez le tableau par ordre alphabétique.
// Ajoutez "Kiwi" à la fin du tableau.
// Supprimez "Apples" du tableau. N'utilisez pas la même méthode que dans la partie 1.
// Triez le tableau dans l'ordre inverse. (Pas alphabétique, mais inversez le tableau actuel, c'est-à-dire que ['a', 'c', 'b'] devient ['b', 'c', 'a'])
// À la fin, vous devriez voir ce résultat :
// ["Kiwi", "Oranges", "Blueberries"]



let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
    fruits.shift();
    console.log(fruits);
    fruits= fruits.sort();
    console.log(fruits);
    fruits.push("Kiwi");
    console.log(fruits);
    fruits = fruits.filter(function(item){
        return item!="Apples";
    })
    console.log(fruits);
    fruits.reverse();
    console.log(fruits);
