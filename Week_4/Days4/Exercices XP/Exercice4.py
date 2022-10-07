# Exercice 4 : Aléatoire
# Des Instructions
# Créez une fonction qui accepte un nombre entre 1 et 100 et génère un autre nombre aléatoirement entre 1 et 100.
# Comparez les deux nombres, si c'est le même nombre, affichez un message de réussite, sinon affichez un message d'échec et affichez les deux nombres.

from random import randint, random

print("---------Début---------")
def number(nb) :
    if nb <= 100 and nb >= 1 :
        nb_genere = randint(1,100)
        print("Le nombre génére est : ",nb_genere)
nbs = int(input("Entrer un nombre compris entre 1 et 100 : "))
number(nbs)