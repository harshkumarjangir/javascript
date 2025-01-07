// Array

// const myArr = [0, 1, 2, 3, 4, 5, "harsh", true]
const myArr = [0, 1, 2, 3, 4, 5]
const myLaptop = ["asus", "hp", "dell", "lenevo"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr);
// console.log(myArr[0]);
// console.log(myArr[4]);


// Array methods

// myArr.push(6) // Add element to array
// myArr.push(7)
// myArr.pop() // Remove the last element / value of array

// myArr.unshift(5) // Insert an elemnet in starting on an array
// myArr.shift() // Removes the starting element of an array

// console.log(myArr.includes(8)); // Ckeck if it exits in array -- Returns a Boolean value
// console.log(myArr.indexOf(7));

// join -- adds all elements of array into a string -- convert it to a string
// const newArr = myArr.join() 

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// slice , splice

console.log("A ", myArr);

// slice -- Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);

// splice -- Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
const myn2 = myArr.splice(1, 3)

console.log(myn2);
console.log("C ", myArr);
