//Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {

    constructor(name, age, color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
        this.voice = 'Undefined'
    }

    get getName(){
        return this.name
    }

    get getAge(){
        return this.age
    }

    get getColor(){
        return this.color
    }

    get getLegs(){
        return this.legs
    }

    speak(){
        return this.voice
    }
}

//Create a Dog and Cat child class from the Animal Class.

class Dog extends Animal {
    constructor(name, age, color, legs){
        super(name, age, color, legs)
        this.voice = 'Woof'
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs){
        super(name, age, color, legs)
        this.voice = 'Meow'
    }
}

const gato = new Cat('Honey',9,'Orange',4)
console.log(gato.getName)
console.log(gato.getAge)
console.log(gato.speak())
