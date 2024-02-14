// regex

// does the string contain "home"?
const message = "Welcome home!";

const result = /home/.test(message);
console.log(result); // true

// can also define using RegExp constructor
const message2 = "Welcome home!";

const result2 = new RegExp("home").test(message);
console.log(result2); // true

// positional matching ^ (starts with)
const regex = /^hi/;
regex.test("hi, how are you?"); // true
regex.test("how high is this building?"); // false

// positional matching $ (ends with)
const regex2 = /good bye$/;
regex2.test("Thank you and good bye"); // true
regex2.test("🎤 good bye my lover"); // false

// regex flags
// i - case insensitive
// g - global match
// m - multiline match - ^ and $ match the start and end of each line instead
// of the whole string
regex2 = /good bye$/i;

// String.prototype.match()
let str = "The rain in SPAIN stays mainly in the plain";
let res = str.match(/ain/g);
