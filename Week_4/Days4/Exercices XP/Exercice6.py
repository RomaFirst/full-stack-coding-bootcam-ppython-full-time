# 🌟 Exercice 6 : Magiciens …
# Des Instructions
# En utilisant cette liste de noms de magiciens.magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
# Passez la liste à une fonction appelée show_magicians(), qui imprime le nom de chaque magicien de la liste.
# Écrivez une fonction appelée make_great()qui modifie la liste des magiciens en ajoutant la phrase "the Great"au nom de chaque magicien.
# Appelez la fonction make_great().
# Appelez la fonction show_magicians()pour voir que la liste a bien été modifiée.
print("---------Début---------")

def show_magicians(name) :
    for nom in name :
        print(nom.title())
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
show_magicians(magician_names)

