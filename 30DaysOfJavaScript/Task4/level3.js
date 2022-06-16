//Write a program which tells the number of days in a month.
  //Enter a month: January
  //January has 31 days.

  //Enter a month: JANUARY
  //January has 31 day

  //Enter a month: February
  //February has 28 days.

  //Enter a month: FEbruary
  //February has 28 days.
Object.assign(String.prototype, {
    toCapitalCase(){
        let returnString = ''
        if(this.length != 0){
            returnString = this.charAt(0).toUpperCase()
        }
        while(returnString.length != this.length){
            returnString += this.charAt(returnString.length).toLowerCase()
        }
        return returnString
    }
})
var months = {
    'Janurary': 31,
    'Feburary':28,
    'March':31,
    'April':30,
    'May':31,
    'June':30,
    'July':31,
    'August':31,
    'September':30,
    'October':31,
    'November':30,
    'December':31
};

let whatMonth = prompt("Enter a month: ").toCapitalCase()
console.log(`${whatMonth} has ${months[whatMonth]} days.`)

//Write a program which tells the number of days in a month, now consider leap year.
var monthsLeap = {
    'Janurary': 31,
    'Feburary':29,
    'March':31,
    'April':30,
    'May':31,
    'June':30,
    'July':31,
    'August':31,
    'September':30,
    'October':31,
    'November':30,
    'December':31
};
whatMonth = prompt("Enter a month: ").toCapitalCase()
console.log(`${whatMonth} has ${monthsLeap[whatMonth]} days in a leap year.`)

