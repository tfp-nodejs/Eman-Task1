// Async

// - Adding "async" before a function makes it always return a Promise
// - Inside an async function, you can use "await" to pause execution until a Promise resolves
// - Makes asynchronous code look synchronous and cleaner than Promise chains

// Example 1: Async function always returns a Promise
function getData() {
  return new Promise((resolve, reject) => {
    let users = [];
    if (users.length > 0) {
      resolve("Users Found");
    } else {
      reject("No Users Found");
    }
  });
}

getData()
  .then((resolvedValue) => console.log(resolvedValue))
  .catch((rejectedValue) => console.log("Rejected " + rejectedValue));
