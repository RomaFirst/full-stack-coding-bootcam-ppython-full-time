# Des Instructions
# À l'aide de la inputfonction, demandez à l'utilisateur une chaîne. La chaîne doit comporter 10 caractères.
# S'il contient moins de 10 caractères, imprimez un message indiquant "chaîne pas assez longue".
# Si c'est plus de 10 caractères, imprimez un message indiquant "chaîne trop longue".

# Ensuite, imprimez le premier et le dernier caractère du texte donné.
# À l' aide d'un for loop, construisez la chaîne caractère par caractère : imprimez le premier caractère, puis le deuxième, puis le troisième, jusqu'à ce que la chaîne complète soit imprimée. Par exemple:
# The user enters "Hello World"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# Hello World

# 4. Bonus : Échangez quelques caractères puis imprimez la nouvelle chaîne mélangée ( indice : regardez dans la shuffleméthode). Par exemple:
# Hlrolelwod

from ntpath import join
import random
chaine = input("Enter une chaine de caractère : ")
if len(chaine)<10 :
    print("chaîne pas assez longue")
elif len(chaine)>10 :
    print("chaîne trop longue")
else :
    print("Felicitation vous avez entrer une chaine de 10 caracteres")
print("******************************************************")
print(chaine[0])
print(chaine[-1])
print("******************************************************")
chaine2=""
for elemen in chaine :
    chaine2 =chaine2 + elemen
    print(chaine2)

print("----------------BONUS-----------------")
list = list(chaine)
print(list)
random.shuffle(list)
print(list)
chaine = "".join(list)
print(chaine)