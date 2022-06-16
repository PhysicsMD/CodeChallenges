//Write a code which can give grades to students according to theirs scores:
    //80-100, A
    //70-89, B
    //60-69, C
    //50-59, D
    //0-49, F
function grade(score){
    if(score >= 90){
        return 'A'
    }
    if(score >= 70){
        return 'B'
    }
    if(score >= 60){
        return 'C'
    }
    if(score >= 50){
        return 'D'
    }
    return 'F'
}
console.log(grade(parseInt(prompt("Enter your score: "))))

//Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    //September, October or November, the season is Autumn.
    //December, January or February, the season is Winter.
    //March, April or May, the season is Spring
    //June, July or August, the season is Summer

function getSeason(month){
    if(['September', 'October', 'November'].includes(month)){
        return 'Autumn'
    }
    if(['December', 'January', 'February'].includes(month)){
        return 'Winter'
    }
    if(['March', 'April', 'May'].includes(month)){
        return 'Spring'
    }
    if(['June', 'July', 'August'].includes(month)){
        return 'Summer'
    }
    return 'Invalid Response'
}
console.log(getSeason(prompt("Enter a month: ")))

//Check if a day is weekend day or a working day. Your script will take day as an input.
    //What is the day  today? Saturday
    //Saturday is a weekend.

    //What is the day today? saturDaY
    //Saturday is a weekend.

    //What is the day today? Friday
    //Friday is a working day.

    //What is the day today? FrIDAy
    //Friday is a working day.

function isWeekend(day){
    let daycap = day.charAt(0).toUpperCase()
    for(let i = 1;i<day.length;i++){
        daycap += day.charAt(i).toLowerCase()
    }
    if(['Monday','Tuesday','Wednesday','Thursday','Friday'].includes(daycap)){
        return daycap + ' is a working day.'
    }
    if(['Saturday','Sunday'].includes(daycap)){
        return daycap + ' is a weekend.'
    }
    return 'Invalid Input'
}
console.log(isWeekend(prompt("Enter a day: ")))
