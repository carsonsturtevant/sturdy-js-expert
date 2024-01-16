// functions
function sum(x, y) {
    return x + y;
}
console.log(sum(5,4));

// strings
let singleQuotes = 'string with single quotes';
let doubleQuotes = "string with double quotes";
console.log('single: ' + singleQuotes);
console.log("double: " + doubleQuotes);

// string properties
console.log("strings have a length property: " + singleQuotes.length);
console.log("EXAMPLE".toLowerCase());
console.log("ExAmPlE".toUpperCase());

// character access
const lang = "javascript";
console.log("1st index: " + lang[1]);
console.log("At length - 2: " + lang.at(lang.length - 2));
console.log("Can use at() with negative indices (at -2): " + lang.at(-2));

// jsdoc

/**
 * @param {string} name
 */
function something(name) {
    return name;
}

