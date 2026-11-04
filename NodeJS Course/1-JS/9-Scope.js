// Scope in JavaScript Functions

// - Scope determines the accessibility (visibility) of variables in different parts of the code.

// - Global Scope: Variables declared outside any function or block; accessible anywhere in the code.

// - Local/Function Scope: Variables declared inside a function are only accessible within that function.

// - Block Scope (ES6): Variables declared with let or const inside curly braces {} are limited to that block.

// // Example 1: Global vs Function Scope
// var a = 1;
// var b = 2;
// function printText() {
//   console.log(`Inside function - a: ${a}`);
//   console.log(`Inside function - b: ${b}`);
// }
// console.log(`Outside function - a: ${a}`);
// console.log(`Outside function - b: ${b}`);
// printText();

// // -- Example 2: Block Scope with let and var
// var x = 10;
// if (true) {
//   let x = 20; // block-scoped, different from the outer 'x'
//   var y = 30; // function-scoped (or global if not inside a function)
//   console.log(`Inside block - x: ${x}`); // 20
//   console.log(`Inside block - y: ${y}`); // 30
// }
// console.log(`Outside block - x: ${x}`); // 10
// console.log(`Outside block - y: ${y}`); // 30 (var ignores block scope)

// // -- Example 3: Nested Functions and Scope Chain
// function outer() {
//   let outerVar = "I'm outside!";
//   function inner() {
//     let innerVar = "I'm inside!";
//     console.log(outerVar);
//     console.log(innerVar);
//   }
//   inner();
//   console.log(innerVar);
// }
// outer();
