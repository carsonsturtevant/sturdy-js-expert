// objects

const user = {
    id: 1,
    firstName: "Sam",
    lastName: "Doe",
    age: 20
};

// read properties
console.log(user.id);
console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);

// update properties
user.id = 2;
user.firstName = "John";
user.lastName = "Doe";
user.age = 30;

// name of property we want to read is stored in a variable
const user = {
    id: 1,
    name: "Sam Green",
    age: 20
};
const key = "id";
user[key]; // 1
// another example
const getValue = (user, keyToRead) => {
    return user[keyToRead];
}
getValue({ id: 2, name: "Sam" }, "name"); // "Sam"
getValue({ id: 2, name: "Sam" }, "id"); // 2

// object.keys()
const user = {
    id: 1,
    name: "Sam Green",
    age: 20
};
const keys = Object.keys(user);
console.log(keys); // ["id", "name", "age"]

// accessing a property that does not exist in the object
user.firstName; // undefined

// If you see [object Object], it means you tried to use an object
// in a context that expects a string. For example:
const person = {
    id: 1,
    firstName: "Sam"
};
console.log(`Hello ${person}`); // "Hello [object Object]"

// Object.values()
const user = {
    id: 1,
    firstName: "Sam",
    lastName: "Doe",
    age: 20
};
user.values(); // [1, "Sam", "Doe", 20]

// Object.entries()
user.entries();
// [["id", 1], ["firstName", "Sam"], ["lastName", "Doe"], ["age", 20]]

// object shorthand
const age = 18;
const person2 = {
    name: "John",
    age // dont need to type age: age
}

// object shorthand is fantastic for logging objects
// wrap each logged object in an object literal { }
const sum = (a, b) => {
    console.log({ a }); // {a: 1}
    console.log({ b }); // {b: 3}
    let total = a + b;
    console.log({ total }); // {total: 4}
    return total;
}
sum(1, 3);

// object destructuring and concatenation
const config = {
    id: 1,
    isAdmin: false,
    theme: {
        dark: false,
        accessibility: true
    }
};
const { id, isAdmin, theme } = config;

// can also destructure with a default value
const { isAuthor = true } = config;
// defaults to true since it doesnt exist on the object

// destructure and rename properties
const { name: userName } = config;

// concatenate objects
const firstPerson = {
    name: "Sam",
    age: 18
}
const secondPerson = {
    age: 25,
    type: "admin"
}
const mergedObjects = { ...firstPerson, ...secondPerson };
console.log(mergedObjects); // {name: "Sam", age: 25, type: "admin"}
// only age from the 2nd object persisted due to the ordering of spreads

// in
const person3 = {
    name: "Alex",
    age: 35
};
if ("name" in person3) {
    console.log(person3.name); // "Alex"
}
// in is commonly used to check window properties
if ("ontouchstart" in window) {
    // using a touchscreen
} else {
    // not using a touchscreen
}