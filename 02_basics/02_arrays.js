const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

// marvelHeros.push(dcHeros) // array will be pushed in array as a element

// console.log(marvelHeros);
// console.log(marvelHeros[3]); // to access array pushed in array need to give index
// console.log(marvelHeros[3][1]);

// concat add / combine / merge -- two / more array. Returns a new array without modifying existing arrays
// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

// Spread Operator '...'
// Array is Spreaded using Spread Operator
const allNewHeros = [...marvelHeros, ...dcHeros]

// console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// flat -- Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// flat -- You want (single) one array, You have array inside array & array inside array -- Returns all in One Single array
// flat() -- here we have to give depth in flat
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

// Asking is it array or not -- Returns a boolean value
console.log(Array.isArray("Harsh"))

// Converts it into a Array
console.log(Array.from("Harsh"))

// Interesting case
// Will not convert directly -- Give an Empty Array
// We will have to specifie / tell / give -- By which have to make a like:- key, value
console.log(Array.from({name: "Harsh"}))

let score1 = 100
let score2 = 200
let score3 = 300

// Returns a new array from a set of elements
console.log(Array.of(score1, score2, score3));

