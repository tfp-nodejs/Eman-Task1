// Primitive vs Non-Primitive

// Data Types In JavaScript
// Primitive (Value Types)
// Non-Primitive (Reference Types)

// 1 - Primitive Types
// stored directly in memory.

// Types:
// - Number
// - String
// - Boolean
// - Undefiend
// - Null

// // Example
// let a = 5;
// let b = a;
// b = 10;
// console.log(a);

// 2 - Non-Primitive Types
// stored by references

// Types:
// - Array
// - Object
// - Function

// // Example 1
// const obj1 = { age: 25 };
// const obj2 = obj1;
// obj2.age = 30;
// console.log(obj1.age);

// // Example 2

// let obj1 = { age: 25 };
// let obj2 = obj1;

// obj2 = { age: 30 };

// console.log(obj1.age); // 25
// console.log(obj2.age); // 30

// // Example 3
// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// arr2.push(4);

// console.log(arr1);