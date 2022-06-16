const age = parseInt(prompt("Enter your age: "))
//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
    //Enter your age: 30
    //You are old enough to drive.
    //Enter your age:15
    //You are left with 3 years to drive.
function canDrive(age){
    if(age>=18){
        return "You are old enough to drive"
    }
    return "You will be allowed to drive after " + (18-parseInt(age)) + " years."
}
console.log(canDrive(age))

//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
    //Enter your age: 30
    //You are 5 years older than me.
function olderOrNot(age){
    if(age>23){
        return "You are " + (parseInt(age)-23) + " years older than me."
    }
    return "You are " + (parseInt(age)-23) + " years younger than me."
}
console.log(olderOrNot(age))

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
    //using if else
    //ternary operator.
    //let a = 4
    //let b = 3
    //4 is greater than 3
let a = 4
let b = 3
let isGreater = a>b
isGreater
    ? console.log("a is greater than b")
    : console.log("a is less than b")

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
    //Enter a number: 2
    //2 is an even number
    //Enter a number: 9
    //9 is is an odd number.
function isEven(num){
    if(num%2 == 0){
        return num + " is an even number"
    }
    return num + " is an odd number"
}
console.log(isEven(prompt("Enter a Number: ")))
