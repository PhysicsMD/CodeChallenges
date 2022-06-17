// Develop a small script which generate any number of characters random id:
//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
function randomID(strsize){
    let randStr = ''
    for(i = 0; i <= strsize; i++){
        let num = Math.floor(Math.random()*(122-48-40))+48
        if(num > 57 && num < 97){
            num += 40
        }
        randStr += String.fromCharCode(num)
    }
    return randStr
}
console.log(randomID(10))

// Write a script which generates a random hexadecimal number.
// '#ee33df'
let hexkey = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
function randHex(){
    let outString = '#'
    for(i = 0; i<6; i++){
        outString += hexkey[Math.floor(Math.random()*16)]
    }
    return outString
}
console.log(randHex())

// Write a script which generates a random rgb color number.
// rgb(240,180,80)
function randRGB(){
    return 'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)
        +','+Math.floor(Math.random()*256)+')'
}
console.log(randRGB())

// Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Iceland',
    'Ireland',
    'Japan',
    'Kenya'
]
const allCapCount = []
for(i = 0; i < countries.length; i++){
    allCapCount[i] = countries[i].toUpperCase()
}
console.log(allCapCount)

// Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
const countLen = []
for(i = 0; i < countries.length; i++){
    countLen[i] = countries[i].length
}
console.log(countLen)

// Use the countries array to create the following array of arrays:
//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
const countDic = []
for(i = 0; i < countries.length; i++){
    countDic[i] = [countries[i],allCapCount[i].substring(0,3),countLen[i]]
}
console.log(countDic)


// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland']
function countsWithSub(subString){
    let cIncludes = []
    for(i = 0; i < countries.length; i++){
        if(countries[i].includes(subString)){
            cIncludes.push(countries[i])
        }
    }
    if(cIncludes.length == 0){
        console.log(`All these countries are without ${subString}`)
    }
    else{
        console.log(cIncludes)
    }
}
countsWithSub('land')

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// ['Albania', 'Bolivia','Ethiopia']
countsWithSub('ia')

// Using the above countries array, find the country containing the biggest number of characters.
// Ethiopia
let holder = ['','',0]
for(i = 0; i < countries.length; i++){
    if(countDic[i][2] > holder[2]){
        holder = countDic[i]
    }
}
console.log(holder[0])

// Using the above countries array, find the country containing only 5 characters.
// ['Japan', 'Kenya']
holder = []
for(i = 0; i < countries.length; i++){
    if(countDic[i][2] == 5){
        holder.push(countDic[i][0])
    }
}
console.log(holder)

// Find the longest word in the webTechs array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
for(i = 0; i < webTechs.length; i++){
    if(webTechs[i].length > holder.length){
        holder = webTechs[i]
    }
}
console.log(holder)

// Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
let webTechsDic = []
for(i = 0; i < webTechs.length; i++){
    webTechsDic[i] = [webTechs[i], webTechs[i].length]
}
console.log(webTechsDic)

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
holder = ''
for(i = 0; i < mernStack.length; i++){
    holder += mernStack[i].charAt(0)
}
console.log(holder)

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for(i = 0; i < webTechs.length; i++){
    console.log(webTechs[i])
}

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruit = ['banana', 'orange', 'mango', 'lemon']
holder = []
for(i = fruit.length-1; i >= 0; i--){
    holder[fruit.length-1-i] = fruit[i]
}
fruit = holder
console.log(fruit)

// Print all the elements of array as shown below.
//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
for(i = 0; i < fullStack.length; i++){
    for(let j = 0; j < fullStack[i].length; j++){
        console.log(fullStack[i][j].toUpperCase())
    }
}
