// dynamic imports

// regular import statements run synchronously

// dynamic imports run as needed, asynchronously
import("./helpers.js").then((module) => {
  const Helpers = module.default; // because Helpers is a default export
  const getDate = module.getDate; // because getDate is a named export
  // use Helpers and getDate inside this function...
});

// example of on click dynamic import
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  import("chat-library").then((module) => {
    module.init(); // assuming the chat-library exports a named function called init.
  });
});

// can use object destructuring

button.addEventListener("click", async () => {
  const { init } = await import("chat-library");
  init();
});
