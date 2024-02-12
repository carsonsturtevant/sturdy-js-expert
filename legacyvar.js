// legacy var
var legacyvar = 1;

// let and const are block scoped
// var is function scoped

function sayHello() {
  // nearest function
  // message is accessible here, due to hoisting
  if (true) {
    var message = "Sam";
  }
  // message is also accessible here
}
// basically just never use var, its bad

// Hoisting in JavaScript is when the variables you define
// inside a function are moved to the top of the function.

// this:
function sayHello() {
  console.log(message); // undefined
  var message = "Hello World";
  console.log(message); // "Hello World"
  return message;
}

// gets hoisted to this:
function sayHello() {
  var message;
  console.log(message); // undefined
  message = "Hello World";
  console.log(message); // "Hello World"
  return message;
}

// let and const are also hoiested, but they are not initialized
// so you cannot access them before they are declared

// temporal dead zone refers to the time between the hoisting
// and the initialization

// functions defined with "function" are hoisted
// functions defined with "let" and "const" are not hoisted,
// even if they are defined using the function keyword
