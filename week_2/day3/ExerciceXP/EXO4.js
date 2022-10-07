// 🌟 Exercice 4 : Gestion Du Bâtiment
// Des Instructions:
// Revue Sur Les Objets
// Copiez et collez l'objet ci-dessus dans votre fichier Javascript.
// Console.log le nombre d'étages du bâtiment.
// Console.log combien d'appartements sont aux étages 1 et 3.
// Console.log le nom du deuxième locataire et le nombre de pièces qu'il possède dans son appartement.
// Vérifiez si la somme du loyer de Sarah et de David est supérieure au loyer de Dan. Si c'est le cas, augmentez le loyer de Dan à 1200.
//-----------------------------------------------------

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}   

         console.log(building.numberOfFloors);     //1
console.log("**************************************************");
        console.log("Il ya "+ building.numberOfAptByFloor.firstFloor  +" apartements au 1er etage et "+ building.numberOfAptByFloor.thirdFloor +" au 3ième");
console.log("**************************************************");
        console.log("le nom du 2 ieme locataire est : " +building.nameOfTenants[1] + " il possède "+ building.numberOfRoomsAndRent.dan[0] +" pièce dans son appartement");

console.log("**************************************************");
            var somme= building.numberOfRoomsAndRent.david[1]+building.numberOfRoomsAndRent.sarah[1]
            console.log(somme);
console.log("**************************************************");

    if(somme>building.numberOfRoomsAndRent.dan[1]){

        building.numberOfRoomsAndRent.dan[1] = building.numberOfRoomsAndRent.dan[1]+(1200 - building.numberOfRoomsAndRent.dan[1]);
    }
    console.log(building.numberOfRoomsAndRent.dan[1])

