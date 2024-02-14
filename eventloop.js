// event loop

// javascript is single threaded

console.log("A");
setTimeout(function () {
  console.log("B");
}, 0);
console.log("C");
// output of this code is: A C B

// callback queue
// functions that are executed immediately are added to the call stack
// functions that are executed after a certain time are
// added to the callback queue

// so from the example above we can see how the setTimeout callback goes
// into the callback queue and is executed after the call stack is empty

// The event loop is a task that keeps checking if there are any items
// in the callback queue and forwards them to the call stack but only
// when the call stack is empty.
