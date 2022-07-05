document.querySelector('body').style.textAlign = 'center'

numberArea = document.querySelector('div')
numberArea.style.display = 'inline-grid'
numberArea.style.gridTemplateColumns = 'repeat(6, 135px)'

let numberContainer
for(let i = 0; i<=100; i++){
    numberContainer = document.createElement('div')
    numberContainer.style.display = 'flex'
    numberContainer.style.fontSize = '50px'
    numberContainer.style.color = 'white'
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
