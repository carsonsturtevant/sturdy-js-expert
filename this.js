// this keyword

// the value of this depends on how the function is called
// this is a reference to the object that is executing the current function
class Square {
  constructor(side) {
    this.side = side;
  }

  getPerimeter() {
    console.log(this); // visualize this
    return 4 * this.side;
  }
}

const box1 = new Square(10);
const value1 = box.getPerimeter(); // Square {side: 10}
console.log(value); // 40

// example with strange behavior
const box = new Square(10);
const calculatePerimeter = box.getPerimeter;
const value = calculatePerimeter(); // ❌ TypeError: Cannot read properties of undefined (reading 'side')

// binding this
const box3 = new Square(10);
const calculatePerimeter3 = box3.getPerimeter.bind(box3); // provide the context of 'this'
const value3 = calculatePerimeter3(); // Square {side: 10}
console.log(value3); // 40

// global this
// in the browser, this refers to the window object
console.log(this === window); // true
// in Node.js, this refers to the global object
console.log(this === global); // true

// arrow functions do not bind their own this so
// they inherit the paren'ts this value
