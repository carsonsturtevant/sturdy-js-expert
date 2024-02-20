// functional programming

// 1. What is functional programming?
// Functional programming is a programming paradigm that treats computation
// as the evaluation of mathematical functions and avoids changing-state
// and mutable data. It is a declarative type of programming style, which
// means that the code describes what it should accomplish, rather than how
// it should accomplish it.

const users = [
  {
    id: 1,
    name: "Alex",
    age: 30,
    isActive: true,
  },
  {
    id: 2,
    name: "Taylor",
    age: 25,
    isActive: false,
  },
  {
    id: 3,
    name: "Jordan",
    age: 15,
    isActive: true,
  },
  {
    id: 4,
    name: "Sam",
    age: 35,
    isActive: false,
  },
];

const activeUsers = users.filter((user) => user.isActive);
console.log(activeUsers); // [{id: 1, ...}, {id: 3, ...}]

const filterActiveUsers = (user) => user.isActive;
const filterAdultUsers = (user) => user.age >= 18;

const activeAdults = users.filter(filterActiveUsers).filter(filterAdultUsers);
console.log(activeAdults); // [{id: 1, ...}]

// currying
// Currying is the process of taking a function with multiple arguments
// and turning it into a sequence of functions each with only a single
// argument. Currying is named after a mathematician Haskell Curry.
