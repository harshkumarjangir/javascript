// To ways to declare Object -- literals / constructer
// Singleton- concept
// object created by singleton is -- singleton object
// declare objects by literals is not a -- singleton object
// declare objects by constructer is a -- singleton object

// Object -- Key: "Value" pair

// Constructor Object - Singleton
// Object.create

// Object Literals -- A way to declare Object

const mySym = Symbol("key1")
// Now declare this symbol in object or use as a key
// Interview Task
// Now take a symbol - add it in object keys and print it

const JsUser = {
    // Behind the Scene this Key is treated as String.
    name: "Asus",
    "full name": "Asus Vivobook",
    // This will not be used as Symbol -- If you check it's DataType
    // mySym: "myKey1",
    //Now this will be used as Symbol
    [mySym]: "myKey1",
    age: 22,
    location: "Jaipur",
    email: "asus@gmail.com",
    isLoggedIn: false,
    lastLoginDyas: ["Monday", "Tuesday"]
}

console.log(JsUser);
// console.log(JsUser.email); // ( . ) Dot Notation to Access

// Behind the Scene this Key -- 'email' is treated as String. -- Error Occurs email is not defined
// console.log(JsUser[email]);

// Need to Specifie it as String
// This is Square Notation
// console.log(JsUser["email"]);

// console.log(JsUser.full name); // Cannot Access this way -- Square Notation Required
// console.log(JsUser["full name"]); // Can Access this way

// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym); // String -- Not Used as Symbol

// console.log(JsUser[mySym]); // Symbol -- Used as Symbol


// To Change Values

JsUser.email = "asus@jaipur.com"
// console.log(JsUser.email);


// Now you cannot make Changes
// Object.freeze(JsUser)
JsUser.email = "asus.support@jaipur.com"
// console.log(JsUser);
// console.log(JsUser.email);

JsUser.greeting = function () {
    console.log("Hello JsUser");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JsUser, ${this.name}`); // to refer / refrence same object use ( this ) keyword
}

// console.log(JsUser.greeting); // function will not be executed -- reference will come
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
