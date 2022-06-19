//Use the countries information, in the data folder. Sort countries by name, by capital, by population
console.log(countries_data.sort((elem1,elem2) => (elem1.name).localeCompare(elem2.name)))
console.log(countries_data.sort((elem1,elem2) => (elem1.capital).localeCompare(elem2.capital)))
console.log(countries_data.sort((elem1,elem2) => elem2.population-elem1.population))

//Find the 10 most spoken languages:
function mostSpokenLanguages(data, number){
    lang = []
    data.forEach(
        function(element){ 
            element.languages.forEach(
                function(item){
                    addLanguage(item)
                }
            )
        }
    )
    lang.sort((elem1,elem2) => elem2.count-elem1.count)
    return lang.splice(0,number)
}
function addLanguage(item){
    index = lang.findIndex(element => element.language == item)
    if(index == -1){
        lang.push({language:item,count:1})
    }else{
        lang[index].count = lang[index].count+1
    }
}
console.log(mostSpokenLanguages(countries_data, 10))

//Use countries_data.js file create a function which create the ten most populated countries
function mostPopulatedCountries(data, number){
    pop = []
    data.sort((elem1,elem2) => elem2.population-elem1.population)
    for(i=0; i<number; i++){
        pop.push({country:data[i].name,population:data[i].population})
    }
    return pop
}
console.log(mostPopulatedCountries(countries_data, 10))

//Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). 
//In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. 
//You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics = {
    count:function(){return ages.length},
    sum:function(){return ages.reduce(function(prev,current){return prev+current},0)},
    min:function(){ages.sort();return ages[0]},
    max:function(){ages.sort();return ages[ages.length-1]},
    range:function(){return this.max()-this.min()},
    mean:function(){return Math.round(this.sum()/ages.length)},
    median:function(){ages.sort();return ages.slice(Math.ceil(ages.length/2)-1,Math.ceil(ages.length/2)+((ages.length+1)%2))},
    mode:function(){
        holder={mode:0,count:0}
        for(i = 0; i < ages.length; i++){
            if(holder.mode != ages[i]){
                instances = ages.lastIndexOf(ages[i])-ages.indexOf(ages[i])+1
                if(instances > holder.count){
                    holder.mode = ages[i]
                    holder.count = instances
                }
            }
        }
        return holder
    },
    var:function(){
        runningSum = 0
        for(i = 0; i < ages.length; i++){
            runningSum += ((ages[i]-this.mean())**2)
        }
        return runningSum/ages.length
    },
    std:function(){
        runningSum = 0
        for(i = 0; i < ages.length; i++){
            runningSum += ((ages[i]-this.mean())**2)
        }
        return Math.round(Math.sqrt(runningSum/(ages.length-1))*10)/10
    },
    freqDist:function(){
        holder=[]
        offset = 0
        for(i = 0; i+offset < ages.length; i+=1){
                instances = ages.lastIndexOf(ages[i+offset])-ages.indexOf(ages[i+offset])+1
                holder[i] = [instances*100/ages.length ,ages[i+offset]]
                offset += instances-1
        }
        return holder
    }
}
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
