# 🌟 Exercice 9 : Assez Grand Pour Faire Des Montagnes Russes
# Des Instructions
# Écrivez un code qui demandera à l'utilisateur sa taille en pouces.
# S'ils mesurent plus de 145 cm, imprimez un message indiquant qu'ils sont assez grands pour rouler.
# S'ils ne sont pas assez grands, imprimez un message indiquant qu'ils doivent grandir un peu plus pour rouler.

taille = input("Entrer votre taille")
taille = float (taille)
if taille >= 145 :
    print("Bravo !! vous pouvez rouler")
else :
    print("Desole😒 vous devez grandir un peu plus avant de pouvoir rouler")