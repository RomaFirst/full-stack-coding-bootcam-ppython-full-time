# 🌟 Exercice 7 : Conseils De Température
# Des Instructions
# Créez une fonction appelée get_random_temp().
# Cette fonction doit renvoyer un entier entre -10 et 40 degrés (Celsius), sélectionné au hasard.
# Testez votre fonction pour vous assurer qu'elle génère les résultats attendus.

# Créez une fonction appelée main().
# Dans cette fonction, appelez get_random_temp()pour obtenir une température et stockez sa valeur dans une variable.
# Informez l'utilisateur de la température dans un message amical, par ex. "La température actuelle est de 32 degrés Celsius."

# Ajoutons plus de fonctionnalités à la main()fonction. Écrivez quelques conseils amicaux concernant la température :
# en dessous de zéro (par exemple "Brrr, c'est glacial ! Portez des couches supplémentaires aujourd'hui")
# entre zéro et 16 (ex. "Assez froid ! N'oubliez pas votre manteau")
# entre 16 et 23
# entre 24 et 32
# entre 32 et 40

# Modifiez la get_random_temp()fonction :
# Ajoutez un paramètre à la fonction, nommé 'saison'.
# À l'intérieur de la fonction, au lieu de simplement générer un nombre aléatoire entre -10 et 40, définissez des limites inférieures et supérieures en fonction de la saison, par exemple. si la saison est 'hiver', les températures ne devraient tomber qu'entre -10 et 16.
# Maintenant que nous avons changé get_random_temp(), changeons la main()fonction :
# Avant d'appeler get_random_temp(), nous devrons décider d'une saison, afin que nous puissions appeler la fonction correctement. Demandez à l'utilisateur de saisir une saison : "été", "automne" (vous pouvez utiliser "automne" si vous préférez), "hiver" ou "printemps".
# Utilisez la saison comme argument lors de l'appel get_random_temp().

# Bonus : Donnez la température sous forme de nombre à virgule flottante au lieu d'un entier.
# Bonus : Au lieu de demander la saison, demandez à l'utilisateur le numéro du mois (1 = janvier, 12 = décembre). Déterminez la saison en fonction du mois.

from random import randint
from tkinter import Variable


print("---------Début---------")

def get_random_temp(saison) :
    if saison == "automne" :
        n = randint(-40,-10)
    if saison == "hiver" :
        n = float(randint(-10,16))
    if saison == "été" :
        n = randint(16,40)
    return n
sais = input("Entrer une saison : ")

print("---------Bonus---------")
# def get_random_temp(mois) :
#     if mois == "12" or mois =="1" or mois == "2":
#         n = randint(-40,-10)
#     elif mois == "3" or mois =="4" or mois == "5":
#         n = float(randint(-10,16))
#     else :
#         n = randint(16,40)
#     return n
# sais = input("Entrer Le numero du mois : ")

def main() :
    variable = get_random_temp(sais)
    print("La température actuelle est de {} degrés Celsius." .format(variable))
    if variable < 0 :
        print("Brrr, c'est glacial ! Portez des couches supplémentaires aujourd'hui")
    if variable < 16 and variable >= 0 :
        print("Assez froid ! N'oubliez pas votre manteau")
    if variable <= 23 and variable >= 16 :
        print("Pas froid ! Laisser votre manteau")
    if variable < 32 and variable >= 24 :
        print("un peut chaux ! Portez des vêtement léges ")
    if variable < 40 and variable >= 32 :
        print("Tres chaux ! Buvez beaucoup d'eau ")
main()
    


    



    
