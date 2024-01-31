// promises

const temperatures = [10, 5, 3];

sumTemperatures(temperatures)
  .then((value) => {
    console.log(value); // 18 (the sum of temperatures)
  })
  .catch((reason) => {
    // this callback will run when there's an error
    console.error(reason);
  });

// promise states
// pending
// fulfilled - callback runs
// rejected

// promises typically return data

// .catch() allows you to handle the rejected state
getWeatherIn("Amsterdam")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error); // {error: "Connection issue"}
  });

// possible for a promise to never resolve
// .finally() runs regardless of the state of the promise
getWeatherIn("Amsterdam")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Done fetching weather");
  });

// promise.all
// returns a Promise that fulfills when
// all the promises it receives have been fulfilled
Promise.all([promise1, promise2])
  .then((values) => {
    console.log(values); // [promise1Result, promise2Result]
  })
  .catch((error) => {
    console.error(error);
  });

// promise.any
// returns a Promise that fulfills when one promise resolves
Promise.any([promise1, promise2])
  .then((value) => {
    console.log(value); // result of the promise that finishes first
  })
  .catch((error) => {
    console.error(error);
  });

// creating a promise
// Promise() recieves a function as an argument that is used to complete it
const waitOneSecond = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1_000);
  });
};

// returning data in a promise
// converts milliseconds to seconds and returns
const wait = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const seconds = milliseconds / 1_000;
      resolve(seconds);
    }, milliseconds);
  });
};
wait(2_000).then((data) => {
  console.log(data); // 2 (seconds)
});

// promise also comes with reject along with resolve
new Promise((resolve, reject) => {
  resolve("good"); // will resolve the promise (.then(callback) will be called)
  reject("bad"); // will fail the promise (.catch(callback) will be called)
});

// promise chaining
// .then() returns a promise
// .then() can be chained
