1 === 1; // true
true === true; // true
false === false; // true

[] === []; // false
// the reason for this is that it is checking if they are the same instance
// and not of the same value

const firstArray = [];
const secondArray = firstArray; // secondArray now points to firstArray
console.log(firstArray); // []
console.log(secondArray); // []

firstArray.push(10);
console.log(firstArray); // [10]
console.log(secondArray); // [10]

// secondArray = firstArray did not make a copy, it is only a new reference
// to the same chunks of memory

const grades = [
  {
    id: 1,
    grade: 12,
    isPassing: false, // we need to update this to true
  },
  {
    id: 2,
    grade: 14,
    isPassing: true,
  },
];

// find the entry with id = 1
const entry = grades.find((grade) => grade.id === 1);
// set it to passing
entry.isPassing = true;
console.log(grades); // isPassing will now be true for the first entry

// entry is not a copy of the element it is a reference
