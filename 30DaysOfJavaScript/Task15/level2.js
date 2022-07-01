//Override the method you create in Animal class
class DogYears extends Animal{
    constructor(name, age, color, legs){
        super(name, age, color, legs)
        this.voice = 'Woof'
    }

    get getAge(){
        return this.age*7
    }
}
const dogoo = new DogYears('Honey',9,'Orange',4)
console.log(dogoo.getName)
console.log(dogoo.getAge)
console.log(dogoo.speak())
