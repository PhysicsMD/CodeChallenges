const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Elias', 'Asabeneh', 'Mathias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Explain the difference between forEach, map, filter, and reduce.
//forEach will iterate and preform some code for each element in an array
//map will return an array after performing code on the elements
//filter will return an array of elements of the array that passed the boolean statement
//reduce takes a function and returns a single element as a result of the function

// Define a callback function before you use it in forEach, map, filter or reduce.
// a callback function is a method that returns a value or set of values 

// Use forEach to console.log each country in the countries array.
countries.forEach(function(element){console.log(element)})

// Use forEach to console.log each name in the names array.
names.forEach(function(element){console.log(element)})

// Use forEach to console.log each number in the numbers array.
numbers.forEach(function(element){console.log(element)})

// Use map to create a new array by changing each country to uppercase in the countries array.
console.log(countries.map(function(element){return element.toUpperCase()}))

// Use map to create an array of countries length from countries array.
console.log(countries.map(function(element){return element.length}))

// Use map to create a new array by changing each number to square in the numbers array
console.log(numbers.map(function(element){return element ** 2}))

// Use map to change to each name to uppercase in the names array
console.log(names.map(function(element){return element.toUpperCase()}))

// Use map to map the products array to its corresponding prices.
console.log(products.map(function(element){return `${element.product} is $${element.price}`}))

// Use filter to filter out countries containing land.
console.log(countries.filter(element => element.toLowerCase().includes('land')))

// Use filter to filter out countries having six character.
console.log(countries.filter(element => element.length == 6))

// Use filter to filter out countries containing six letters and more in the country array.
console.log(countries.filter(element => element.length >= 6))

// Use filter to filter out country start with 'E';
console.log(countries.filter(element => element.charAt(0) != 'E'))

// Use filter to filter out only prices with values.
console.log(products.filter(element => typeof element.price == 'number'))

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(array){
    return array.filter(element => typeof element == 'string')
}
console.log(getStringLists([2,3,4,5,6,7,7,' ',' ',' ',' ']))

// Use reduce to sum all the numbers in the numbers array.
console.log(numbers.reduce(function(prev,current){return prev+current},0))

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
console.log(countries.reduce(function(prev,current){return prev+', '+current})+' are north European countries')

// Explain the difference between some and every
//some only needs to veryify a few item types and every needs all to be the same type

// Use some to check if some names' length greater than seven in names array
console.log(names.some(element => element.length >= 7))

// Use every to check if all the countries contain the word land
console.log(countries.every(element => element.includes('land')))

// Explain the difference between find and findIndex.
//The both find the first item satisfying the search but find returns the item and find index returns the index of

// Use find to find the first country containing only six letters in the countries array
console.log(countries.find(element => element.length == 6))

// Use findIndex to find the position of the first country containing only six letters in the countries array
console.log(countries.findIndex(element => element.length == 6))

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
console.log(countries.findIndex(element => element == 'Norway'))

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
console.log(countries.findIndex(element => element == 'Russia'))
