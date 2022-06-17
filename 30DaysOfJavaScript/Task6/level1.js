//Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let i = 0; i <= 10; i++){
    console.log(i)
}
let counter = 0
do{
    console.log(counter)
    counter++
}while(counter <= 10)

//Iterate 10 to 0 using for loop, do the same using while and do while loop
for(i = 10; i >= 0; i--){
    console.log(i)
}
counter = 10
do{
    console.log(counter)
    counter--
}while(counter >= 0)

//Iterate 0 to n using for loop
let num = 5
for(i = 0; i <= num; i++){
    console.log(i)
}

//Write a loop that makes the following pattern using console.log():

  //  #
  //  ##
  //  ###
  //  ####
  //  #####
  //  ######
  //  #######
for(i = 1; i <= 7; i++){
    console.log('#'.repeat(i))
}

//  Use loop to print the following pattern:

    //0 x 0 = 0
    //1 x 1 = 1
    //2 x 2 = 4
    //3 x 3 = 9
    //4 x 4 = 16
    //5 x 5 = 25
    //6 x 6 = 36
    //7 x 7 = 49
    //8 x 8 = 64
    //9 x 9 = 81
    //10 x 10 = 100
for(i = 0; i <= 10; i++){
    console.log(`${i} x ${i} = ${i*i}`)
}

//Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
console.log('i\ti^2\ti^3')
for(i = 0; i <= 10; i++){
    console.log(`${i}\t${i*i}\t${i*i*i}`)
}

//Use for loop to iterate from 0 to 100 and print only even numbers
for(i = 0; i <= 100; i++){
    if(i%2 == 0)
    console.log(i)
}

//Use for loop to iterate from 0 to 100 and print only odd numbers
for(i = 0; i <= 100; i++){
    if(i%2 != 0)
    console.log(i)
}

//Use for loop to iterate from 0 to 100 and print only prime numbers
let isPrime = true
for(i = 0; i <= 100; i++){
    if(i>3){
        for(let counter = 2; counter<i;counter++){
            if(i%counter == 0){
                isPrime = false
            }
        }
        if(isPrime){
            console.log(i)
        }
        isPrime = true
    }
    else{
        console.log(i)
    }
}

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//  The sum of all numbers from 0 to 100 is 5050.
let sum = 0
for(i = 0; i <= 100; i++){
    sum += i
}
console.log(sum)

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//  The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
sum = 0
for(i = 0; i <= 100; i++){
    if(i%2 == 0){
        sum += i
    }
}
console.log(sum)

sum = 0
for(i = 0; i <= 100; i++){
    if(i%2 != 0){
        sum += i
    }
}
console.log(sum)


//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//  [2550, 2500]
let sumArr = [0, 0]
for(i = 0; i <= 100; i++){
    if(i%2 == 0){
        sumArr[0] += i
    }
    else{
        sumArr[1] += i
    }
}
console.log(sumArr)

//Develop a small script which generate array of 5 random numbers
let randArr = []
for(i = 0; i <= 5; i++){
    randArr[i] = Math.floor(Math.random()*100)
}
console.log(randArr)

//Develop a small script which generate array of 5 random numbers and the numbers must be unique
//done in previous

//Develop a small script which generate a six characters random id:
//  5j2khz
let randStr = ''
for(i = 0; i <= 6; i++){
    randStr += String.fromCharCode(Math.floor(Math.random()*(122-48))+48)
}
console.log(randStr)
