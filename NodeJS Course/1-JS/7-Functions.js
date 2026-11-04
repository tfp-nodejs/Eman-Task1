// Functions (Declarations, Expressions, Arrow Functions)

// - Functions are reusable blocks of code designed to perform a specific task.

// - JavaScript supports multiple ways to define functions.

// // -- Function Declaration:
// // A named function defined using the 'function' keyword.
function add(a, b) {
  return a + b;
}
add(5, 10);

// // -- Function Expression:
// // A function stored in a variable.
const multiply = function multiplyFuc(a, b) {
  return a * b;
};

// // -- Arrow Function (Introduced in ES6):
// // A shorter, modern syntax for writing functions.
const add = (a, b) => a + b;
