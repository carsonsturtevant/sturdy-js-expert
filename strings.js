// strings

// " or ' doesnt make a difference
let singleQuotes = 'string with single quotes';
let doubleQuotes = "string with double quotes";
console.log('single: ' + singleQuotes);
console.log("double: " + doubleQuotes);

// string properties/functions
console.log("strings have a length property: " + singleQuotes.length);
console.log("EXAMPLE".toLowerCase());
console.log("ExAmPlE".toUpperCase());

// string character access - array-like or at() which 
// can be used with negative indices
const lang = "javascript";
console.log("1st index: " + lang[1]);
console.log("At length - 2: " + lang.at(lang.length - 2));
console.log("Can use at() with negative indices (at -2): " + lang.at(-2));

// substring
console.log("substring(0,2): " + singleQuotes.substring(0, 2));
console.log("substring(2): " + singleQuotes.substring(2));

// plus operator
console.log(singleQuotes + " " + doubleQuotes);

// += operator
singleQuotes += " and " + doubleQuotes;
console.log("+= " + singleQuotes);

// template strings - start with ` and allow interpolation and multi-line
const name = "John";
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old`;
console.log(greeting);

//multi-line strings =- also starts with backtick `
const multiLineString = `
This is a multi-line
string
`;
console.log(multiLineString);

// trim
const whitesapce = " some text  ";
whitesapce.trim(); // returns "some text"\

// startsWith and endsWith
const sentence = "Hello there. Welcome!";
sentence.startsWith("Hello"); // returns true
sentence.endsWith("welcome"); // returns false

// includes
const sentence2 = "Hello there. Welcome!";
sentence2.includes("there"); // returns true

// split (opposite of array.join(glue))
const sentence3 = "Hello there. Welcome!";
sentence3.split(" "); // returns ["Hello", "there", "Welcome!"]

// replace
// returns a new string where the first occurrence of the search parameter 
// you provide is replaced by the replace parameter
const sentence4 = "Hello there. Welcome!";
sentence4.replace("Hello", "Goodbye"); // returns "Goodbye there. Welcome!"

// replaceAll
const sentence5 = "Hello there. Welcome!";
sentence5.replaceAll(" ", "_"); // returns "Hello_there_Welcome!"