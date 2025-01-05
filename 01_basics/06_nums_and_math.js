const score = 400;
// console.log(score);


// To define Explicitly data type -- like a Number
// Defining a new Object of type Number -- Specificly
const balance = new Number(100);
// console.log(typeof balance);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 25.2345
const newNumber = 253.2345
const newOtherNumber = 1253.2345

// It gives precise value
// console.log(otherNumber.toPrecision(3));
// console.log(newNumber.toPrecision(3));
// console.log(newOtherNumber.toPrecision(3));
// console.log(newOtherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // By Default US
// console.log(hundreds.toLocaleString('en-IN')); // To Indian



/* *************** Maths *************** */

// console.log(Math);
// console.log(Math.abs(-4)); // Absolute -- Negative Values turns into Positive Values
// console.log(Math.abs(2)); // Absolute -- Negative Values turns into Positive Values

// console.log(Math.round(5.1));
// console.log(Math.round(5.5));

// console.log(Math.ceil(5.5)); // Top value -- Will Choose 6
// console.log(Math.ceil(5.1)); // Top value -- Will Choose 6
// console.log(Math.floor(5.1)); // Lower value -- Will Choose 5
// console.log(Math.floor(5.6)); // Lower value -- Will Choose 5
// console.log(Math.min(1, 2, 3, 4, 5)); // Will give minimum / lowest value
// console.log(Math.max(1, 2, 3, 4, 5)); // Will give maximum / higest value


// random -- This will give a Random Value in betwen 0 to 1
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
