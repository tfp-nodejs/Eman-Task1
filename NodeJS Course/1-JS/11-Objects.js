// Objects

// - Objects store key-value pairs.

// - Keys are strings (or symbols), values can be any data type (string, number, boolean, array, function, object, etc.).

// - Great for representing structured data.

// Example Object
const user = {
  name: "Ahmed",
  age: 25,
  isAdmin: false,
};

// //  Log values (Dot notation)
// console.log(user.name);
// console.log(user.age);

// // Update a value
// user.age = 26;
// console.log("Updated age:", user.age);

// // Add new property
// user.email = "ahmed@example.com";
// console.log("Added email:", user);

// // Delete a property
// delete user.isAdmin;
// console.log("After delete:", user);

// // Access using Bracket Notation (useful for dynamic keys)
// console.log(user["name"]);
// const key = "email";
// console.log(user[key]);

// // Iterate over object properties (keys)
// console.log("Using for...in:");
// for (const key in user) {
//   console.log(`${key}: ${user[key]}`);
// }

// // Iterate using Object.entries() (key-value pairs)
// console.log("Using Object.entries:");
// Object.entries(user).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

// // Get all keys
// console.log("Keys:", Object.keys(user));

// // Get all values
// console.log("Values:", Object.values(user));
