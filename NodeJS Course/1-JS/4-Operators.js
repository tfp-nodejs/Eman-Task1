//  JavaScript Operators

// Operators are used to perform actions on values and variables.

//  Categories of Operators:
// - Arithmetic: +, -, *, /, %, **
// - Comparison: ==, ===, !=, !==, >, <, >=, <=
// - Logical: && (and), || (or), ! (not)

//  Strict equality (===) checks both value and type,
// while loose equality (==) converts types before comparing.

// -- Example 1: Comparison and Arithmetic Operators
const x = 10;
const y = "10";

console.log("== vs ===");
console.log(x == y); // true  (values equal after type coercion)
console.log(x === y); // false (different types: number vs string)

console.log("Arithmetic Operators");
console.log(x + 5); // 15
console.log(x > 5 && y === "10"); // true (both conditions true)

console.log("Not Equal vs Strict Not Equal");
console.log(x != y); // false (values equal after coercion)
console.log(x !== y); // true  (different types)

// -- Logical Operators
const isAdmin = false;
const isManager = true;

console.log("Logical Operators");
console.log(isAdmin || isManager); // true (one is true)
console.log(!isAdmin); // true (negates false to true)

// -- Modulus and Exponentiation
console.log("Modulus and Exponentiation");
console.log(10 % 3); // 1  (remainder)
console.log(2 ** 3); // 8  (2^3)

//  Increment and Decrement

let count = 5;
console.log("Post Increment:", count++); // 5 (then adds 1)
console.log("Now:", count); // 6

console.log("Pre Increment:", ++count); // 7 (adds 1, then returns)
// Same with --

//  Unary Operators (+ / -)

// Unary Plus: Converts to number
console.log(+10); // 10
console.log(+"20"); // 20
console.log(+"-15"); // -15
console.log(+"Text"); // NaN (Not a Number)
console.log(+3.14); // 3.14
console.log(+null); // 0
console.log(+true); // 1
console.log(+false); // 0

// Unary Negation: Converts to number and negates
console.log(-10); // -10
console.log(-"20"); // -20
console.log(-"Text"); // NaN

//  Type Coercion (Type Casting)

let a = "10";
let b = 20;
let c = true;

console.log("Type Coercion Examples");
console.log(a + b); // "1020" (string concatenation)
console.log(a - b); // -10   (string converted to number)
console.log(b + c); // 21    (true = 1)
console.log("5" * 2); // 10
console.log("5" + 2); // "52"



// console.log("10" + 5);
// console.log("10" - 5);
// console.log(10 === "10");
// console.log(10 == "10");
// console.log(5 % 2);