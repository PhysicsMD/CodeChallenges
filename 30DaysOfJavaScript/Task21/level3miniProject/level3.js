//Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

document.querySelector('.wrapper').style.textAlign = "center"
document.querySelector('div > h2').style.textDecoration = 'underline'

// The year color is changing every 1 second
let yearText = document.querySelector('div > h1').innerText.split(' ')[4]
let header = document.querySelector('div > h1').innerText.replace(yearText,' ')
document.querySelector('div > h1').innerText = document.querySelector('div > h1').innerText.replace(yearText,' ')
document.querySelector('div > h1').innerHTML += (`<div style="display:inline" >${yearText}</div>`)

// The date and time background color is changing every on seconds
wrapper = document.querySelector('div')
wrapper.innerHTML = wrapper.innerHTML.slice(0,174) + `<div id='datedisp'></div>` + wrapper.innerHTML.slice(174)
window.setInterval(dateColor, 1000)
let year_pointer = document.querySelector('div > h1 > div')
year_pointer.style.fontSize = '75px'

window.setInterval(yearColor, 1000)
function yearColor(){
    year_pointer.style.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
}

document.querySelector('#datedisp').style.padding = '10px'
document.querySelector('#datedisp').style.width = '200px'
document.querySelector('#datedisp').style.marginLeft = 'auto'
document.querySelector('#datedisp').style.marginRight = 'auto'
months = ['Janurary','Feburary','March','April','May','June','July','August','September','October','November','December']
function dateColor(){
    today = new Date()
    document.querySelector('#datedisp').innerText = `${months[today.getUTCMonth()]} ${today.getUTCDate()}, ${today.getUTCFullYear()} ${today.getUTCHours()}:${today.getUTCMinutes()}:${today.getUTCSeconds()}`
    document.querySelector('#datedisp').style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
}

// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red
document.querySelector('div > ul').style.listStyleType = "none"
let listElements = document.querySelectorAll('div > ul > li')
for(item of listElements){
    item.style.width = '600px'
    item.style.marginTop = '2px'
    item.style.marginLeft = 'auto'
    item.style.marginRight = 'auto'
    item.style.padding = '18px'
    item.style.textAlign = "left"
    if(item.innerText.split(' ')[2] == 'Done'){
        item.style.backgroundColor = '#00cc66'
    }
    if(item.innerText.split(' ')[2] == 'Ongoing'){
        item.style.backgroundColor = 'rgb(255, 220, 60)'
    }
    if(item.innerText.split(' ')[2] == 'Coming'){
        item.style.backgroundColor = 'rgb(255, 100, 100)'
    }
}
