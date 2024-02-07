// dom selection

// type selector
const title = document.querySelector("h1");

// id selector
const container = document.querySelector("#container");

// class selector
const list = document.querySelectorAll(".list");

// descendant selector
/*
<div id="banner">
    <div class="item"></div>
</div> 
*/
const li = document.querySelector("#banner .item");

// attribute selector
const input = document.querySelector('input[type="text"]');

/*
<a href="/contact-us" class="menu-link">Contact us</a>
*/
const correct = document.querySelector("a.menu-link");

// textContent
console.log(title?.textContent);

// document.querySelector returns either an object or null
// use null checks on potential empty results

// getElementById
const navbar = document.getElementById("navbar");

// dont use these
// document.getElementsByClassName
// document.getElementsByTagName

//multiple elements
document.querySelectorAll("p");
// always returns a NodeList
// NodeList is not an array
// does have .length
// can access items with [] notation
// can use forEach
const paragraphs = document.querySelectorAll("p");

console.log(paragraphs.length); // 2
console.log(paragraphs[0]); // <p>First paragraph</p>
console.log(paragraphs[1]); // <p>Second paragraph</p>

paragraphs.forEach((paragraph) => {
  console.log(paragraph); // logs every paragraph element one by one
});

// nodelist to array
const paragraphsArray = [...paragraphs];
// or
const paragraphsArray2 = [...document.querySelectorAll("p")];

// textContent vs innerHTML
const element = document.querySelector("#test");
console.log(element.textContent); // "This is a sample text"
console.log(element.innerHTML); // "This is a <strong>sample text</strong>"

// never change innerHTML with user input to avoid cross-site scripting attacks

// can use textContent or innerHTML to empty contents

// cant use textContent or innerHTML on input tags
// they require a closing tag

// input.value for input tags
<input type="text" id="input2" value="Hello, World!" />; // value property is a preset value
const input2 = document.querySelector("#input2").value;

// input, textarea, select all use value property
