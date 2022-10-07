# 🌟 Exercice 7 : Fruits Préférés
# Des Instructions
# Demander à l'utilisateur de saisir son/ses fruit(s) préféré(s) (un ou plusieurs fruits).
# Astuce : Utilisez la input méthode intégrée. Demandez à l'utilisateur de séparer les fruits avec un seul espace, par ex. "apple mango cherry".
# Stocker le(s) fruit(s) préféré(s) dans une liste (convertir la chaîne de mots en une liste de mots).
# Maintenant que nous avons une liste de fruits, demandez à l'utilisateur d'entrer le nom de n'importe quel fruit.
# Si l'entrée de l'utilisateur se trouve dans la liste des fruits favoris, écrivez « Vous avez choisi l'un de vos fruits préférés ! Prendre plaisir!".
# Si l'entrée de l'utilisateur n'est PAS dans la liste, écrivez : « Vous avez choisi un nouveau fruit. J'espère que tu apprécies".


print("-----Début-------------")

fruits_prerefe = input("Entre vos fruits prefere : ")
list1 = fruits_prerefe.split(", ")
print(list1)
print(type(list1))
fruits_verif = input("Entre vos fruits prefere : ")
if fruits_verif in list1 :
    print("Vous avez choisit l'un de vos fruits Prefere")
else :
    print("Vous avez choisi un nouveau fruit")