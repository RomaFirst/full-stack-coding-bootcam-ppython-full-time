# 🌟 Exercice 3 : Liste
# Des Instructions
# Utilisation de cette listebasket = ["Banana", "Apples", "Oranges", "Blueberries"];
# Supprimez "Banane" de la liste.
# Supprimez « Myrtilles » de la liste.
# Ajoutez "Kiwi" à la fin de la liste.
# Ajoutez « Pommes » au début de la liste.
# Comptez combien de pommes il y a dans le panier.
# Videz le panier.
# Impression(panier)
from os import remove


print("-------------Débu----------------")
print("-------------question1----------------")

listebasket = ["Banana", "Apples", "Oranges", "Blueberries"];
listebasket.remove("Banana")
print(listebasket)

print("-------------Question2----------------")
listebasket.pop(-1)
print(listebasket)

print("-------------Question3----------------")
listebasket.insert(2,"Kiwi")
print(listebasket)
print("-------------Question3 autre methode----------------")
listebasket.append("mango")
print(listebasket)
print("-------------Question4----------------")
listebasket.insert(0,"Apples")
print(listebasket)
print("-------------Question5----------------")
count =listebasket.count("Apples")
print("Il ya au total ",count, " Apples dans le panier" )

print("-------------Question5(autre methode pour concatener)----------------")

print("Il ya au total {} Apples dans le panier".format(count) )

print("-------------Question6----------------")
listebasket.clear()
print(listebasket)




