// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
for(let i = 0; i<paragraphs.length; i++){
    paragraphs[i].style.color = `rgb(0,${i*50},${i*50+50})`
    paragraphs[i].style.backgroundColor = `rgb(${255-i*50},${255-i*50},${255-i*50})`
}

// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
for(let i = 0; i<paragraphs.length; i++){
    paragraphs[i].style.backgroundColor = 'rgb(255,255,255)'
    if(i%2 != 0){
        paragraphs[i].style.color = 'red'
    }else{
        paragraphs[i].style.color = 'green'
    }
}

// Set text content, id and class to each paragraph
for(let i = 0; i<paragraphs.length; i++){
    paragraphs[i].id = i
    paragraphs[i].className += i
    paragraphs[i].innerText += ' '+(i+1)
}
