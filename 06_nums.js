const score  = 400
console.log(score);
//Output: 400

// Explicitly defining the datatype 
const balance = new Number(100)
console.log(balance);
//Output:[Number:100]

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.468
// Returns value as fixed or exponentialy if value is before decimal
console.log(otherNumber.toPrecision(4));

const hundreds = 10000000
//Defining number as per Indian Standard
console.log(hundreds.toLocaleString('en-IN'));

console.log(Math);
//Output as Math is a object in JS.

console.log(Math.random());
//Generates a random number like 0.29052006310704703

console.log(Math.floor(Math.random())*10 +1);
//Round of generated number to 0, 1 like




