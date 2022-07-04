//Print out all the cat names in to catNames variable.
let catNames = []
fetch(catsAPI)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    for(nameof of data){catNames.push(nameof['name'])}
  })
  .catch(error => console.error(error)) // handling error if something wrong happens
console.log(catNames)
