//  JavaScript Destructuring

// Destructuring is a convenient way of extracting values from arrays or properties from objects into separate variables.

//  Array Destructuring
const colors = ["red", "green", "blue"];

// Old way
const firstColor = colors[0];
const secondColor = colors[1];

// New way (Destructuring)
const [c1, c2, c3] = colors;

console.log("Array Destructuring");
console.log(c1); // "red"
console.log(c2); // "green"
console.log(c3); // "blue"

//  Skipping Items
const [primary, , tertiary] = colors;
console.log(primary); // "red"
console.log(tertiary); // "blue"

//  Using Default Values
const [a = "black", b = "white", c = "gray", d = "yellow"] = colors;
console.log(d); // "yellow"

// ===================================
//  Object Destructuring
const user = {
  name: "Ahmed",
  age: 25,
  country: "Palestine",
};

// Old way
const username = user.name;
const userage = user.age;

// New way (Destructuring)
const { name, age, country } = user;

console.log("Object Destructuring");
console.log(name); // "Ahmed"
console.log(age); // 25
console.log(country); // "Palestine"

//  Renaming Variables
const { name: fullName, age: userAge } = user;
console.log(fullName); // "Ahmed"
console.log(userAge); // 25

//  Default Values
const { city = "Gaza" } = user;
console.log(city); // "Gaza"

// ===================================
//  Destructuring in Function Parameters

function showUser({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}

showUser(user); // "Ahmed is 25 years old."

//  Destructuring Arrays from Function Return

function getCoordinates() {
  return [25, 50];
}

const [x, y] = getCoordinates();
console.log(`X: ${x}, Y: ${y}`); // "X: 25, Y: 50"
