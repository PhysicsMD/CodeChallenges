// Read the cats api and find the average weight of cat in metric unit.
average = 0
fetch(catsAPI)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    for(cat of data){average += parseInt(cat['weight']['imperial'].charAt(0))}
    console.log(average/data.length)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens

// Read the countries api and find out the 10 largest countries
fetch(countriesAPI)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    data.sort(function(a, b) {
        return b.population - a.population
    })
    for(let i=0; i<10; i++){
        console.log(data[i])
    }
  })
  .catch(error => console.error(error)) // handling error if something wrong happens

// Read the countries api and count total number of languages in the world used as officials.
languages = new Set()
fetch(countriesAPI)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    data.forEach(element => {
        for(item of element['languages']){languages.add(item['name'])}
    })
    console.log(languages.size)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens
