# 🌟 Exercice 3 : Un Peu De Géographie
# Des Instructions
# Écrivez une fonction appelée describe_city()qui accepte le nom d'une ville et son pays comme paramètres.
# La fonction doit imprimer une phrase simple, telle que "<city> is in <country>".
# Par exemple "Reykjavik est en Islande"
# Donnez au paramètre de pays une valeur par défaut.
# Appelez votre fonction.

print("---------Début---------")

def describe_city(ville, pays) :
    print("Les ville de {} est pour le {}" .format(ville, pays))
describe_city("ouagadougou", "Burkina Faso")
