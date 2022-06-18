// Find the person who has many skills in the users object.
//not sure what its asking

// Count logged in users, count users having greater than equal to 50 points from the following object.
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
let userlist = Object.entries(users)
console.log(userlist.length)
count = 0
for(i=0;i<userlist.length;i++){
    if(userlist[i][1].points >= 50){
        count += 1
    }
}
console.log(count)

// Find people who are MERN stack developer from the users object
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
mernString = ''
fullstack = true
for(i=0;i<userlist.length;i++){
    for(j=0; j< mernStack.length; j++){
        if(!userlist[i][1].skills.includes(mernStack[j])){
            fullstack = false
        }
    }
    if(fullstack){mernString += userlist[i][0]+' '}
    fullstack = true
}
console.log(mernString + 'are MERN stack developers')

// Set your name in the users object without modifying the original users object
Object.assign(users,{Alenn: {
    email: 'agw73@nau.edu',
    skills: ['HTML', 'CSS', 'JavaScript', 'Java', 'C/C++', 'Python'],
    age: 23,
    isLoggedIn: false,
    points: 0
}})

// Get all keys or properties of users object
console.log(Object.keys(users))

// Get all the values of users object
console.log(Object.values(Object.entries(users)[0][1]))
