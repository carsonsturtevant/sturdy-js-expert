// web components

// custom html elements, for example,
<app-navbar></app-navbar>;

// benefits of web components:
// reusable
// modular - typically in a single file
// encapsulated - styles are scoped to the component

// example app made of web components
<app-root>
  <app-navbar page="home"></app-navbar>
  <flashcards-questions>
    <flashcards-question></flashcards-question>
    <flashcards-question></flashcards-question>
    <flashcards-question></flashcards-question>
  </flashcards-questions>
  <app-sidebar></app-sidebar>
</app-root>;

// web components are now a part of the web platform and supported by
// all modern browsers

// web components are made of 4 main parts:
// custom elements
// shadow dom
// html templates
// es modules

// custom elements api allows us to define our own html elements
class AppNavbar extends HTMLElement {}

window.customElements.define("app-navbar", AppNavbar);
// you would then be able to use <app-navbar> in your html

// naming
// custom components have to be named with a dash in the name
// this is to avoid naming conflicts with built-in html elements
// built in html elements are not allowed to have dashes in their names
// its common to name with app- or my- prefix

// If you define your own constructor method, you will need to
// call super() first thing as we are extending from HTMLElement.
class AppNavbar extends HTMLElement {
  constructor() {
    super(); // ALWAYS start with super()
  }
}

// shadow dom
// shadow dom allows us to encapsulate the styles and markup of our
// web components
// it allows us to create a scoped dom tree attached to an element
{
  /* 
<style>
    p {
        color: red;
    }
</style>
<p>Page subtitle</p>
<dashboard-stats>
    <!-- Shadow DOM starts here -->
    <p>Dashboard stats</p>
    <!-- Shadow DOM ends here -->
</dashboard-stats> 
*/
}
// Only the <p>Page subtitle</p> will have a color: red;
// whereas the <p>Dashboard stats</p> will not!

{
  /* 
<dashboard-stats>
    <!-- Shadow DOM starts here -->
    <style>
        p {
            font-weight: bold;
        }
    </style>
    <p>Dashboard stats</p>
    <!-- Shadow DOM ends here -->
</dashboard-stats> 
*/
}
// only the <p> inside the shadow dom will have font-weight: bold;

// how to attach shadow dom to a custom element
class DashboardStats extends HTMLElement {
  constructor() {
    super(); // do not forget super() because we're overriding the constructor()
    const shadowRoot = this.attachShadow({ mode: "open" });
  }
}
// mode: "open" allows us to access the shadow dom from the outside
// mode: "closed" does not allow us to access the shadow dom from the outside
// almost always use mode: "open"
// mode: "closed" is used for web components that are not meant to be
// accessed from the outside like <video> or <audio>

// component lifecycle

// custom elements have a lifecycle that we can hook into

// constructor() - called when the element is created
// useful for setting up initial state and default values
// attach shadow dom here

// connectedCallback() - called when the element is added to the dom
// this is where you could call any code that depends on the dom
// since it is now reliably available

// disconnectedCallback() - called when the element is removed from the dom
// commonly used to clean up any resources and remove event listeners
class AppDashboard extends HTMLElement {
  constructor() {
    super();
    console.log("AppDashboard created");
    const shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    console.log("AppDashboard inserted into DOM");
    // add event listeners (if necessary)
  }

  disconnectedCallback() {
    console.log("AppDashboard removed from DOM");
    // remove event listeners (that were added in connectedCallback())
  }
}

window.customElements.define("app-dashboard", AppDashboard);

// HTML templates
{
  /* 
<template id="dashboard-template">
    <style>
        p {
            font-weight: bold;
        }
    </style>
    <p>Dashboard stats</p>
</template> 
*/
}
// templates are not rendered until they are added to the dom
// they pair well with web components
// they are useful for creating reusable html fragments
// you can see the template has an id="dashboard-template" which makes it
// easy to select and clone it

// using the template
class DashboardStats extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = document.querySelector("#dashboard-template");
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("dashboard-stats", DashboardStats);

// custom attributes
<app-dashboard theme="dark"></app-dashboard>;
// we can access the theme attribute in the custom element
class AppDashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    console.log(this.getAttribute("theme")); //"dark"
  }
}

window.customElements.define("app-dashboard", AppDashboard);
// changes to the attribute will not be reflected automatically
// there is a process to subscribe to changes to the attribute

// attributes can only accept strings
