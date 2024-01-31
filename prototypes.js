// prototypes

// before class syntax was added to js in 2015
/// function classes were used

//This is the constructor
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

// this is an instance method (that you can call on new instances of Rectangle)
// Note: this has to be a function (not an arrow function), will be explained later on in Lexical scope
Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};

// prototypal inheritance
class Gorilla {
  // define methods here
}
class Banana {
  // define methods here
}
class GorillaBanana {
  // do not use 'extends' because we'd like to choose the methods one by one
}

// Extend our GorillaBanana with the Gorilla's eat() method
GorillaBanana.prototype.eat = Gorilla.prototype.eat;

// Extend our GorillaBanana with Banana's peel() method
GorillaBanana.prototype.peel = Banana.prototype.peel;

// prototypal chain
Object.getPrototypeOf(welcome);
// {constructor: fn(), sayHello: fn()}

// gets the object prototype, called walking up the chain
Object.getPrototypeOf(Object.getPrototypeOf(welcome));
// {constructor: fn(), hasOwnProperty: fn(), isPrototypeOf: fn(), ...}

// another example
class Parent {
  parentMethod() {
    //
  }
}

class Child extends Parent {
  childMethod() {
    //
  }
}

const child = new Child();

Object.getPrototypeOf(child); // {constructor: fn(), childMethod: fn()}
Object.getPrototypeOf(Object.getPrototypeOf(child)); // {constructor: fn(), parentMethod: fn()}
Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(child))); // {constructor: fn(), hasOwnProperty: fn(), isPrototypeOf: fn(), ...} (the Object prototype)
Object.getPrototypeOf(
  Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(child)))
); // null

//What's important to see here is that the first prototype contains the
//childMethod function. If you go one level up, you'll find the parentMethod().

//The __proto__ that you see in the console is not part of the JavaScript
//language, however, all browsers have implemented it.
//It's preferred to use Object.getPrototypeOf() instead.
