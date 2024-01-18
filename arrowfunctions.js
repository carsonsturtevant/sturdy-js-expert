// arrow functions

function addOne(number) {
    return number + 1;
}

addOne(2); // 3
addOne(5); // 6
addOne(); // what is returned? answer: NaN 
// it will pass undefined and then proceed to try to add 1

// default parameters
function addTwo(number = 0) {
    return number + 2;
}
addTwo(); // returns 2

// example arrow function
const sum = (a, b) => a + b;
// or
const sum2 = (a, b) => {
    return a + b;
};

// arrow function with only 1 parameter doesn't require parenthesis
const sum3 = a => a + 1;

