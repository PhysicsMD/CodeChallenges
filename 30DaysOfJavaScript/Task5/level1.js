//Declare an empty array;
const emptyArr = Array()
console.log(emptyArr)

//Declare an array with more than 5 number of elements
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)

//Find the length of your array
console.log(itCompanies.length)

//Get the first item, the middle item and the last item of the array
console.log(itCompanies[0])
console.log(itCompanies[(itCompanies.length-1)/2])
console.log(itCompanies[itCompanies.length-1])

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['The', 1, true, 'purpose', null, undefined]
console.log(mixedDataTypes)

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
//defined before

//Print the array using console.log()
//printed before

//Print the number of companies in the array
//done beofre

//Print the first company, middle and last company
//done before

//Print out each company
for(let i = 0; i<itCompanies.length; i++){
    console.log(itCompanies[i])
}

//Change each company name to uppercase one by one and print them out
for(let i = 0; i<itCompanies.length; i++){
    console.log(itCompanies[i].toUpperCase())
}

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let outStr = ''
for(let i = 0; i<itCompanies.length-2; i++){
    outStr += itCompanies[i] + ', '
}
outStr += itCompanies[itCompanies.length-2]+ ' and '+ itCompanies[itCompanies.length-1]
console.log(outStr)

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
function isCompany(company){
    if(itCompanies.includes(company)){
        return `${company} exists`
    }
    return `${company} is not found`
}
console.log(isCompany(prompt("Enter a company: ")))

//Filter out companies which have more than one 'o' without the filter method
for(let i = 0; i<itCompanies.length; i++){
    if(itCompanies[i].match(/o/g) == null || itCompanies[i].match(/o/g).length < 2){
        console.log(itCompanies[i])
    }
}

//Sort the array using sort() method
console.log(itCompanies.sort())

//Reverse the array using reverse() method
console.log(itCompanies.reverse())

//Slice out the first 3 companies from the array
console.log(itCompanies.slice(3))

//Slice out the last 3 companies from the array
console.log(itCompanies.slice(0,itCompanies.length-3))

//Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(0,(itCompanies.length-itCompanies.length%2)/2).concat(itCompanies.slice((itCompanies.length/2 + itCompanies.length%2))))

//Remove the first IT company from the array
console.log(itCompanies.slice(1))

//Remove the middle IT company or companies from the array
//done before

//Remove the last IT company from the array
console.log(itCompanies.slice(0,itCompanies.length-1))

//Remove all IT companies
console.log(itCompanies.slice(0,0))
