# Exercice 7 : Pair Ou Impair
# Des Instructions
# Écrivez un code qui demande à l'utilisateur un nombre et détermine si ce nombre est pair ou impair.

nb1 =  input("Enter un nombre : ")
nb1 = int (nb1)
if nb1 % 2 == 0:
    print(nb1," est paire")
else :
    print(nb1," est impaire")
