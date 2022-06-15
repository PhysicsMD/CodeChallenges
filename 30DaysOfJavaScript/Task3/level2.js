//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
//Enter base: 20
//Enter height: 10
//The area of the triangle is 100
function areaOfTriangle(base, height){
    return base*height*.5
}
console.log(areaOfTriangle(prompt('Enter base: '),prompt('Enter height: ')))

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
//Enter side a: 5
//Enter side b: 4
//Enter side c: 3
//The perimeter of the triangle is 12
function perimeterOfTriangle(sidea, sideb, sidec){
    return parseInt(sidea)+parseInt(sideb)+parseInt(sidec)
}
console.log(perimeterOfTriangle(prompt('Enter side A: '),prompt('Enter side B: '),prompt('Enter side C: ')))

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
function areaOfRectangle(length, width){
    return parseInt(length)*parseInt(width)
}
function perimeterOfRectangle(length, width){
    return parseInt(length)*2+parseInt(width)*2
}
let length = prompt("Enter Rectangle Length: ")
let width = prompt("Enter Rectangle Width: ")
console.log("The area of the rectangle is", areaOfRectangle(length, width))
console.log("The perimeter of the rectangle is",perimeterOfRectangle(length, width))

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
function areaOfCircle(radius){
    return parseInt(radius)*parseInt(radius)*Math.PI
}
function circumferenceOfCircle(radius){
    return parseInt(radius)*Math.PI*2
}
let radius = prompt("Enter the Radius: ")
console.log("The area of the circle is", areaOfCircle(radius))
console.log("The circumference of the circle is", circumferenceOfCircle(radius))

//Calculate the slope, x-intercept and y-intercept of y = 2x -2
let functionString = 'y = 2x -2'
let sectionsFunc = functionString.split(' ')
console.log("The slope is:", sectionsFunc[2][0])
console.log("The x intercept is:", (0-parseInt(sectionsFunc[3]))/parseInt(sectionsFunc[2][0]))
console.log("The y intercept is:", sectionsFunc[3])

//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
function slope(x1,x2,y1,y2){
    return (y2-y1)/(x2-x1)
}
console.log(slope(2,6,2,10))


//Compare the slope of above two questions.
console.log(slope(2,6,2,10) == sectionsFunc[2][0])

//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
console.log((-6+Math.sqrt(4*9))/4)
console.log((-6-Math.sqrt(4*9))/4)

//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
//Enter hours: 40
//Enter rate per hour: 28
//Your weekly earning is 1120
function weeklyPay(hours, rateOfPay){
    return hours*rateOfPay
}
console.log("Your weekly earning is "+weeklyPay(prompt("Enter hours: "), prompt("Enter rate per hour: ")))

//If the length of your name is greater than 7 say, your name is long else say your name is short.
function namelength(nameString){
    if(nameString.length > 7){
        return "Your name is long"
    }
    return "Your name is short"
}
console.log(namelength(prompt("Enter your name: ")))

//Compare your first name length and your family name length and you should get this output.
//let firstName = 'Asabeneh'
//let lastName = 'Yetayeh'
//Your first name, Asabeneh is longer than your family name, Yetayeh
function longername(firstString, SecondString){
    if(firstString.length >= SecondString.length){
        return "Your first name, "+ firstString +" is longer than your family name, "+SecondString
    }
    return "Your family name, "+ SecondString +" is longer than your first name, "+firstString
}
console.log(longername(prompt("Enter your first name: "),prompt("Enter your last name: ")))

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
//let myAge = 250
//let yourAge = 25
//I am 225 years older than you.
let myAge = 250
let yourAge = 25
console.log("I am",(parseInt(myAge)-parseInt(yourAge)),"years older than you.")

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
//Enter birth year: 1995
//You are 25. You are old enough to drive
//Enter birth year: 2005
//You are 15. You will be allowed to drive after 3 years.
function canDrive(age){
    if(age>=18){
        return "You are " + age + ". You are old enough to drive"
    }
    return "You are " + age + ". You will be allowed to drive after " + (18-parseInt(age)) + " years."
}
console.log(canDrive(2022-parseInt(prompt("Enter Birth year: "))))

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
//Enter number of years you live: 100
//You lived 3153600000 seconds.
let years = prompt("Enter number of years you live: ")
console.log("You lived",parseInt(years)*365*3600*24,"seconds.")

//Create a human readable time format using the Date time object
//YYYY-MM-DD HH:mm
//DD-MM-YYYY HH:mm
//DD/MM/YYYY HH:mm
function doublechar(string){
    let num = parseInt(string)
    if(num < 10){
        return '0' + string
    }
    return string
}
let currentDate = new Date()
console.log(currentDate.getFullYear()+'-'+doublechar(currentDate.getMonth()+1)+'-'+doublechar(currentDate.getDate())+' '+doublechar(currentDate.getHours())+':'+doublechar(currentDate.getMinutes()))
console.log(doublechar(currentDate.getDate())+'-'+doublechar(currentDate.getMonth()+1)+'-'+currentDate.getFullYear()+' '+doublechar(currentDate.getHours())+':'+doublechar(currentDate.getMinutes()))
console.log(doublechar(currentDate.getDate())+'/'+doublechar(currentDate.getMonth()+1)+'/'+currentDate.getFullYear()+' '+doublechar(currentDate.getHours())+':'+doublechar(currentDate.getMinutes()))
