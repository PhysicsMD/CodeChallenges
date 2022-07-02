//Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
class Calculator{

    constructor(data){
        this.dataSet = data
    }

    count(){
        return this.dataSet.length
    }

    sum(){
        return this.dataSet.reduce((total, cur) => total+cur, 0)
    }

    min(){
        this.dataSet.sort()
        return this.dataSet[0]
    }

    max(){
        this.dataSet.sort()
        return this.dataSet[this.dataSet.length-1]
    }

    range(){
        return this.max()-this.min()
    }

    mean(){
        return Math.round(this.sum()/this.dataSet.length)
    }

    median(){
        this.dataSet.sort()
        return this.dataSet.slice(Math.ceil(this.dataSet.length/2)-1,Math.ceil(this.dataSet.length/2)+((this.dataSet.length+1)%2))
    }

    mode(){
        let holder={mode:0,count:0}
        for(let i = 0; i < this.dataSet.length; i++){
            if(holder.mode != this.dataSet[i]){
                let instances = this.dataSet.lastIndexOf(this.dataSet[i])-this.dataSet.indexOf(this.dataSet[i])+1
                if(instances > holder.count){
                    holder.mode = this.dataSet[i]
                    holder.count = instances
                }
            }
        }
        return holder
    }

    var(){
        let runningSum = 0
        for(let i = 0; i < this.dataSet.length; i++){
            runningSum += ((this.dataSet[i]-this.mean())**2)
        }
        return runningSum/this.dataSet.length
    }

    std(){
        let runningSum = 0
        for(let i = 0; i < this.dataSet.length; i++){
            runningSum += ((this.dataSet[i]-this.mean())**2)
        }
        return Math.round(Math.sqrt(runningSum/(this.dataSet.length-1))*10)/10
    }

    freqDist(){
        let holder=[]
        let offset = 0
        for(let i = 0; i+offset < this.dataSet.length; i+=1){
                let instances = this.dataSet.lastIndexOf(this.dataSet[i+offset])-this.dataSet.indexOf(this.dataSet[i+offset])+1
                holder[i] = [instances*100/this.dataSet.length ,this.dataSet[i+offset]]
                offset += instances-1
        }
        return holder
    }

    describe(){
    return `    Count: ${this.count()}
    Sum: ${this.sum()}
    Min: ${this.min()}
    Max: ${this.max()}
    Range: ${this.range()}
    Mean: ${this.mean()}
    Median: ${this.median()}
    Mode: (${this.mode().mode},${this.mode().count})
    Variance: ${this.var()}
    Standard Deviation: ${this.std()}
    Frequency Distribution: [${this.freqDist().reduce((runningString, curElem) => runningString+'('+curElem[0]+','+curElem[1]+')', '')}]`
    }
}
statistics = new Calculator(ages)
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
// you output should look like this
console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]


//Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class PersonAccount{
    constructor(firstname, lastname, incomes, expenses, properties = []){
        this.firstname = firstname
        this.lastname = lastname
        this.incomes = incomes
        this.expenses = expenses
        this.properties = properties
    }
    
    totalIncome(){
        return this.incomes.reduce((total,current) => total+current,0)
    }
    
    totalExpense(){
        return this.expenses.reduce((total,current) => total+current,0)
    }
    
    accountInfo(){
        return `
    First Name: ${this.firstname}
    Last Name: ${this.lastname}
    Income: ${this.totalIncome()}
    Expense: ${this.totalExpense()}
    Properties: ${this.properties.reduce((string,item) => string + item, '')}`
    }
    
    addIncome(incomeAmount){
        this.incomes.push(incomeAmount)
    }
    
    addExpense(expenseAmount){
        this.expenses.push(expenseAmount)
    }
    
    accountBalance(){
        return this.totalIncome()-this.totalExpense()
    }
}

me = new PersonAccount('Alenn', 'Wright', [200,100,1300], [600,130,75])
console.log(me.totalIncome())
console.log(me.totalExpense())
console.log(me.accountInfo())
