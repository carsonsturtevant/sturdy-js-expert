// arrays

// some examples
const users = []; // empty array
const grades = [10, 8, 13, 15]; // array of numbers
const attendees = ["Sam", "Alex"]; // array of strings
const values = [10, false, "John"]; // mixed

// array length property
grades.length; // 3

// array access
grades[2]; // 13
grades.at(-2) // at() allows negative indexes

// add an element
grades.push(100); // adds 100 to the end of the array
// .push() returns the new length of the array

// const array
const arr = [1, 2, 3, 4, 5, 6];
arr.push(7); // can still modify data in the array
// const means you can only assign the variable once
// the data is not immutable, its content can be changed
// benefit of const is that once you initialize it as an array it stays an array

// foreach loop
grades = [10, 8, 13, 15];
// naming: use plural for array and singular for object
grades.forEach((grade) => {
    console.log(grade);
});

// filter array
grades2 = [10, 8, 13, 15];
const gradesAbove10 = grades2.filter((grade) => grade >= 10);
console.log(gradesAbove10);

// find
grades.find((grade) => grade >= 12); // returns 13

// map
grades.map((grade) => grade * 2); // [20, 16, 29, 30]

// includes
grades.includes(13); // true

// toString
grades.toString(); // [10, 8, 13, 15]

// join - like toString but customizable delimiter
const names = ["Sam", "Alex", "John"];
console.log(names.join(", ")); // Sam, Alex, John

// every (all satisfy condition)
const grades3 = [10, 8, 13, 15];
grades3.every(grade => grade >= 10); // false

// some (at least one satisfies condition)
grades3.some(grade => grade >= 12); // true

// clearing out array
grades3.length = 0; // removes all elements
grades3.length; // 0

// splice
grades3.splice(1, 1); // removes the second element
grades3; // [10, 8, 15]

grades3.splice(1); // removes all elements after index 1

grades3.splice(1, 0, 100); // adds 100 at index 1
grades3; // [10, 100, 8, 15]

// reduce
const scores = [1, 2, 3, 4];
const sum = scores.reduce((total, curr) => total + curr); // returns 10
const multiplied =
    scores.reduce((total, curr) => {
        return total * curr
    }, 1); // returns 24
// multiplied has to have initial value of 1, the second parameter for reduce()

// array destructuring - syntatic sugar
const dimensions = [20, 5];
const [width, height] = dimensions;
// react uses this with useState() ex:
// const [counter, setCounter] = useState(0);

// array concatenation
const lat = [5.234];
const lng = [1.412];
const point = [...lat, ...lng]; // ... is spread syntax
console.log(point); // [5.234, 1.412];

