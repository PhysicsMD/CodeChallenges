//The following is an array of 10 students ages:

    //const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

    //Sort the array and find the min and max age
    //Find the median age(one middle item or two middle items divided by two)
    //Find the average age(all items divided by number of items)
    //Find the range of the ages(max minus min)
    //Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages[0], 'is the min age.', ages[ages.length-1], 'is the max age.')
//median ages
console.log(ages[(ages.length + ages.length%2)/2])
if(ages.length%2 == 0){
    console.log(ages[(ages.length + ages.length%2)/2+1])
}
//average
let average = 0
for(let i = 0; i < ages.length; i++){
    average += ages[i]
}
average = average/ages.length
console.log(average)
//range
console.log(ages[ages.length-1]-ages[0])
//min range
console.log(Math.abs(ages[0] - average))
//max range
console.log(Math.abs(ages[ages.length-1] - average))

//Slice the first ten countries from the countries array
//console.log(countries.splice(0, 10))

//Find the middle country(ies) in the countries array
console.log(countries[(countries.length + countries.length%2)/2])
if(countries.length%2 == 0){
    console.log(countries[(countries.length + countries.length%2)/2+1])
}

//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let fh = countries.splice(0,(countries.length+countries.length%2)/2)
let lh = countries.splice(0,countries.length)
countries[0] = fh
countries[1] = lh
console.log(countries)

