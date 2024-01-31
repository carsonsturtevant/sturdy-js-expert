// fetch
// fetch always returns a promise
fetch(
  "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
);

fetch(URL).then((response) => {
  console.log(response); // fetch then() returns response object
});

// response.json() returns a promise
fetch(URL)
  .then((response) => response.json()) //returns promise
  .then((data) => {
    console.log(data);
  });

//an example
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // visualize it then realize it's an array of objects
    data.forEach((user) => {
      // console.log(user); // visualize the item of the array
      console.log(user.email); // log the email ☑️
    });
  });

let apiData;

fetch("...")
  .then((response) => response.json())
  .then((data) => {
    apiData = data;
  });
console.log(apiData); // ❌❌ this does not work as expected (needs async/await)

// response status codes
// 1XX - informational
// 2XX - success
// 3XX - redirection
// 4XX - client error
// 5XX - server error

// fetch wont reject on http error status
// need to handle yourself
// response.ok will be true if status is 2XX, false otherwise
fetch(URL)
  .then((response) => {
    if (!response.ok) {
      // 4xx or 5xx error
      throw new Error("API issues.");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// http methods
// GET - retrieve data
// POST - create data
// PUT - update data
// DELETE - delete data

// example post fetch
fetch("https://example.com/api/tweets", {
  method: "POST",
  body: JSON.stringify({
    tweet: "Your tweet here...",
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // read the server response
  });

// fetch boilerplate
fetch(URL, {
  method: "POST", // or PUT or DELETE
  body: JSON.stringify({
    key1: "value1", // replace with key/value based on documentation
    key2: "value2", // same as above (if needed)
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // read server response
  })
  .catch((error) => {
    console.error(error);
  });

// fetch header example
fetch(URL, {
  method: "POST", // or PUT or DELETE
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    key1: "value1", // replace with key/value based on documentation
    key2: "value2", // same as above (if needed)
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // read server response
  });
