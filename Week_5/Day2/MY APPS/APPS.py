class Animal():
    def __init__(self, type, number_legs, sound):
        self.type = type
        self.number_legs = number_legs
        self.sound = sound
        
    def make_sound(self):
        print(f"I am an animal, and I love saying {self.sound}")

class Dog(Animal):
    pass

rex= Dog("dog", 4, "wouaf")
print('This animal is a:', rex.type)
# >> This animal is a dog

print('This dog has', rex.number_legs , ' legs')
# >> This dog has 4 legs

print('This dog makes the sound ', rex.sound)
# >> This dog makes the sound wouaf

rex.make_sound()
# >> I am an animal, and I love saying wouaf