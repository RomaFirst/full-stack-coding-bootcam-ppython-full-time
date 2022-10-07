// Exercice 1 : Divisible Par Trois
// Des Instructions
// let numbers = [123, 8409, 100053, 333333333, 7]
// Parcourez le tableau ci-dessus et déterminez si chaque nombre est divisible par trois ou non.
// Chaque fois que vous bouclez console.log trueou false.


let numbers = [123, 8409, 100053, 333333333, 7];
        for( let i=0 ; i<numbers.length; i++){
            var verif;
            if(numbers[i]%3==0){
                verif = "est divisible par 3";
            } else{verif=" n'est pas divisible par 3"}
            console.log(numbers[i] +" "+ verif)
        }