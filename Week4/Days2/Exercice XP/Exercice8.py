# Exercice 8 : Qui A Commandé Une Pizza ?
# Des Instructions
# Écrivez une boucle qui demande à un utilisateur d'entrer une série de garnitures de pizza, lorsque l'utilisateur saisit "quitter", arrêtez de demander des garnitures.
# Au fur et à mesure qu'ils entrent dans chaque garniture, imprimez un message indiquant que vous ajouterez cette garniture à leur pizza.
# À la sortie de la boucle, imprimez toutes les garnitures sur la pizza et quel est le prix total (10 + 2,5 pour chaque garniture).
print("----Début-----")

garniture = input("Entrer une garniture")
garnitures=[]
while garniture != "quitter" :
    print("Vous avez ajouter {va}".format(va=garniture))
    garnitures.append(garniture)
    garniture = input("Entrer une garniture")
print("La liste des garniture: {ga}".format(ga=garnitures))
print("--------------------------------")
somme = 10 + (len(garnitures)*2.5)
print("le prix total est : {s}".format(s=somme))


