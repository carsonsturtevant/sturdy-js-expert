// dom events

// // addEventListener click
<button id="app-button">Click me</button>;
const button = document.querySelector("#app-button");

button.addEventListener("click", () => {
  // do something when the button is clicked.
  console.log("Button clicked");
});
