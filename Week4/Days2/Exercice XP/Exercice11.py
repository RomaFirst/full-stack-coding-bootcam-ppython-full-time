# Exercice 11 : Sandwich Orders#2
# Des Instructions
# En utilisant la liste sandwich_ordersde l'exercice précédent, assurez-vous que le sandwich 'pastrami' apparaît dans la liste au moins trois fois.
# Ajoutez du code au début de votre programme pour imprimer un message indiquant que la charcuterie n'a plus de pastrami, puis utilisez une whileboucle pour supprimer toutes les occurrences de 'pastrami' de sandwich_orders.
# Assurez-vous qu'aucun sandwich au pastrami ne se retrouve dans finished_sandwiches.

print("---Début---")

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich" ,"Avocado sandwich", "Egg sandwich", "Pastrami sandwich" ,"Sabih sandwich", "Pastrami sandwich"]
finished_sandwiches = []
print(sandwich_orders[0])
for i in sandwich_orders :
    print("votre {} est preparer" .format(i))
    finished_sandwiches.append(i)
    print(finished_sandwiches)
print("la charcuterie n'a plus de pastrami !😒😒😒")
while "Pastrami sandwich" in sandwich_orders :
    sandwich_orders.remove("Pastrami sandwich")
print("--ORDER--")
print("La listes des order {fa}".format(fa=sandwich_orders))
while "Pastrami sandwich" in finished_sandwiches :
    finished_sandwiches.remove("Pastrami sandwich")
print("--FINISHED--")
print("La listes des finis {fi}".format(fi=finished_sandwiches))
