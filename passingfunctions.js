// passing functions

const string = "Hello World";
console.log(string.toUpperCase); // this doesn't work
console.log(string.toUpperCase()); // this works

// when you include the () at the end of the function, it calls the function
// when you don't include the () at the end of the function,
// it returns a reference to function itself

const sayHello = () => {
  console.log("Hello World");
};
console.log(sayHello); // returns the function
/* output:
() => {
    console.log("Hello World");
}
*/
console.log("Something".toUpperCase); // returns the function

// you can also pass functions to be called later
const registerUser = (user, callback) => {
  if (!user.id) {
    return false;
  }

  console.log("registering user");
  //call the "callback" function passed as an argument
  callback();
};
