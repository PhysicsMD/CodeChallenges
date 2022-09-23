document.querySelector('body').style.textAlign = 'center'

main = document.querySelector('div')
title = document.createElement('h1');
titleText = document.createTextNode(`Number Generator`);
title.appendChild(titleText);
title.style.textAlign = 'center'
main.appendChild(title);

subtitle = document.createElement('h2');
subtitleText = document.createTextNode(`30 Days Of JavaScript: DOM day 3`);
subtitle.appendChild(subtitleText);
subtitle.style.textDecoration = 'underline';
subtitle.style.textAlign = 'center'
main.appendChild(subtitle);


subtitle = document.createElement('h3');
subtitleText = document.createTextNode(`Author: Alenn Wright`);
subtitle.appendChild(subtitleText);
subtitle.style.textAlign = 'center'
main.appendChild(subtitle);

inputfield = document.createElement('div');
inputfieldInput = document.createElement('input');
inputfieldInput.setAttribute('type','text')
inputfieldInput.setAttribute('placeholder','Generate more numbers')
inputfield.appendChild(inputfieldInput)
inputButtonInput = document.createElement('button');
inputButtonInput.innerText = 'Generate Numbers'
inputButtonInput.addEventListener('click', e => {
    numberArena(document.querySelector('input').value)
  })
inputfield.appendChild(inputButtonInput)
main.appendChild(inputfield)
//
numberArea = document.querySelector('div')
numberArea.setAttribute('id','numfield')
function numberArena(numMax){
    //tbd
    // try{
    //     item = document.querySelector('#numfield')
    //     item.parentElement.removeChild(item)
    // }catch(e){

    // }
    // if(document.querySelector('#numfield') != null){
    //     document.querySelector('#numfield').remove()
    // }
numberArea.style.width = '810px'
numberArea.style.display = 'inline-block'

let numberContainer
for(let i = 0; i<=numMax; i++){
    numberContainer = document.createElement('div')
    numberContainer.style.display = 'inline-block'
    numberContainer.style.fontSize = '50px'
    numberContainer.style.color = 'white'
    numberContainer.style.width = '120px'
    numberContainer.style.alignItems = 'center'
    numberContainer.style.justifyContent = 'center'
    numberContainer.style.margin = '2px'
    numberContainer.style.padding = '5px'
    if(isPrime(i)){
        numberContainer.style.backgroundColor = 'rgb(255, 100, 100)'
    }else if(isEven(i)){
        numberContainer.style.backgroundColor = '#00cc66'
    }else{
        numberContainer.style.backgroundColor = 'rgb(255, 220, 60)'
    }
    numberContainer.textContent = i
    numberArea.appendChild(numberContainer)
}

function isEven(num){
    return num%2 == 0
}

function isPrime(num){
    for(let i = 2; i < num; i++){
        if(num%i == 0){
            return false
        }
    }
    if(num <= 1){
        return false
    }
    return true
}
}
main.appendChild(numberArea)
