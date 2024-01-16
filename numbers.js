// numbers

//  all of these are numbers in javascript
//  1, 2, -5, 3.5, 2000, 2021, -21.5

// numeric separators
let nb = 1_000; // same as 1000
nb = 1_000_000; // same as 1 million

// convert number to string
let s = nb.toString();

// NaN (not a number)
let bad = "abc" * 4;
// console.log(bad);

// convert string to number - suggested to always supply a radix
let n = Number.parseInt(s, 10);
// if you dont convert it then it will be concatenated to a number
let a = 10;
let b = "20";
// console.log("concat number messup: " + a + b);

// parseInt will parse a number out of a mixmatched string
console.log("parseInt(123abc) = " + Number.parseInt("123abc")); //returns 123
console.log("parseInt(abc123) = " + Number.parseInt("abc123")); //returns NaN

// division remainder (modulo)
let remainder = 7 % 2; // returns 1

// Math object
Math.round(10.5); // rounds to 11
Math.floor(10.5); // rounds to 10
Math.ceil(10.5); // rounds to 11