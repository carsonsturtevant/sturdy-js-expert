// closures

// A closure is a function having access to the parent scope,
// even after the parent function has closed.

// every time you create a function you get a closure

// scope chains
// 1. variables in their own scope
// 2. variables in the parent scope
// 3. variables in the global scope

/* global scope */
const maxAge = 18;

const init = () => {
  /* outer function */
  const button = document.querySelector("button");
  const age = Number.parseInt(document.querySelector("#age").value, 10);

  button.addEventListener("click", () => {
    /* inner function */
    // age accessible from outer function's scope
    // maxAge is accessible from the global scope
    // button is accessible from outer function's scope
    if (age >= maxAge) {
      button.classList.add("success");
    } else {
      button.classList.remove("success");
    }
  });
};

// in conclusion, a closure is the combination of a function bundled
// together with its surrounding variables
