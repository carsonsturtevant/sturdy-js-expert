// dom misc

// element.remove()
const result = document.querySelector("#result");
result.remove();

// <body> can be accessed with document.body
document.body.style.backgroundColor = "blue";

// similiarly <html> can be accessed with document.documentElement
document.documentElement.style.backgroundColor = "yellow";

// custom data attributes
// <div id="container" data-id="3"></div>
// HTML spec recommends to use data- prefix on custom attributes
<form id="payment-form" data-currency="EUR">
  ...
</form>;
const form = document.querySelector("#payment-form");
console.log(form.dataset); // {currency: "EUR"}
console.log(form.dataset.currency); // EUR
// dataset is an object that contains all the data attributes
// values of data attributes are always strings
// can update dataset values
form.dataset.currency = "USD";

// element.parentElement
const heading = document.querySelector("h2");
heading.parentElement; // <section>

// element.closest
const btn = document.querySelector(".btn");
btn.closest(".section"); // <section>

// interfaces
// every html element inherits a particular interface
const div = document.querySelector("div");
const p = document.querySelector("p");

div.toString(); // [object HTMLDivElement]
p.toString(); // [object HTMLParagraphElement]
// every html element inherits from HTMLElement
