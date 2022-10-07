# 🌟 Exercice 1 : Convertir Des Listes En Dictionnaires
# Des Instructions
# Convertissez les deux listes suivantes en dictionnaires.
# Astuce : Utilisez la zipméthode
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# Expected output:
# {'Ten': 10, 'Twenty': 20, 'Thirty': 30}

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
list= []
for cle in zip(keys,values):
    list.append(cle)
    print(list)
    print(type(list))
 

