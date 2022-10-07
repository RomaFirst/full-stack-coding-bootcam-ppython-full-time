# Exercice 1 : Voitures
# Des Instructions
# Copiez la chaîne suivante dans votre code : "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet".
# Convertissez-le en une liste en utilisant Python (ne le faites pas à la main !).
# Imprimez un message indiquant le nombre de fabricants/entreprises figurant dans la liste.
# Imprimez la liste des fabricants dans l'ordre inverse/descendant (ZA).
# Utilisation de boucles ou de compréhension de liste :
# Découvrez combien de noms de fabricants contiennent la lettre « o ».
# Découvrez combien de noms de fabricants ne contiennent pas la lettre « i ».

# Bonus : Il y a quelques doublons dans cette liste :["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
# Supprimez-les par programmation. ( Astuce : vous pouvez utiliser setpour vous aider).
# Imprimez les entreprises sans doublons, dans une chaîne séparée par des virgules sans saut de ligne (par exemple "Acura, Alfa Romeo, Aston Martin, ..."), imprimez également un message indiquant combien d'entreprises sont maintenant dans la liste.

# Bonus : Imprimez la liste des fabricants par ordre croissant (AZ), mais inversez les lettres du nom de chaque fabricant.

from audioop import reverse
from socket import SO_EXCLUSIVEADDRUSE


print("---Début---")
code = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
listvoiture = []
listvoiture =code.split(",")
print("La liste des fabriquants : ",listvoiture)
print("Le nombre de fabriquant est : ",len(listvoiture))
listinverse = sorted(listvoiture, reverse=True)
print("La liste en inverse est : ",listinverse)

print("---------------Lettre o---------------")

cmpt = 0
c =0
for i in listvoiture :
    for j in i:
        if j == "o" :
            c = c + 1
            ca = c/c       
    cmpt = cmpt + ca
print ("Le nombre de frabriquant qui on 'o' dans leur nom est : ",cmpt)

print("---------------Lettre i---------------")
cmpti = 0
ci = 0
for b in listvoiture :
    for k in b:
        if k == "i" :
            c1 = c1 + 1
            ci = c1/c1       
    cmpti = cmpti + ci
print ("Le nombre de frabriquant qui on 'i' dans leur nom est : ",cmpti)


print("-----------------BONUS-----------------------")

listfab = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
print(listfab)
listfab = list(set(listfab))
print("La liste san les doublons est : ", listfab)
str = ','.join(listfab)
print("Le nombre d'entreprise est : ", len(listfab))
print("Les entreprise en une ligne : ",str)

listfab = sorted(listfab)
print(listfab)

for i in listfab : 
    i = reverse(i)    #non terminer
print(listfab)
