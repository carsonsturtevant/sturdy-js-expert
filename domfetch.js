// dom fetch

// fetch get
{
  /* <button id="button">Get data</button>
<div id="result"></div> */
}
button.addEventListener("click", () => {
  // make a fetch request on click
  API.get("/notifications/new.json").then((data) => {
    console.log(data);
    result.textContent = data.message;
  });
});

// fetch put
form.addEventListener("submit", (event) => {
  event.preventDefault();

  API.put("/demo/grades.json", {
    grade: input.value,
  }).then((data) => {
    console.log(data);
  });
});
