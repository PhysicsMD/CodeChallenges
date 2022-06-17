//Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
console.log(countries)

//First remove all the punctuations and change the string to array and count the number of words in the array

    //let text =
    //'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    //console.log(words)
    //console.log(words.length)
    //["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

    //13
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text_working = text.split(',')
text = text_working.join('')
text_working = text.split('.')
text = text_working.join('')
text_working = text.split(' ')
console.log(text_working)
console.log(text_working.length)

//In the following shopping cart add, remove, edit items
    //const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

    //add 'Meat' in the beginning of your shopping cart if it has not been already added
    //add Sugar at the end of you shopping cart if it has not been already added
    //remove 'Honey' if you are allergic to honey
    //modify Tea to 'Green Tea'
let cart = ['Milk', 'Coffee', 'Tea', 'Honey']
function cartAddFront(item){
    if(!cart.includes(item)){
        cart.reverse()
        cart.push(item)
        cart.reverse()
    }
    console.log(cart)
}
function cartAddEnd(item){
    if(!cart.includes(item)){
        cart.push(item)
    }
    console.log(cart)
}
function cartRemove(item){
    let replacementcart = []
    for(let i = 0; i < cart.length; i++){
        if(cart[i] != item){
            replacementcart.push(cart[i])
        }
    }
    cart = replacementcart
    console.log(cart)
}
function cartReplace(item, newItem){
    let replacementcart = []
    for(let i = 0; i < cart.length; i++){
        if(cart[i] != item){
            replacementcart.push(cart[i])
        }
        else{
            replacementcart.push(newItem)
        }
    }
    cart = replacementcart
    console.log(cart)
}
cartAddFront("Meat")
cartAddEnd("Sugar")
cartRemove("Honey")
cartReplace("Tea", "Green Tea")

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
function addCountry(newCountry){
    if(!countries.includes(newCountry)){
        countries.push(newCountry)
        console.log(countries)
    }
    else{
        console.log(newCountry.toUpperCase())
    }
}
addCountry('Ethiopia')

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
function addTech(newTech){
    if(!webTechs.includes(newTech)){
        webTechs.push(newTech)
        console.log(webTechs)
    }
    else{
        console.log(`${newTech} is a CSS preprocess`)
    }
}
addTech('Sass')

//Concatenate the following two variables and store it in a fullStack variable.

    //const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    //const backEnd = ['Node','Express', 'MongoDB']

    //console.log(fullStack)
    //["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
