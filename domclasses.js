// dom classes

const element = document.querySelector(".item");
element.classList.add("active");
element.classList.remove("active");

element.classList.contains("active"); // true
element.classList.toggle("active"); // removes

element.classList.replace("active", "success");

element.classList.add("active", "success"); // can add/remove multiple
