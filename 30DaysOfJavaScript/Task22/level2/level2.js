document.querySelector('body').style.textAlign = 'center'

countryArea = document.querySelector('div')
countryArea.style.display = 'inline-grid'
countryArea.style.gridTemplateColumns = 'repeat(6, 135px)'

let countryContainer
for(let i = 0; i<countries.length; i++){
    countryContainer = document.createElement('div')
    countryContainer.style.display = 'flex'
    countryContainer.style.fontSize = '20px'
    countryContainer.style.alignItems = 'center'
    countryContainer.style.justifyContent = 'center'
    countryContainer.style.margin = '2px'
    countryContainer.style.width = '125px'
    countryContainer.style.height = '125px'
    countryContainer.style.borderStyle = 'groove'
    countryContainer.textContent = countries[i]
    countryArea.appendChild(countryContainer)
}
