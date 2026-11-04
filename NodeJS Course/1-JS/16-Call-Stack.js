// Call Stack

// - The JavaScript engine uses a Call Stack to manage execution contexts.

// - It's a mechanism to track where the interpreter is in the code.

// - When a function is called, it's added (pushed) to the top of the stack.

// - When the function finishes, it's removed (popped) off the stack.

// - The Call Stack follows Last In, First Out (LIFO) behavior.

// - Code execution in JavaScript is synchronous by default.

// - Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

// Web APIs (like setTimeout, setInterval, etc.) are handled by the browser (or environment),
// not directly by the Call Stack. These are registered and their callbacks get pushed into appropriate queues (Callback Queue or Microtask Queue) to be executed later by the Event Loop.

setTimeout(() => {
    console.log("zero"); 
}, 0)
const one = () => {
    console.log("one");
}
const two = () => {
    one()
    console.log("two");
}
const three = () => {
    two()
    console.log("three");
}
three()



/*

=======================================
=======================================
=======================================
=======================================
=======================================
=======================================

=======================================

=======================================

=======================================

one
two
three
*/