#  Exercice 2 : Cinémax
# Des Instructions
# Une salle de cinéma facture des prix de 
# billets différents en fonction de l'âge d'une personne.
# si une personne a moins de 3 ans, le billet est gratuit.
# s'ils sont entre 3 et 12, le billet est de 10 $.
# s'ils ont plus de 12 ans, le billet est de 15 $.

# Soit l'objet suivant :

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


# Combien chaque membre de la famille doit-il payer ?

# Imprimez le coût total de la famille pour les films.
# Bonus : Demander à l'utilisateur de saisir 
# les noms et âges au lieu d'utiliser la
#  familyvariable fournie 
# ( Astuce : demander à l'utilisateur les 
# noms et âges et les ajouter dans un 
# familydictionnaire initialement vide).

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
somme=0
nombreBillet=0
for x,y in family.items():
    if y >3 and y <= 12 :
        somme = somme + 10
        print(x,"paye 10$")
        nombreBillet = nombreBillet + 1
    elif y > 12 :
        somme = somme + 15
        print(x,"paye 15$")
print("La somme totale que la famille doit payé:",somme,"$")
familly={}
nomcl = list(input("Entrer votre nom : "))
print(nomcl)
agecl = input("Entrer Votre age :")
print(agecl)
for nom in nomcl :
    for age in agecl :
        familly[nomcl] = agecl
        break
    print(familly)
