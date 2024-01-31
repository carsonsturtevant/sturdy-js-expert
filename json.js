// json
const person3 = {
  firstName: "Sam",
  lastName: "Green",
  age: 24,
};

// not to be confused with javascript objects
// all json objects are javascript objects, not vice versa
const user = {
  firstName: "Sam",
  lastName: "Green",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

// convert json string to object
const string2 = '{"firstName":"Sam","lastName":"Green","age": 32}';
const person2 = JSON.parse(string); // {firstName: "Sam", lastName: "Green", age: 32}
console.log(person.firstName); // "Sam"

// convert object to json string
const person = {
  firstName: "Sam",
  lastName: "Green",
  age: 32,
};
const string = JSON.stringify(person);
console.log(string); //'{"firstName":"Sam","lastName":"Green","age":32}'
