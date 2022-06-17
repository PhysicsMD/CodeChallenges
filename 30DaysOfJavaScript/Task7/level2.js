// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c){
    return `The slope is ${a/(-1*b)} and the y-intercept is ${c/(-1*b)}`
}
console.log(solveLinEquation(1,-2,-2))

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
function solveQuadratic(a=0,b=0,c=0){
    if(a==b && b==c && c == 0){
        return '{0}'
    }
    let firstVal = (-b+Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a)
    let secondVal = (-b-Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a)
    if(firstVal == secondVal){
        return `{${firstVal}}`
    }
    return `{${firstVal}, ${secondVal}}`
}
console.log(solveQuadratic(1, 4, 4))

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}
printArray([1, 2, 3, 4, 5])

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08
function formatDoubleSpace(Number){
    if(Number < 10){
        return `0${Number}`
    }
    return Number
}
function showDateTime(){
    let day = new Date()
    return `${formatDoubleSpace(day.getMonth()+1)}/${formatDoubleSpace(day.getUTCDate())}/${formatDoubleSpace(day.getFullYear())} ${formatDoubleSpace(day.getHours())}:${formatDoubleSpace(day.getMinutes())}`
}
console.log(showDateTime())

// Declare a function name swapValues. This function swaps value of x to y.
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
function swapValues(val1, val2){
    return [val2, val1]
}
console.log(swapValues(3,4))

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']
function reverseArray(array){
    let holder = []
    for(i = array.length-1; i >= 0; i--){
        holder[array.length-1-i] = array[i]
    }
    return holder
}
console.log(reverseArray([1, 2, 3, 4, 5]))

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(array){
    for(i = 0; i<array.length; i++){
        array[i] = array[i].charAt(0).toUpperCase()+array[i].substr(1)
    }
}
let countArr = [
    'albania',
    'bolivia',
    'canada',
    'denmark',
    'ethiopia',
    'finland',
    'germany',
    'hungary',
    'ireland',
    'japan',
    'kenya'
  ]
capitalizeArray(countArr)
console.log(countArr)

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
let holder = countArr
function addItem(item, array = holder){
    array.push(item)
}
addItem('Items')
console.log(holder)

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(index = 0, array = holder){
    for(i = 0; i < array.length-1; i++){
        if(i < index){
            array[i] = array[i]
        }
        else{
            array[array[i] = array[i+1]]
        }
    }
    array.pop()
}
removeItem(4)
console.log(holder)

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(range){
    let runningSum = 0
    for(i = 0; i <= range; i++){
        runningSum += i
    }
    return runningSum
}
console.log(sumOfNumbers(15))

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(range){
    let runningSum = 0
    for(i = 0; i <= range; i++){
        if(i%2 != 0){
            runningSum += i
        }
    }
    return runningSum
}
console.log(sumOfOdds(15))

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(range){
    let runningSum = 0
    for(i = 0; i <= range; i++){
        if(i%2 == 0){
            runningSum += i
        }
    }
    return runningSum
}
console.log(sumOfEven(15))

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
function evensAndOdds(range){
    let odds = 0
    let evens = 0
    for(i = 0; i <= range; i++){
        if(i%2 == 0){
            evens += 1
        }
        else{
            odds += 1
        }
    }
    console.log(`The number of odds are ${odds}`)
    console.log(`The number of evens are ${evens}`)
}
evensAndOdds(100)


// Write a function which takes any number of arguments and return the sum of the arguments
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
function sum(...nums){
    let runningSum = 0
    for(let num in nums){
        runningSum += nums[num]
    }
    return runningSum
}
console.log(sum(1, 2, 3, 4))

// Writ a function which generates a randomUserIp.
function randomUserIp(){
    let ip = ''
    for(i = 0; i < 4; i++){
        ip += Math.floor(Math.random()*256) +'.'
    }
    return ip.substring(0,ip.length-1)
}
console.log(randomUserIp())

// Write a function which generates a randomMacAddress
function randomMacAddress(){
    let mac = ''
    let hexkey = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    for(i = 0; i < 6; i++){
        mac += hexkey[Math.floor(Math.random()*16)]+''+hexkey[Math.floor(Math.random()*16)] +'-'
    }
    return mac.substring(0,mac.length-1)
}
console.log(randomMacAddress())

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// console.log(randomHexaNumberGenerator());
// '#ee33df'
function randomHexaNumberGenerator(){
    let hexCode = '#'
    let hexkey = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    for(i = 0; i < 6; i++){
        hexCode += hexkey[Math.floor(Math.random()*16)]
    }
    return hexCode
}
console.log(randomHexaNumberGenerator())

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// console.log(userIdGenerator());
// 41XTDbE
function userIdGenerator(){
    let ID = ''
    for(i = 0; i < 7; i++){
        let numberCode = Math.floor(Math.random()*(122-13-48)+48)
        if(57 < numberCode && numberCode < 65){
            numberCode += 7
        }
        if( 90 < numberCode && numberCode < 97){
            numberCode += 6
        }
        ID += String.fromCharCode(numberCode)
    }
    return ID
}
console.log(userIdGenerator())
