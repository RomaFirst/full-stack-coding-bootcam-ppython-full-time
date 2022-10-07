# 🌟 Exercice 1 : Set
# Des Instructions
# Créez un ensemble appelé my_fav_numbers avec tous vos numéros favoris.
# Ajoutez deux nouveaux numéros à l'ensemble.
# Supprimez le dernier numéro.
# Créez un ensemble appelé friend_fav_number savec les numéros favoris de votre ami.
# Concaténer my_fav_numbers  et friend_fav_numbers à une nouvelle variable appelée our_fav_numbers.

print("----------Creation-------------------")
my_fav_numbers = {53,12,30,10,75,80}
print("----------Ajout-------------------")
my_fav_numbers.add(60)
my_fav_numbers.add(57)
print(my_fav_numbers)
print("----------suprimer dernier element-------------------")
my_fav_numbers.remove(list(my_fav_numbers)[-1])
print(my_fav_numbers)
print("----------creation-------------------")

friend_fav_number ={11,15,66,99,3,33,25,5,4}
our_fav_numbers = list(my_fav_numbers)+list(friend_fav_number)
our_fav_numbers = set(our_fav_numbers)
print(our_fav_numbers)

print("----------Union-------------------")
our_fav_numbers = friend_fav_number.union(my_fav_numbers)
print(our_fav_numbers)