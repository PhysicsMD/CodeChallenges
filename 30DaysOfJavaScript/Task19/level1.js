//Create a closure which has one inner function
function unction() {
    let incomes = ''
    function addincome() {
        incomes += '1'
        return incomes
    }

    return addincome
}
const account = unction()

console.log(account())
console.log(account())
