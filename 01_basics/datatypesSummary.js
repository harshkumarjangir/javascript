// Primitive

// 7 types
// String
// Number
// Boolean
// null -- Empty Value
// undefined -- Declared not Defined
// Symbol -- Unique
// BigInt -- Scientific value or big values

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;
// let userEmail= undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNum = 12345678900987654321n // BigInt

// Reference ( Non Primitive )
// Allocate reference directly in Memory

// Array
// Object
// Function

const myArr = ["asus", "hp", "dell", "lenevo"]

let myObj = {
    name: "harsh",
    age: 22
}

const myFun = function(){
    console.log("Hi this is function");
}

console.log(typeof scoreValue);
console.log(typeof bigNum);
console.log(typeof outsideTemp);
console.log(typeof myFun);
