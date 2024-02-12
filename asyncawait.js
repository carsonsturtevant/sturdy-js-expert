// async/await

// example without async await
const getUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

// example with async await
const getUsers2 = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
};

// can only await a promise

// top level await (outside of an async function)
await fetch("https://jsonplaceholder.typicode.com/users");

// rejected awaits
const init = async () => {
  try {
    const result = await getUnreadCount();
    console.log(result);
  } catch (error) {
    console.error(error);
    // handle error by showing that something went wrong
  }
};

/*
 * The .catch(callback) only works when you're using promises directly.
On the other hand, try...catch works when you're using async/await but not promises.
 */
