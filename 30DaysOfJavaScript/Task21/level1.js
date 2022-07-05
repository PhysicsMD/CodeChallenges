// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
console.log(document.querySelector('p'))

// Get each of the paragraphs using document.querySelector('#id') and by their id
console.log(document.querySelector('#zero2'))

// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
console.log(document.querySelectorAll('p'))

// Loop through the nodeList and get the text content of each paragraph
let paragraphs = document.querySelectorAll('p')
for(p of paragraphs){
    console.log(p.innerText)
}

// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
paragraphs[3].innerText = 'Fourth Paragraph'

// Set id and class attribute for all the paragraphs using different attribute setting methods
for(let i = 0; i<paragraphs.length; i++){
    paragraphs[i].id = i
    paragraphs[i].className += i
}
