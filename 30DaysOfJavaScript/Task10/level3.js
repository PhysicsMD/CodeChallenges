// How many languages are there in the countries object file.
const lang = new Set()
countries.forEach(country => country.languages.forEach(item => lang.add(item)))
console.log(lang)

// Use the countries data to find the 10 most spoken languages:
const langCount = new Map()
function mostSpokenLanguages(data, number){
    const langRef = new Set()
    data.forEach(country => country.languages.forEach(item => langRef.add(item)))
    const mostSpoken = new Map()
    for(const uniqueLang of langRef){
        mostSpoken.set(uniqueLang, data.filter(country => country.languages.includes(uniqueLang)).length)
    }
    returnlist = []
    while(returnlist.length <number){
        holder = ['',0]
        for(const languageitem of langRef){
            if(holder[1] < mostSpoken.get(languageitem)){
                holder[0] = languageitem
                holder[1] = mostSpoken.get(languageitem)
            }
        }
        langRef.delete(holder[0])
        returnlist[returnlist.length] = holder
    }
    return returnlist
}
console.log(mostSpokenLanguages(countries, 10))
