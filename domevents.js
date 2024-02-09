// dom events

// // addEventListener click
<button id="app-button">Click me</button>;
const button = document.querySelector("#app-button");

button.addEventListener("click", () => {
  // do something when the button is clicked.
  console.log("Button clicked");
});

// event details
<button id="app-button">Click me</button>;
const button2 = document.querySelector("#app-button");
button2.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.x); // x position of the click
  console.log(event.y); // y position of the click
});

// event target
button.addEventListener("click", (event) => {
  console.log(event.currentTarget); // same as the variable 'button'
});
// The event.currentTarget refers to the element to
// which the event listener has been attached.

// debugger
button.addEventListener("click", (event) => {
  console.log(event);
  debugger; // pause execution so that we can see event.currentTarget
  //in the dev tools
});

// add event listeners on multiple elements
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.currentTarget); // the <button> that was clicked
  });
});

// event.target is another option but not reliable
<button>
  Hello <strong>world</strong>
</button>;
// in this example event.target might be the <strong> tag depending
// on where the user clicks

// removeEventListener
// in order for removeEventListner to work you have to provide the same
// callback function that was used to add the event listener

const button3 = document.querySelector("#app-button");
const callback = () => {
  console.log("Button clicked");
};
button3.addEventListener("click", callback);
button3.removeEventListener("click", callback);
// you dont include the () on the callback function because it would
// call the function on page load. You only want to call the function
// when the button is clicked.

// once event listener
// only executes once and then is automatically removed
button3.addEventListener(
  "click",
  () => {
    console.log("Button clicked");
  },
  { once: true }
);

// event bubbling
// when an event happens on an element, it first runs the handlers on it,
// then on its parent, then all the way up on other ancestors
<body>
  <main>
    <h1>Event bubbling</h1>
    <button>Click me</button>
  </main>
</body>;
// you could add an event listener to the body tag and it would still
// work because of event bubbling
// the h1 would not work because it is not a parent of the button

// if you want to prevent event bubbling you can
// use event.stopPropagation()

// focus and blur
// focus is when an element is selected
// blur is when an element is deselected
const input = document.querySelector("#app-input");
input.addEventListener("focus", () => {
  console.log("Input focused");
});
input.addEventListener("blur", () => {
  console.log("Input blurred");
});

// domcontentloaded
// this event is fired when the initial HTML document has been completely
// loaded and parsed, without waiting for stylesheets, images, and subframes
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
});

// you can also just put your script at the bottom of the body tag
// to avoid having to use the domcontentloaded event

// scroll event
// this event is fired when the document view or an element has been scrolled
window.addEventListener("scroll", () => {
  console.log("Page scrolled");
});
// not very performant because it fires a lot of events
// but you can debounce it to make it more performant
// debounce is a technique to limit the rate at which a function is called

// change
// fired when the value of an element has been changed
// typically select and input elements

// keydown, keyup, keypress
// fired when a key is pressed, released, or pressed and released
document.addEventListener("keydown", (event) => {
  console.log(event.key);
});
