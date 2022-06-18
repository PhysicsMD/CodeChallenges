// Create an empty object called dog
const dog = {}

// Print the the dog object on the console
console.log(dog)

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
Object.assign(dog, {name:'Rex',legs:4, color:'Brown', age:1,bark(){return 'woof woof'}})

// Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())

// Set new properties the dog object: breed, getDogInfo
Object.assign(dog, {breed:undefined, gotDogInfo:function(){return this.name}})
console.log(dog.breed)
console.log(dog.gotDogInfo())
