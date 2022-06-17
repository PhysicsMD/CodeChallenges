// Declare a function fullName and it print out your full name.
function fullName(firstName, lastName){
    console.log(`${firstName} ${lastName}`)
}
fullName('Alenn','Wright')

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
//done above

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2){
    return num1+num2
}
console.log(addNumbers(3,5))

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width){
    return length*width
}
console.log(areaOfRectangle(5,5))

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width){
    return (length+width)*2
}
console.log(perimeterOfRectangle(5,5))

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height){
    return length*width*height
}
console.log(volumeOfRectPrism(5,5,5))

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius){
    return Math.PI*Math.pow(radius,2)
}
console.log(areaOfCircle(5))

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(radius){
    return Math.PI*radius*2
}
console.log(circumOfCircle(5))

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume){
    return mass/volume
}
console.log(density(2,1))

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function velocity(distance, time){
    return distance/time
}
console.log(velocity(5,2))

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass){
    return mass*9.807 //gravity on Earth
}
console.log(weight(20))

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celsius){
    return (celsius*9/5)+32
}
console.log(convertCelsiusToFahrenheit(5))

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function bmi(weight, height){
    let scale = weight/Math.pow(height,2)
    if(scale >= 30){
        return 'Obese'
    }
    if(scale >= 25){
        return 'Overweight'
    }
    if(scale >= 18.5){
        return 'Normal'
    }
    return 'Underweight'
}
console.log(bmi(136, 1.778))

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month){
    if(['December','January','February'].includes(month)){
        return 'Winter'
    }
    if(['March','April','May'].includes(month)){
        return 'Spring'
    }
    if(['June','July','August'].includes(month)){
        return 'Summer'
    }
    if(['September','October','November'].includes(month)){
        return 'Autumn'
    }
    return 'Invalid Input'
}
console.log(checkSeason('September'))

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0
function findMax(num1, num2, num3){
    return Math.max(num1, num2, num3)
}
console.log(findMax(0, -10, -2))
