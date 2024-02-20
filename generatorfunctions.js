// generator functions
/**
 * A generator function is a special type of function that can be paused and
 * later resumed during its execution. It produces a sequence of values, one
 * at a time, using the yield keyword.
 */
// notice the * symbol
function* getData() {
  yield 5;
  yield 10;
  yield 12;
}

//Create generator object
const values = getData();

values.next(); // {value: 5, done: false}
values.next(); // {value: 10, done: false}
values.next(); // {value: 12, done: false}
values.next(); // {value: undefined, done: true}

// you have to store the function in a variable and then call the next method
function* getNames() {
  yield "Sam";
  yield "Alex";
}

getNames().next(); // {value: "Sam", done: false}
getNames().next(); // {value: "Sam", done: false} (another generator object from the same function)
getNames().next(); // {value: "Sam", done: false} (yet another generator object from the same function)

// iterate
for (const name of getNames()) {
  console.log(name); // "Sam", then "Alex"
}

function* rollDice(limit) {
  for (let count = 0; count < limit; count++) {
    // https://codetogo.io/how-to-get-random-number-between-two-numbers-in-javascript/
    yield Math.floor(Math.random() * 6) + 1;
  }
}
// ask it for 5 dice rolls
for (const roll of rollDice(5)) {
  console.log(roll);
}

// maybe you only need 2 rolls
const values2 = rollDice(100); // we may generate up to 100 dice rolls (but nothing is generated yet)

// some application logic here
values2.next(); // {value: 4, done: false}
// some other application logic here
values2.next(); // {value: 1, done: false}
/**
 * In the example above, we asked for a potential of 100 dice rolls.
 * However, we only ended up using two. The remaining 98 were not generated.
 * Assuming rollDice was performing some expensive work, this would be a
 * big win for performance.
 */

// can use yield* to delegate to another generator
function* generator1() {
  yield 2;
  yield 3;
}

function* generator2() {
  yield 1;
  yield* generator1();
  yield 4;
}

const values3 = generator2();
for (const value of values3) {
  console.log(value);
}

// useful for traversing a DOM tree
function* traverseDOM(element) {
  yield element;
  for (const child of element.children) {
    yield* traverseDOM(child);
  }
}

const values4 = traverseDOM(document.documentElement);
for (const value of values4) {
  console.log(value);
}
