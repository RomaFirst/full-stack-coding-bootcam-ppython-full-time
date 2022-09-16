// Exercice 6
// Des Instructions
// let details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// Étant donné l'objet ci-dessus et en utilisant un for loop, console.log "mon nom est Rudolf le raindeer"
let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
for(let i in details){
        console.log(i +" "+ details[i]);
    }
