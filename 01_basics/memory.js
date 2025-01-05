// Stack, Heap
// Stack (Primitive) -- When Stack memory is used you get a Copy of Variable
// Heap (Non-Primitive) -- When Heap memory is used you get a reference of the original value of Variable


// Primitive -- Goes to Stack
let myUserName = "harshkumarjangir"

let anotherName = myUserName
anotherName = "jhkharsh"

console.log(myUserName);
console.log(anotherName);


// Non-Primitive -- Goes to Heap
let userOne = {
    email: "user@gmail.com",
    upi: "user@sbi"
}

let userTwo = userOne

userTwo.email = "hello@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
