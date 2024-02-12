// lexical scope

class App {
  constructor() {
    this.navbar = document.querySelector("#navbar");
    this.initEvents();
  }

  initEvents() {
    this.navbar.addEventListener("click", function () {
      console.log(this.navbar); // undefined
      this.navbar.remove();
    });
  }
}

// when you use function () {}, js makes a new this for the function
// so this.navbar is undefined

// prior to 2015, you would use a variable to store the value of this
// and then use the variable in the function
class App {
  constructor() {
    this.navbar = document.querySelector("#navbar");
    this.initEvents();
  }

  initEvents() {
    //capture the value so that we can use it inside the function() { }
    const that = this;
    this.navbar.addEventListener("click", function () {
      console.log(this.navbar); // undefined because `this` inside the function has a new value
      console.log(that.navbar); // returns the navbar because `that` holds the value of the outer function
      that.navbar.remove(); // works
    });
  }
}

// Option 2 is binding this to the function
class App {
  constructor() {
    this.navbar = document.querySelector("#navbar");
    this.initEvents();
  }

  initEvents() {
    this.navbar.addEventListener(
      "click",
      function () {
        console.log(this.navbar); // returns the navbar because `this` is bound to the correct value
        this.navbar.remove(); // works
      }.bind(this)
    ); //bind the value of this from outside the function into the inner function
  }
}

// Option 3 is to use an arrow function (best solution)
// arrow functions do not have their own this
// they inherit the value of this from the parent scope
class App {
  constructor() {
    this.navbar = document.querySelector("#navbar");
    this.initEvents();
  }

  initEvents() {
    this.navbar.addEventListener("click", () => {
      console.log(this.navbar);
      this.navbar.remove();
    });
  }
}
