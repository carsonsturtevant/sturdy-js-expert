// window object

// represents the current page and incldues the DOM and
// global variables and functions

// another example of global object is Number
// calling Number.parseInt() is the same as calling window.Number.parseInt()

// legacy IIFE (immediately invoked function expression)
(function () {
  // code here
})();
// you can see the function wrapped with () and then called with ()
// used to fix an issue with the var keyword, now we avoid it altogether with
// let and const
