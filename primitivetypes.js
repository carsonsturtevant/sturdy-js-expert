// primitive types

// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol (new in ECMAScript 6)
// 7. BigInt (new in ECMAScript 11)

// primitve types are immutable (cannot be changed)
// when you change a primitive type, you are creating a new value
// this is different from objects, which are mutable

let n = "Sam";
n[0] = "X";
console.log(n); // "Sam";
// the variable n is mutable, but the string "Sam" is not

//typeof operator
// returns the type of a variable or value
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"

// NaN
typeof NaN === "number"; // true
// use isNaN() to check if a value is NaN
Number.isNaN(NaN); // true
Number.isNaN(42); // false

// decimal fraction imprercision
0.1 + 0.2 === 0.3; // false
// computers cannot represent decimal fractions precisely
// best solution is to try to avoid decimals altogether

// BigInt
const value = 9915417195128753n;
// append n to the end of a number to make it a BigInt
// Number goes up to 2^53 - 1 (+/- 9007199254740991)

// symbol
// a unique and immutable value
// used as object property keys
// symbols are created using the Symbol() function
const uniqueKey = Symbol();

const data = {};
data[uniqueKey] = "Some value";

console.log(data[uniqueKey]); // "Some value"

// Arrays with properties
// arrays are objects, so you can add properties to them
const arr = [1, 2, 3];
arr.name = "My array";
