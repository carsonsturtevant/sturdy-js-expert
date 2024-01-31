// classes

class Translation {
  constructor(word) {
    // capture constructor param into instance variable
    // this is explained in the next lesson
    this.word = word; // instance variable
  }

  isEnglishWord() {
    // returns true when word is English, false otherwise
  }

  isSpanishWord() {
    // returns true when word is Spanish, false otherwise
  }
}

// instance of the class Translation
const hello = new Translation("hello");

class User {
  constructor(firstName, lastName, prefix, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.prefix = prefix;
    this.age = age;
  }

  getFullName() {
    return `${this.prefix}. ${this.firstName} ${this.lastName}`;
  }

  canVote() {
    return this.age >= 18;
  }
}

// Sample usage
const user1 = new User("Sam", "Doe", "Mrs", 20);
console.log(user1.getFullName()); // "Mrs. Sam Doe"
console.log(user1.canVote()); // true
const user2 = new User("Alex", "Green", "Mr", 17);
console.log(user2.getFullName()); // "Mr. Alex Green"
console.log(user2.canVote()); // false

// static methods
class Config {
  static getYear() {
    // code to get the current year (for example, 2024)
    const date = new Date();
    return date.getFullYear();
  }
}
console.log(Config.getYear()); // 2024

// chaining methods
class Course {
  constructor(name, isCompleted) {
    this.name = name;
    this.isCompleted = isCompleted;
  }

  markAsCompleted() {
    this.isCompleted = true;
    return this; // allows method chaining
  }

  setGrade(grade) {
    this.grade = grade;
    return this; // allows method chaining
  }

  requestCertificate() {
    this.askedForCertificate = true;
    return this; // allows method chaining
  }
}
course.markAsCompleted().setGrade(18).requestCertificate();
// it works because the methods return this (the reference to the instance)

// public class fields
class User {
  firstName = "";
  lastName = "";
  prefix = "";
  age = 0;
}

// private class fields - old way
// there was no official way to make something private,
// so developers used _ as a convention
class User {
  constructor(firstName) {
    this._firstName = firstName;
  }
}

// private class fields - new way (actuall private if you use #)
class User {
  #firstName = "carl";
  #lastName = "bob";
  #prefix = "mr";
  #age = 0;

  // private functions as well
  #getFullName() {
    return `${this.#prefix}. ${this.#firstName} ${this.#lastName}`;
  }
}
