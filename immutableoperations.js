// immutable array operations

const grades = [10, 20];

// shallow copy using spread syntax
const gradesCopy = [...grades];

// immutably adding 1 item to the array
const gradesCopy2 = [...grades, 100];

// immutable object operations
const user = {
  name: "John",
  age: 30,
};
const clone = { ...user }; // shallow copy
const clone2 = { ...user, age: user.age + 1 }; // shallow copy with update

// immutably deleting a property
const book = {
  title: "The Great Gatsby",
  author: "<NAME>",
  year: 2000,
};
const { year, ...rest } = book; //removes year property
console.log(rest); // {title: "The Great Gatsby", author: "<NAME>"}
