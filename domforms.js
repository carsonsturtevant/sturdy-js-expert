// dom forms

// submit event requirements
// 1. have a form element
// 2. have a submit button
// 3. have at least 1 input or textarea inside the form
<form id="address-form">
  <input type="text" placeholder="Enter your address" />
  <input type="submit" value="Save" />
</form>;

// submit event listener
const form = document.querySelector("#address-form");

form.addEventListener("submit", (event) => {
  // event callback (when the form is submitted)
});

// preventDefault
// prevent the default behavior of the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // default behavior is to reload the page when a form is submitted
  // its outdated, we typically dont need to reload the page
});

// reading form data
const form2 = document.querySelector("#weather-form");
const city = document.querySelector("#city");

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  // read the user's city and pass it to getWeatherInfo()
  console.log(city.value); // see in the console to make sure it's working
  getWeatherInfo(city.value);
});
