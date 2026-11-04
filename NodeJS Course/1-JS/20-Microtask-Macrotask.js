// - Microtask vs Macrotask in JavaScript (Event Loop)

// - JavaScript uses an Event Loop to handle asynchronous operations.
//    When asynchronous tasks finish, their callbacks go to Task Queues.

//    There are two main task queues:
//    - Task Queue (also called Macrotask Queue)
//    - Microtask Queue  (Higher Priority)

// - Macrotasks
// - Macrotasks (Tasks) are scheduled to run after microtasks have finished.
// - Operations that create Macrotasks:
//    setTimeout()
//    setInterval()

// - Microtasks
// - Microtasks are executed right after the current call stack is empty, and before any macrotasks are processed.
// - Operations that create Microtasks:
//    Promise.then()
//    Promise.catch()
//    Promise.finally()

// - Execution Order

// - JavaScript follows this order:
//   1️- Run current synchronous code (Call Stack)
//   2️- Run Microtasks
//   3️- Run Macrotask

// Example: Microtask Priority over Macrotask
console.log("1 - Start");

setTimeout(() => {
    console.log("2 - Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("3 - Promise");
});

console.log("4 - End");












// setTimeout(() => console.log("A"), 0);

// Promise.resolve().then(() => console.log("B"));

// Promise.resolve().then(() => console.log("C"));

// console.log("D");
