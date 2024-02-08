// dom append

// dont use innerHTML += to append to a dom element
// it will remove all the event listeners and data associated with the element

// use appendChild or insertAdjacentHTML
<div id="job-positions">
  <div class="position">2009-2013</div>
  <div class="position">2013-2015</div>
</div>;
const positions = document.querySelector("#job-positions");
positions.insertAdjacentHTML(
  "beforeend",
  `<div class="position">2015-2020</div>`
);

// beforeend, afterend, beforebegin, afterbegin

// can loop to add elements from an array
apps.forEach((app) => {
  list.insertAdjacentHTML("beforeend", `<li>${app}</li>`);
});

// insertAdjacentText is also available

// appendChild
const paragraph = document.createElement("p");
paragraph.classList.add("text-center");
paragraph.textContent = "Hello World";
console.log(paragraph); // <p class="text-center">Hello World</p>
document.body.appendChild(paragraph);
