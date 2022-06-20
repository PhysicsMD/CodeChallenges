const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]

// Iterate through the users array and get all the keys of the object using destructuring
//I believe this is asking to iterate and use spread to print out the user data
function displayobj(...args){
    for(const item of args){
        console.log(...item)
    }
}
displayobj(users)

// Find the persons who have less than two skills
function displayskills(args){
    returnlist = args.filter(item => item.skills.length < 2)
    return returnlist
}
console.log(displayskills(users))
