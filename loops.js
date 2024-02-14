// loops and iterations

// recommended to use forEach() primarily

// for
for (let counter = 1; counter <= 10; counter++) {
  console.log(counter);
}

// forEach
const people = ["Sam", "Alex"];
people.forEach((person) => {
  console.log(person);
});

// increment by something other than 1
for (let number = 0; number <= 10; number += 2) {
  console.log(number);
}

// for of
// main difference is it allows the use of break and continue keywords
// break allows you to quit the iteration completely
// continue allows you to skip the current iteration and move to the next
for (const person of people) {
  console.log(person);
  if (5) continue;
}

// for of
// works not only on arrays, but all iteratable objects
// strings, maps, sets, nodelist, etc.
const items = document.querySelectorAll(".items");
for (const item of items) {
  console.log(item.textContent);
}

// for in
// used to iterate over the properties of an object
const person = {
  id: 1,
  name: "Alex",
};

for (const key in person) {
  console.log(key);
  console.log(person[key]);
}
// no forEach for objects
// dont use for in for arrays because it will iterate over the prototype chain
