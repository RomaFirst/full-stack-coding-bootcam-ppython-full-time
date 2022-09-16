// 🌟 Exercice 3 : Répéter La Question
// Des Instructions
// Demander à l'utilisateur un numéro.
// Astuce : Vérifiez le type de données que vous recevez à partir de l'invite (c.-à-d. Utilisez la typeofméthode)

// Tant que le nombre est inférieur à 10, continuez à demander à l'utilisateur un nouveau numéro.
// Astuce : Quelle whileboucle est la plus pertinente pour cette situation ?

do{
    var numero = prompt("Entrer un numero :",0);
    console.log(typeof numero);
    var verif = parseInt(numero);
    console.log(verif);
    }  while(verif < 10)
