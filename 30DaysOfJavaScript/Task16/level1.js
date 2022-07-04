const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

// Change skills array to JSON using JSON.stringify()
console.log(JSON.stringify(skills))

// Stringify the age variable
console.log(JSON.stringify(age))

// Stringify the isMarried variable
console.log(JSON.stringify(isMarried))

// Stringify the student object
console.log(JSON.stringify(student))
