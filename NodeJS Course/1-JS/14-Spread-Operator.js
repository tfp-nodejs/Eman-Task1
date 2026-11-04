// Spread Operator

// JAVASCRIPT SPREAD OPERATOR (...)
//
// - Expands elements of an iterable (array, string, object) into individual elements.
// - Commonly used for copying, merging, passing arguments, and more.

// Example 1: Copying Arrays
const numbers = [1, 2, 3];
const newNumbers = [...numbers];
console.log("Original:", numbers);
console.log("Copy:", newNumbers);

// Example 2: Merging Arrays
const even = [2, 4, 6];
const odd = [1, 3, 5];
const merged = [...even, ...odd];
console.log("Merged:", merged);

// Example 3: Copying Objects
const user = { name: "Ali", age: 25 };
const userCopy = { ...user };
console.log("User Copy:", userCopy);

// Example 4: Merging Objects
const address = { city: "Gaza", country: "Palestine" };
const profile = { ...user, ...address };
console.log("Merged Object:", profile);

// Example 6: Adding Items to Arrays
const fruits = ["apple", "banana"];
const moreFruits = [...fruits, "orange"];
console.log("Fruits:", moreFruits);

// Example 7: Overriding Object Properties
const baseUser = { name: "Sara", role: "user" };
const updatedUser = { ...baseUser, role: "admin" };
console.log("Updated User:", updatedUser);

// -Spread Creates a SHALLOW Copy
//   - Only copies top-level properties
//   - Nested objects/arrays are still shared by reference (not deeply cloned)

// Example:
const original = {
  name: "Ali",
  skills: ["JavaScript", "Node.js"],
};

const copy = { ...original };

// Modify nested array in copy
copy.skills.push("React");

console.log("Original:", original);
// Notice: 'skills' array inside original also got 'React' because it's a shallow copy

/*
 Explanation:
  - Spread copies the 'skills' array by reference, not a new separate array.
  - So changes to 'copy.skills' affect 'original.skills' too.
*/

// ✅ 2️⃣ Order Matters When Merging Objects
// - If the same key exists in both, the one on the RIGHT overwrites the one on the LEFT

const objA = { role: "user", age: 25 };
const objB = { age: 30, city: "Gaza" };

const merged2 = { ...objA, ...objB };

console.log("Merged Object:", merged2);
/*
 Explanation:
    - 'age' in objA is 25
    - 'age' in objB is 30
    - Since objB is spread after objA, its 'age' value (30) overwrites the previous one (25)
    - Final result: { role: 'user', age: 30, city: 'Gaza' }
*/

// Deep Copy Note
/*
 If you need to deeply copy nested structures:
  - JSON.parse(JSON.stringify(obj)) 
*/

// Example of structuredClone

const deepOriginal = {
  name: "Sara",
  skills: ["HTML", "CSS"],
};

const deepCopy = JSON.parse(JSON.stringify(deepOriginal));
deepCopy.skills.push("Tailwind");

console.log("Deep Copy:", deepCopy);
console.log("Deep Original:", deepOriginal);
// Now changes in deepCopy don't affect deepOriginal



// // qustion
// const user = {
//   name: "Ahmed",
//   scores: [80, 90]
// };

// const copy = { ...user };

// copy.name = "Ali";
// copy.scores.push(100);

// console.log(user.name);
// console.log(user.scores);
