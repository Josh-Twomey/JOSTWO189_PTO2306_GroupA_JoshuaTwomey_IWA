const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want
// Added parseInt() to convert string to number. Added [] around 913
const taxAsDecimal = parseInt(tax[913]) / 100
// Added brackets after the * to get the correct decimal
const startingAfterTax = salary * (1 - taxAsDecimal)
// Swopped size and lodging and added '-' to build the correct string
const type = size+'-'+lodging
// Added startingAfterTax, called the correct variables from the object
const balance = startingAfterTax - (expenses.transport + expenses.food + rent[type]) 
// Added .toFixed
console.log(balance.toFixed(2))