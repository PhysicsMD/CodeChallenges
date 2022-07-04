const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

//Read the countries API using fetch and print the name of country, capital, languages, population and area.
fetch(countriesAPI)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    for(country of data){console.log(`country:${country['name']}, capital:${country['capital']}, languages:${country['languages'].reduce((running_string, current) => running_string+' '+current['name'],'')}, population:${country['population']} and area:${country['area']}`)}
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens
  