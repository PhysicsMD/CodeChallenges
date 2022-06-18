// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
    firstName:'Alenn', 
    lastName:'Wright', 
    incomes:{'SourceName':1000,'SourceName2':1000}, 
    expenses:{'ExpenseName':500,'ExpenseName2':10},
    totalIncome:
        function(){
            let sum = 0
            for(i=0; i<Object.values(this.incomes).length ;i++){
                sum+= Object.values(this.incomes)[i]
            } 
            return sum
        }, 
    totalExpense:
        function(){
            let sum = 0
            for(i=0; i<Object.values(this.expenses).length ;i++){
                sum+= Object.values(this.expenses)[i]
            } 
            return sum
        }, 
    accountInfo:
        function(){
            return `(${this.firstName} ${this.lastName})'s account balance is ${this.accountBalance()}`
        },
    addIncome:
        function(name, amount){
            Object.assign(this.incomes,{[name]:amount})
        }, 
    addExpense:
        function(name, amount){
            Object.assign(this.expenses,{[name]:amount})
        }, 
    accountBalance:
        function(){
            return this.totalIncome() - this.totalExpense()
        }
}
personAccount.addIncome('SourceName3',2000)
console.log(personAccount.incomes)
console.log(personAccount.totalIncome())
console.log(personAccount.accountInfo())

// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
    const users2 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
// Imagine you are getting the above users collection from a MongoDB database. 
//a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(username){
    for(i = 0; i<users2.length; i++){
        if(users2[i].username == username){
            return 'Username is Already registered to an Account'
        }
    }
    users2.push({username:`${username}`})
}
console.log(signUp('Thomas'))
console.log(signUp('Alenn'))
console.log(users2)

// b. Create a function called signIn which allows user to sign in to the application
function signIn(username){
    for(i = 0; i<users2.length; i++){
        if(users2[i].username == username){
            users2[i].isLoggedIn = true
        }
    }
}
console.log(signIn('Thomas'))
console.log(users2)

// The products array has three elements and each of them has six properties. 
//a. Create a function called rateProduct which rates the product 
function rateProduct(userId, idProduct, rating){
    for(i = 0; i<products.length; i++){
        if(products[i]._id == idProduct){
            products[i].ratings.push({userId:userId, rate: rating})
        }
    }
}
rateProduct('zwf8md', 'hedfcg', 1)
console.log(products)


//b. Create a function called averageRating which calculate the average rating of a product
function averageRating(idProduct){
    for(i = 0; i<products.length; i++){
        if(products[i]._id == idProduct){
            let sum = 0
            for(review = 0; review < products[i].ratings.length; review++){
                sum += products[i].ratings[review].rate
            }
            sum /= products[i].ratings.length
            return sum
        }
    }
}
console.log(averageRating('eedfcf'))

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(userId, idProduct){
    for(i = 0; i<products.length; i++){
        if(products[i]._id == idProduct){
            if(products[i].likes.includes(userId)){
                console.log(products[i].likes.indexOf(userId))
                products[i].likes.splice(products[i].likes.indexOf(userId),1)
            }
            else{
                products[i].likes.push(userId)
            }
        }
    }
}
likeProduct('fg12cy','hedfcg')
console.log(products)
