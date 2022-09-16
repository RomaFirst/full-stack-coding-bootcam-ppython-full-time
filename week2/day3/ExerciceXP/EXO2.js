// 🌟 Exercice 2 : Vos Couleurs Préférées
// Des Instructions
// Créez un tableau appelé colors où la valeur est une liste de vos cinq couleurs préférées.
// Bouclez à travers le tableau et pendant que vous bouclez console.log une chaîne comme ceci : "Mon choix n°1 est bleu", "Mon choix n°2 est rouge" ect… .
// Bonus : changez-le en console.log "Mon 1er choix", "Mon 2ème choix", "Mon 3ème choix", en choisissant le suffixe correct pour chaque numéro.
// Astuce : créer un tableau de suffixes pour faire le Bonus

//--------------------------------------------------------------------

let colors = ["Bleuz", "Blan", "Noir", "Vert", "Jaune"];
console.log(colors);
        for(let i=0; i <colors.length; i++){
                var ordre ="N°"+(i+1);
            console.log("Mon choix "+ordre + " est,"+colors[i]);
        }

console.log("*************************************************")
//-------------------------------Bonus---------------------------------
console.log(colors);
        for(let i=0; i <colors.length; i++){
            ordre =(i+1);
            if(ordre==1){
                  ordre =ordre+"er"
            } else{ordre =ordre+"ème"}
            console.log("Mon "+ordre+" choix est :"+colors[i])
        }
