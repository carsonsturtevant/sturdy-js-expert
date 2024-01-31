// inheritance
class Employee {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getInitials() {
    return this.firstName[0] + this.lastName[0];
  }
}

class Manager extends Employee {
  sendPerformanceReview() {
    console.log(`Sent performance review for current quarter`);
  }

  // override method
  getFullName() {
    return `${this.firstName} ${this.lastName} (manager)`;
  }
}

// super keyword for constructors
class Employee2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getInitials() {
    return this.firstName[0] + this.lastName[0];
  }
}

class Manager2 extends Employee2 {
  constructor(firstName, lastName, department) {
    super(firstName, lastName); // super must be called first
    this.department = department;
  }

  sendPerformanceReview() {
    console.log(
      `Sent performance review for current quarter in ${this.department}`
    );
  }

  getFullName() {
    // can also use super to call parent methods
    return super.getFullName() + " [manager]";
  }
}
