class User {
  constructor(age) {
    this.age = age; // calls set age(value)
  }

  get age() {
    console.log("age getter");
    return this._age;
  }

  set age(value) {
    console.log("age setter");
    this._age = Number.parseInt(value, 10);
  }
}

const user = new User(20);

user.age = 30; // calls set age(30)

console.log(user.age); // calls get age
