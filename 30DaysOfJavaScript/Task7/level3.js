// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
function userIdGeneratorByUser(){
    ids = parseInt(prompt("How many ID's would you like: "))
    charLen = parseInt(prompt("How many characters long should the ID's be: "))
    for(let count = 0; count<ids; count++){
    let ID = ''
    for(i = 0; i < charLen; i++){
        let numberCode = Math.floor(Math.random()*(122-13-48)+48)
        if(57 < numberCode && numberCode < 65){
            numberCode += 7
        }
        if( 90 < numberCode && numberCode < 97){
            numberCode += 6
        }
        ID += String.fromCharCode(numberCode)
    }
    console.log(ID)
    }
}
userIdGeneratorByUser()

// Write a function name rgbColorGenerator and it generates rgb colors.
// rgbColorGenerator()
// rgb(125,244,255)
function rgbColorGenerator(){
    return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
}
console.log(rgbColorGenerator())

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(num = parseInt(prompt("How many HEX colors would you like: "))){
    let holder = []
    for(let count = 0; count<num; count++){
    let hex = '#'
    for(i = 0; i < 6; i++){
        let numberCode = Math.floor(Math.random()*16)
        if(numberCode == 0){ hex += '0'}
        else{hex += numberCode.toString(16)}
    }
    holder[count] = hex
    }
    return holder
}
console.log(arrayOfHexaColors())

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(countCodes = parseInt(prompt('Enter number of RGB codes: '))){
    holder = []
    for(i=0; i < countCodes; i++){
        holder[i] = rgbColorGenerator()
    }
    return holder
}
console.log(arrayOfRgbColors())

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hexcode){
    return(`rgb(${parseInt(hexcode.substr(1,2), 16)},${parseInt(hexcode.substr(3,2), 16)},${parseInt(hexcode.substr(5,2), 16)})`)
}
console.log(convertHexaToRgb('#a4f213'))

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(rgbCode){
    let holder = rgbCode.replace('rgb(', '').replaceAll(',', ' ').replace(')','').split(' ')
    return `#${parseInt(holder[0]).toString(16)}${parseInt(holder[1]).toString(16)}${parseInt(holder[2]).toString(16)}`
}
console.log(convertRgbToHexa('rgb(164,242,19)'))

// Write a function generateColors which can generate any number of hexa or rgb colors.
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
function generateColors(type, count){
    if(type == 'rgb'){
        return arrayOfRgbColors(count)
    }
    if(type == 'hexa'){
        return arrayOfHexaColors(count)
    }
    console.log('Invalid Output')
}
console.log(generateColors('hexa', 4))

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(array){
    holder = []
    while(array.length != 0){
        holder[holder.length] = array.splice(Math.floor(Math.random()*array.length),1)[0]
    }
    return holder
}
let temp = generateColors('hexa', 4)
console.log(temp)
console.log(shuffleArray(temp))

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(num){
    if(num <= 1){
        return 1
    }
    return factorial(num-1)*num
}
console.log(factorial(5))

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(array){
    return array.length == 0
}
console.log(isEmpty([]))

// Call your function sum, it takes any number of arguments and it returns the sum.
function sum(...nums){
    let runningSum = 0
    for(const num in nums){
        runningSum += nums[num]
    }
    return runningSum
}
console.log(sum(1,2,3,4,5,6,7,8,9))

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(array){
    if(typeof array[0] ){
        sum = 0
        for(i = 0; i < array.length; i++){
            sum += array[i]
        }
        return sum
    }
    return 'Input is a Non-Integer array'
}
console.log(sumOfArrayItems([1,2,3,4,5,6,7,8,9]))


// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function averageOfArrayItems(array){
    if(typeof array[0] ){
        average = 0
        for(i = 0; i < array.length; i++){
            average += array[i]
        }
        return average/array.length
    }
    return 'Input is a Non-Integer array'
}
console.log(averageOfArrayItems([1,2,3,4,5,6,7,8,9]))

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'
function modifyArray(array){
    if(array.length < 5){
        return 'item not found'
    }
    array[4] = array[4].toUpperCase()
    return array
}
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']))

// Write a function called isPrime, which checks if a number is prime number.
function isPrime(num){
    if(num <= 3){
        return true
    }
    for(i = 2; i<num;i++){
        if(num%i == 0){
            return false
        }
    }
    return true
}
console.log(isPrime(1573))

// Write a functions which checks if all items are unique in the array.
function isUniqueList(list){
    list.sort()
    if(list.length < 2){ return true}
    for(i = 0; i<list.length-1; i++){
        if(list[i] == list[i+1]){
            return false
        }
    }
    return true
}
console.log(isUniqueList([1,2,3,4,5,5]))

// Write a function which checks if all the items of the array are the same data type.
function checkSameType(array){
    for(i=0; i<array.length-1;i++){
        if(typeof array[i] != typeof array[i+1]){
            return false
        }
    }
    return true
}
console.log(checkSameType([1,2,3,4,5,6]))

// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(name){
    let banned = `\`!@#%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`
    for(i = 0; i<name.length; i++){
        if(banned.includes(name.charAt(i))){
            return false
        }
    }
    return true
}
console.log(isValidVariable('namaiwa'))

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
function sevenRandomNumbers(){
    let list = []
    while(list.length != 7){
        rand = Math.floor(Math.random()*10)
        if(!list.includes(rand)){
            list.push(rand)
        }
    }
    return list
}
console.log(sevenRandomNumbers())

// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
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
function reverseCountries(){
    let copy = []
    for(i = countries.length-1; i >= 0; i--){
        copy[countries.length-i-1] = countries[i]
    }
    return copy
}
console.log(reverseCountries())
