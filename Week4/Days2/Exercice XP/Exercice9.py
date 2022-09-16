# Exercice 9 : Cinémax
# Des Instructions
# Une salle de cinéma facture des prix de billets différents en fonction de l'âge d'une personne.
# si une personne a moins de 3 ans, le billet est gratuit.
# s'ils sont entre 3 et 12, le billet est de 10 $.
# s'ils ont plus de 12 ans, le billet est de 15 $.
# Demandez à une famille l'âge de chaque personne qui veut un billet.
# Enregistrez le coût total de tous les billets de la famille et imprimez-le.

# Un groupe d'adolescents vient dans votre salle de cinéma et souhaite regarder un film réservé aux personnes âgées de 16 à 21 ans.
# Compte tenu d'une liste de noms, écrivez un programme qui demande à l'adolescent son âge, s'il n'est pas autorisé pour regarder le film, supprimez-les de la liste.
# À la fin, imprimez la liste finale.

from os import remove


print("--Début--")
somme = 0
nombreBillet=0
nb = int(input("Entrer le nombre de personne qui veullent un billet dans la famille : "))
while nb <= 0 :
    nb = int(input("Entrer le nombre de personne qui veullent un billet dans la famille : "))
for i in range(nb) :
    age = int(input("Entrer l'age de la personne {} : ".format(i+1)))
    while age <= 0 and age >= 135 :
        age = int(input("Entrer l'age de la personne {} : ".format(i+1)))
    if age >3 and age <= 12 :
        somme = somme + 10
        nombreBillet = nombreBillet + 1
    elif age > 12 :
        somme = somme + 15
        nombreBillet = nombreBillet + 1
print("La famille doit payer {n1} billet a {n2} ".format(n1=nombreBillet,n2=somme))

adolescent = ["Alice","Brigitte","Cisse","Leti"]
print(adolescent)
for i in adolescent :
    ageAd = int(input("M/Mme {} enter votre age : ".format(i)))
    if ageAd >= 16 and ageAd <= 21 :
        print("Vous pouvez suivre le films ")
    else :
        adolescent.remove(i)
print(adolescent)




    
    
    





