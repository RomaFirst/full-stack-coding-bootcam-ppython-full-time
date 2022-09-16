// Exercice 1 : Le Traducteur Du Monde
// Des Instructions
// Astuce : Utilisez Switch Case

// Demandez à l'utilisateur quelle langue il parle.

// Convertissez la réponse de l'utilisateur en minuscules, afin que toutes les entrées de l'utilisateur soient acceptées dans l'instruction if. Par exemple « anglais » ou « anglais » ou « anglais » ect… »

// Créez quelques conditions :
// Si l'utilisateur parle français : affiche "Bonjour"
// Si l'utilisateur parle anglais : affiche « Hello »
// Si l'utilisateur parle hébreu : afficher « Shalom »
// Si l'utilisateur ne parle aucune de ces 3 langues : affiche '01110011 01101111 01110010 01110010 01111001'
//******************

let lngUsers = prompt("Quel langue comprener vous",0);
        lngUsers = lngUsers.toUppercase
        if(lngUsers="FRANCAIS"){
            console.log("Bonjour")
        } else if(lngUsers="ANGLAIS"){
            console.log("hello");
        }else{
            console.log("shalom")
        }

                if(lngUsers="FRANCAIS, ANGLAIS, HEBREUX"){
                    console.log("01110011 01101111 01110010 01110010 01111001")
                }