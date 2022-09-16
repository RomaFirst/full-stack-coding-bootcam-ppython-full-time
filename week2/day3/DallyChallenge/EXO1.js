// Écrivez un programme JavaScript qui recrée le modèle ci-dessous.
// Faites ce défi deux fois : d'abord en utilisant une boucle, puis en utilisant deux boucles for imbriquées (imbriquées signifie l'une dans l'autre - consultez ce didacticiel sur les boucles imbriquées ).
// Faites ce défi quotidien par vous-même, sans regarder les réponses sur Internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *
//***********************************

let dim = 6;
var etoile = '*';
console.log('*')
for(i=0; i<dim; i++){
    etoile = etoile +'  *'
    console.log(etoile)
}

console.log('--------****************-------------------')

let long = 6;
var ast = '*';
console.log('*');  
for (let i = 0; i <= long; i++) {
    ast = ast +'  *';
    console.log(ast);
    for (let j = 1; j <= long+1; j++) {
    console.log(ast);
    }
  }