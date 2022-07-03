//Check the speed difference among the following loops: while, for, for of, forEach
console.time('While loop')
counter = 0
while(counter<countries_data.length){
    counter +=1
}
console.timeEnd('While loop')

console.time('Regular for loop')
for(counter = 0; counter<countries_data.length; counter++){
}
console.timeEnd('Regular for loop')

console.time('For of loop')
counter = 0
for (item of countries_data) {
    counter += 1
  }
console.timeEnd('For of loop')

console.time('forEach loop')
counter = 0
countries_data.forEach((item) => {
    counter += 1
  })
console.timeEnd('forEach loop')
