const name = "harsh"
const repoCount = 10

//  To Concaninet ( Add ) a String

// console.log(name + repoCount);
// console.log(name + repoCount + " repo");

// Use Backticks ``
// String Interpolation
// Make Placeholder
// Can Inject Variables directly

// This is more readable , realible
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Can do Things on the Go like Some Method of Strings
// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String("harsh")
console.log(gameName);

// To Access Key -- Key Value pair
// console.log(gameName[0]);

// To Access ProtoType
// console.log(gameName.__proto__); // Object

// console.log(gameName.length);

// Original String in Not Modified / Changed Instead a Copy of it Modified because String is Primitive data type and uses Stack memory
// console.log(gameName.toUpperCase());

// Original String
// console.log(gameName);

// To get Character of Index / Position of Character
console.log(gameName.charAt(1));

// To get index of character
console.log(gameName.indexOf('a'));



const str = new String("harsh-jhk")
console.log(str.length);


// substring() -- It takes Starting value and ending value
// Ending vaule is not included -- It will give the Before Vlaue of Ending Value
const newStr = str.substring(0, 4) 
console.log(newStr);

// const anotherString = str.slice(0, 2)
const anotherString = str.slice(-8, 4)
console.log(anotherString);


// To trim a string -- Whitespace & line terminators
const newStringOne = "   harsh   "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());


const urlBase = "https://harshkumarjangir.netlify.app"

// Browser do not understand space
// const url = "https://harsh kumar jangir.netlify.app"
// Url encoding
const urlEncod = "https://harsh%20kumar%20jangir.netlify.app"

// To replace something -- Takes two values
console.log(urlEncod.replace('%20', '-'));
console.log(urlEncod.replaceAll('%20', '-'));

// To ckeck something
console.log(urlBase.includes('harsh'));
console.log(urlBase.includes('jhk'));

// Take a Separator ( Based on what to Split )
console.log(str.split('-'));













