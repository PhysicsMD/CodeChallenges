const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries_list = ['Finland', 'Sweden', 'Norway']

// create an empty set
const empty = new Set()
console.log(empty)

// Create a set containing 0 to 10 using loop
for(i = 0; i <= 10; i++){
    empty.add(i)
}
console.log(empty)

// Remove an element from a set
empty.delete(6)
console.log(empty)

// Clear a set
empty.clear()
console.log(empty)

// Create a set of 5 string elements from array
for(i = 0; i < 5; i++){
    empty.add(countries[i].name)
}
console.log(empty)

// Create a map of countries and number of characters of a country
const countryNameLen = new Map()
for(i = 0; i < countries.length; i++){
    countryNameLen.set(countries[i].name,countries[i].name.length)
}
console.log(countryNameLen)
