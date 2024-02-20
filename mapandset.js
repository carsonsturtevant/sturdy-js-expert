// map and set
// ES2015 introduced map and set

// Map
// map keys can be any type, opposed to object keys which are always strings

// create map
const orders = new Map();

// set key-value pairs
orders.set("table_14", "processed");
orders.set("terrace_5", "delivered");
orders.set("terrace_10", "paid");

// get value by key
console.log(orders.get("terrace_5")); // "delivered"

// map size property
console.log(orders.size); // 3

// delete
orders.delete("terrace_10");

// iterate with forEach
orders.forEach((value, key) => {
  console.log(value, key);
});

// iterate with for...of
for (const order of orders) {
  console.log(order);
}

// iterate with destructuring
for (const [value, key] of orders) {
  console.log(value, key);
}

// The biggest benefit of using a Map is when you want
// the keys to be another value than a string.
const userRoles = new Map();
userRoles.set(5, "admin");
userRoles.set(1542, "viewer");

// objects as keys
const users = [
  {
    id: 5,
    name: "Sam",
  },
  {
    id: 1542,
    name: "Charlie",
  },
];

const userRoles2 = new Map();
userRoles2.set(users[0], "admin");
userRoles2.set(users[1], "viewer");

// if you were to try to set a Number as a key in an object,
// it would be coerced to a string

// key in a mpa could be an object

// create
const map = new Map();

// set
map.set(5, "value");

// get
map.get(5); // "value"

// size
map.size; // 1

// delete
map.delete(5);

// iterate
map.forEach((value, key) => {
  console.log(value, key);
});

// Set
// Set is a collection of unique values
// maps store key/value and sets store only values

const set = new Set();

set.add(10);
set.add(5);
console.log(set.size); // 2
console.log(set); // Set(2) {10, 5}

// if we try to add 10 again, it will not be added
set.add(10);
console.log(set.size); // 2
console.log(set); // Set(2) {10, 5}

// if you add objects you'll need to be aware of their mutability
const set2 = new Set();
set2.add({ name: "Alex" });
set2.add({ name: "Alex" }); // This is a different object
console.log(set2); // Set(2) {{name: "Alex"}, {name: "Alex"}}

const person = { name: "Alex" };

const set3 = new Set();
set3.add(person);
set3.add(person); // it won't be added again
console.log(set3); // Set(1) {{name: "Alex"}

// create a set from an array
const numbers = [1, 2, 3, 1, 3, 4];
const set4 = new Set(numbers);
console.log(set4); // Set(4) {1, 2, 3, 4}

// iterate
const tags = new Set();
tags.add("JavaScript");
tags.add("Tutorial");

tags.forEach((tag) => {
  console.log(tag); // "JavaScript", then "Tutorial"
});

// has
console.log(tags.has("JavaScript")); // true
