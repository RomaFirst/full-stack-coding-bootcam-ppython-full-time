# Exercice 5 : Mot Le Plus Long Sans Caractère Spécifique
# Des Instructions
# Continuez à demander à l'utilisateur de saisir la phrase la plus longue possible sans le caractère "A".
# Chaque fois qu'un utilisateur définit avec succès une nouvelle phrase la plus longue, imprimez un message de félicitations.
phrase_precedente =""
phrase_actuelle = input ("saisir la phrase la plus longue possible sans le caractère A: ")
while True :
    if "A" in phrase_actuelle :
        print("error")
        phrase_actuelle = input ("saisir la phrase la plus longue possible sans le caractère A: ")
    else :
        longueur_phrase_actuelle = len(phrase_actuelle)
        longueur_phrase_precedente = len (phrase_precedente)
        if longueur_phrase_actuelle>longueur_phrase_precedente :
            print("félicitations vrotre phrase est la plus longue")
            phrase_precedente=phrase_actuelle
        phrase_actuelle = input ("saisir la phrase la plus longue possible sans le caractère A: ")
            



