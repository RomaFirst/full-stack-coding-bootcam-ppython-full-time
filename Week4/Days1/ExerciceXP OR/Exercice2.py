mois = int(input("Saisisser un mois compris entre (1-12): "))
if mois >=3 and mois <=5:
    print("C'est le primptemps")
elif mois >=6 and mois <=8:
    print("C'est l'été")
elif mois >=9 and mois <= 11:
    print("C'est lautomne")
elif mois == 12 or mois ==1 or mois ==2:
    print("C'est l'hiver")
else:
    print("Le nombre doit être compris entre 1 et 12")