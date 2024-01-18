// conditions

if (condition) {
    // do something
} else if (!condition) {
    // do something else
} else {
    // do something else
}

// side note always use === and not ==
// triple = only returns true if they are the same datatype and value
if (condition === true) {

}

// double equal would do this
2 == "2" // would return true
2 === "2" // would return false

// returning booleans

// this is unnessary since grade >= 10 returns a boolean
function isPassing(grade) {
    if (grade >= 10) {
        return true;
    } else {
        return false;
    }
}
// we can simply do
function isPassing(grade) {
    return grade >= 10;
}


// checking even or odd, use modulo
function isEven(num) {
    return num % 2 === 0;
}
function isOdd(num) {
    return num % 2 !== 0;
}