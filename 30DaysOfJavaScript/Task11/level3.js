// Destructure the countries object print name, capital, population and languages of all countries
function namecaplang(data){
  for(const country of data){
    console.log(`${country.name},${country.capital},${country.population}`)
  }
}
namecaplang(countries_data)

// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name, skills, [,,jsScore, reactScore]] = student
console.log(name, skills, jsScore, reactScore)
// David (4) ["HTM", "CSS", "JS", "React"] 90 95

//Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(List){
  objectList = []
  for(const student of List){
    objectList.push({name:student[0],skills:student[1],scores:student[2]})
  }
  return objectList
}

console.log(convertArrayToObject(students))

// Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets
const student1 = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

const newStudent = student1
newStudent.skills.frontEnd.push({skill:'Bootstrap',level:8})
newStudent.skills.backEnd.push({skill:'Express',level:9})
newStudent.skills.dataBase.push({skill:'SQL',level:8})
newStudent.skills.dataScience.push('SQL')
console.log(newStudent)
