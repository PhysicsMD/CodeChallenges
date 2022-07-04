//Create a closure which has three inner functions
function math() {
    let count = 0;
    return { 
        addOne: function() {
            count += 1
            return count
        },
        square: function(v) {
            count = count*count
            return count
        }
    }
    
}
const innerFuncs = math()

console.log(innerFuncs.addOne())
console.log(innerFuncs.addOne())
console.log(innerFuncs.square())
console.log(innerFuncs.addOne())
