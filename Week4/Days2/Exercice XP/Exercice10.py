# Exercice 10 : Commandes Sandwich
# Des Instructions
# sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
# Utilisez la liste ci-dessus appelée sandwich_orders.
# Créez une liste vide appelée finished_sandwiches.
# Au fur et à mesure que chaque sandwich est préparé, déplacez-le vers la liste des sandwichs finis.
# Une fois que tous les sandwichs ont été préparés, imprimez un message répertoriant chaque sandwich qui a été préparé , tel que I made your tuna sandwich.

print ("---Début---")

sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
finished_sandwiches = []
print(sandwich_orders[0])
for i in sandwich_orders :
    print("votre {} est preparer" .format(i))
    finished_sandwiches.append(i)
    print(finished_sandwiches)
