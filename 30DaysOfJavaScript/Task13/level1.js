// Display the countries array as a table
countries_array = []
for(item of countries_data){
    countries_array.push([item.name, item.population])
}
console.group('ListOut')
console.table(countries_array)
console.groupEnd()

// Display the countries object as a table
console.group('Countries')
console.table(countries_data)
console.groupEnd()

// Use console.group() to group logs
//this will be applied to previous outputs
