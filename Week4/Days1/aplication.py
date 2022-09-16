nb = input("Saisir un nombre entre 1 et 100 : ")
nb = int (nb)
mod3=nb % 3
mod5=nb % 5
if mod3 ==0 :
    print("Fizz")
if mod5 ==0 :
    print("Buzz")
if mod3==0 and mod5==0:
    print("FizzBuzz")
else:
    print("Auqun cas")