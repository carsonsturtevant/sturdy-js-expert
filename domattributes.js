// dom attributes

// getAttribute
const first = document.querySelector(".first");
const idValue = first.getAttribute("id");

// attribute like disabled is a boolean attribute so if it is present
// then it is true and if getAttribute("disabled") returns null
// then it is false

// removeAttribute
first.removeAttribute("id");

// setAttribute
first.setAttribute("id", "first");

// hasAttribute
const second = document.getElementById("second");
second.hasAttribute("id"); // true
