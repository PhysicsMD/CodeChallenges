//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Alenn", lastName = "Wright", country = "United States", city = "Phoenix", age = 23, isMarried = false, year = 2022
console.log("The data type of","firstName","is a",typeof firstName)
console.log("The data type of","lastName","is a",typeof lastName)
console.log("The data type of","country","is a",typeof country)
console.log("The data type of","city","is a",typeof city)
console.log("The data type of","age","is a",typeof age)
console.log("The data type of","isMarried","is a",typeof isMarried)
console.log("The data type of","year","is a",typeof year)

//Check if type of '10' is equal to 10
console.log(typeof '10' == 10)

//Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10)

//Boolean value is either true or false.
    //Write three JavaScript statement which provide truthy value.
    console.log("Truthy values")
    console.log(10 == 10)
    console.log('because'.charAt(2))
    console.log('remember'.length)
    //Write three JavaScript statement which provide falsy value.
    console.log("falsy values")
    console.log('10' == 10)
    console.log('because'.charAt(-1))
    console.log(0)

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    //4 > 3
    console.log(4 > 3)//true
    //4 >= 3
    console.log(4 >= 3)//true
    //4 < 3
    console.log(4 < 3)//false
    //4 <= 3
    console.log(4 <= 3)//false
    //4 == 4
    console.log(4 == 4)//true
    //4 === 4
    console.log(4 === 4)//true
    //4 != 4
    console.log(4 != 4)//false
    //4 !== 4
    console.log(4 !== 4)//false
    //4 != '4'
    console.log(4 != '4')//false
    //4 == '4'
    console.log(4 == '4')//true
    //4 === '4'
    console.log(4 === '4')//false
    //Find the length of python and jargon and make a falsy comparison statement.
    console.log('python'.length != 'jargon'.length)

//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
    //4 > 3 && 10 < 12
    console.log(4 > 3 && 10 < 12)//true
    //4 > 3 && 10 > 12
    console.log(4 > 3 && 10 > 12)//false
    //4 > 3 || 10 < 12
    console.log(4 > 3 || 10 < 12)//true
    //4 > 3 || 10 > 12
    console.log(4 > 3 || 10 > 12)//true
    //!(4 > 3)
    console.log(!(4 > 3))//false
    //!(4 < 3)
    console.log(!(4 < 3))//true
    //!(false)
    console.log(!(false))//true
    //!(4 > 3 && 10 < 12)
    console.log(!(4 > 3 && 10 < 12))//false
    //!(4 > 3 && 10 > 12)
    console.log(!(4 > 3 && 10 > 12))//true
    //!(4 === '4')
    console.log(!(4 === '4'))//true
    //There is no 'on' in both dragon and python
    console.log(!('dragon'.includes('on') && 'python'.includes('on')))

//Use the Date object to do the following activities
    const now = new Date()
    //What is the year today?
    console.log(now.getUTCFullYear())
    //What is the month today as a number?
    console.log(now.getMonth())
    //What is the date today?
    console.log(now.getMonth() + '/' + now.getDate() + '/' + now.getUTCFullYear())
    //What is the day today as a number?
    console.log(now.getDate())
    //What is the hours now?
    console.log(now.getHours())
    //What is the minutes now?
    console.log(now.getMinutes())
    //Find out the numbers of seconds elapsed from January 1, 1970 to now.
    let count = Math.floor(now.getTime()/1000)
    console.log(count)
