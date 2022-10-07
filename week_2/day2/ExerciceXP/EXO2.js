// 🌟 Exercice 2 : Chihuahua
// Des Instructions
// Créez une variable appelée newDogdont la valeur est "Chihuahua".
// Vérifiez et affichez le nombre de lettres dans newDog.
// Affichez la newDogvariable en majuscule puis en minuscule (pas besoin de créer de nouvelles variables, juste console.log deux fois).
// Vérifiez si la variable newDogest égale à "Chihuahua"
// si c'est le cas, affichez "J'adore les chihuahuas, c'est ma race de chien préférée"
// sinon, console.log 'Je m'en fous, je préfère les chats'

//*************

let newDog = "Chihuahua"
    for(let i=0; i<newDog.length;i++){
        nbLettre = 0;
        nbLettre = i+1;
        return nbLettre;
        console.log("le nombre de lettre est :"+ nbLettre);
    }
    newDog = newDog.toUpperCase();
    console.log(newDog);
    newDog = newDog.toLowerCase();
    console.log(newDog);

    if(newDog="Chihuahua"){
        console.log("J'adore les chihuahuas, c'est ma race de chien préférée");
    } else{
        console.log("Je m'en fous, je préfère les chats")
    }