// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2024, 0, 24)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

// let myNewCreatedDate = new Date(2024, 0, 24, 5, 3)
// console.log(myNewCreatedDate.toLocaleString());

// let myNewCreatedDate = new Date("2024-01-05") // YY-MM-DD
let myNewCreatedDate = new Date("01-05-2024") // MM-DD-YY
// console.log(myNewCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myNewCreatedDate.getTime());
// console.log(Date.now());
// console.log(Date.now() / 1000); // To Convert into Seconds divide(/) by 1000
// console.log(Math.floor(Date.now() / 1000));


let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1); // Starts with 0
console.log(newDate.getFullYear());
console.log(newDate.getDay());

console.log(`Date is ${newDate.getDate()} - Month is ${newDate.getMonth() + 1} - Year is ${newDate.getFullYear()}`);

newDate.toLocaleString('default', {
    weekday: "long",
    day: "numeric",
})
