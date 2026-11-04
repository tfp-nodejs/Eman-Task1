// Hoisting

// - Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution.

// - var declarations are hoisted and initialized with undefined.

// - Function declarations are hoisted fully — both the name and the body.

// // -- Example 1: var hoisting
// console.log(a); // undefined (declaration hoisted, but not the value)
// var a = 5;

// // -- Example 2: let and const are NOT hoisted like var
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 10;

// // -- Example 3: Function declarations are fully hoisted (can be called before definition)
// console.log(add(2, 3)); // 5
// function add(x, y) {
//   return x + y;
// }

// // -- Example 4: Function expressions are NOT hoisted
// console.log(multiply(2, 3)); // TypeError: multiply is not a function
// var multiply = function (x, y) {
//   return x * y;
// };

// // qustion
// let x = 5;

// function test() {
//   let x = 10;
//   console.log(x);
// }

// test();
// console.log(x);