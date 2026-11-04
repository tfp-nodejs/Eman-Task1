// Event Loop + Callback Queue

// - JavaScript executes code on a single main thread
//   using one Call Stack (one operation at a time).

// - The Call Stack tracks function calls in
//   Last In, First Out (LIFO) order.

// - When a function finishes, it's popped off the stack.

// - When an asynchronous API (like setTimeout, setInterval)
//   is called:

// 1- The timer is registered with the Runtime Environment
//    (Browser Web APIs or Node.js APIs).

// 2- The Runtime Environment manages the timer
//    without blocking the JavaScript Call Stack.

// 3- When the timer expires, its callback becomes ready
//    and is scheduled in the appropriate task queue.

// - The Event Loop coordinates the execution of callbacks:

// 1- It checks whether JavaScript can execute another task.

// 2- When the Call Stack is empty and pending microtasks
//    have been processed, the next eligible task
//    can be executed.

// - The Callback Queue follows First In, First Out (FIFO)
//   order within the same queue.

// Note: Microtask Queue has higher priority than
// regular timer callbacks. More details later.

// Example 1: Basic Event Loop Behavior
console.log("One");
setTimeout(() => {
  console.log("Three");
}, 0);
setTimeout(() => {
  console.log("Four");
}, 0);
console.log("Two");

// Example 2: Variable update before asynchronous callback
console.log(myVar);
let myVar = 100;
myVar += 100;
