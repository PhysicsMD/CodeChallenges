// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
console.log(products.filter(item => typeof item.price == 'number').reduce((prev, current) => prev+current.price,0))

// Find the sum of price of products using only reduce reduce(callback))
function convertInt(number){
    if(isNaN(parseInt(number))){
        return 0
    }
    else{
        return parseInt(number)
    }
}
console.log(products.reduce((prev,current) => prev + convertInt(current.price),0))

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(pattern){
    return countries.filter(element => element.toLowerCase().includes(pattern))
}
console.log(categorizeCountries('land'))

// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function starting_letter(){
    holder = []
    caps = countries.map(element => element.charAt(0).toUpperCase())
    offset = 0
    for(i=0; i<caps.length; i++){
        if(holder.filter(element => element.Letter == caps[i]).length == 0){
            holder[i-offset] = {Letter:caps[i],count:countries.filter(element => element.charAt(0).toUpperCase() == caps[i]).length}
        }
        else{
            offset += 1
        }
    }
    return holder
}
console.log(starting_letter())

// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries(){
    return countries_data.slice(0,10)
}
console.log(getFirstTenCountries())

// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries(){
    return countries_data.slice(countries_data.length-10,countries_data.length)
}
console.log(getLastTenCountries())

// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
function starting_word(){
    holder = []
    start = countries_data.map(element => element.name.split(' ')[0])
    console.log(start)
    offset = 0
    for(i=0; i<start.length; i++){
        if(holder.filter(element => element.Word == start[i]).length == 0){
            holder[i-offset] = {Word:start[i],count:start.filter(element => element == start[i]).length}
        }
        else{
            offset += 1
        }
    }
    return holder
}
console.log(starting_word())
