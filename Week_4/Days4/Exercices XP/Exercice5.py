# 🌟 Exercice 5 : Créons Des Chemises Personnalisées !
# Des Instructions
# Écrivez une fonction appelée make_shirt()qui accepte une taille et le texte d'un message qui doit être imprimé sur la chemise.
# La fonction doit imprimer une phrase résumant la taille de la chemise et le message imprimé dessus, comme"The size of the shirt is <size> and the text is <text>"
# Appelez la fonction make_shirt().

# Modifiez la make_shirt()fonction pour que les chemises soient grandes par défaut avec un message indiquant "J'aime Python" par défaut.
# Faire une grande chemise avec le message par défaut
# Faire une chemise moyenne avec le message par défaut
# Faites une chemise de n'importe quelle taille avec un message différent.

# Bonus : Appelez la fonction make_shirt()en utilisant des arguments mot-clé.

from msilib.schema import tables


print("---------Début---------")

def make_shirt(taille, texte) :
    print("The size of the shirt is {} and the text is {} " .format(taille, texte))
make_shirt("XL","couleur rouge")

print("------------------")

def make_shirt(taille = "Grand", texte = "J'ai Python") :
        print("The size of the shirt is {} and the text is {} " .format(taille, texte))

print("------------------")

def make_shirt(taille = "Grand", texte = "Pour des aldults") :
        print("The size of the shirt is {} and the text is {} " .format(taille, texte))

print("------------------")

def make_shirt(taille = "Moyenne", texte = "Pour les Jeune") :
        print("The size of the shirt is {} and the text is {} " .format(taille, texte))

print("------------------")

def make_shirt(taille , texte ) :
        print("The size of the shirt is {} and the text is {} " .format(taille, texte))
make_shirt(taille = "Grand", texte = "J'ai Python")
make_shirt(taille = "Grand", texte = "Pour des aldults")
make_shirt(taille = "Moyenne", texte = "Pour les Jeune")
make_shirt(taille="",texte="")



