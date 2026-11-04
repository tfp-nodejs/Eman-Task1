/*
 ========================================
 What is JSON?
 ========================================

 - JSON stands for JavaScript Object Notation.
 - It is a lightweight, text-based format for storing and exchanging data.
 - JSON is commonly used to transfer data between clients and servers.
 - JSON syntax is based on JavaScript object syntax.
 - JSON is language-independent.
 - JSON files typically have a .json extension.

 Important:
 - JSON is a data format, not a programming language.
 - JSON is not the same as a JavaScript Object.
*/


/*
 ========================================
 Why Use JSON?
 ========================================

 - Easy to read and write.
 - Lightweight and simple.
 - Supported by most programming languages.
 - Commonly used in REST APIs.
 - Can represent complex and nested data.
*/


/*
 ========================================
 JSON Syntax Rules
 ========================================

 - Objects are written inside curly braces { }.
 - Arrays are written inside square brackets [ ].
 - Object data is organized as key-value pairs.
 - Keys must be strings wrapped in double quotes.
 - A colon (:) separates each key from its value.
 - Multiple key-value pairs are separated by commas.
 - Strings must use double quotes.
 - Comments are not allowed inside JSON data.
*/


/*
 ========================================
 Available Data Types in JSON
 ========================================

 1- String
 2- Number
 3- Boolean
 4- null
 5- Object
 6- Array


 JSON does NOT support:

 - undefined
 - Functions
 - Symbols
 - BigInt values
 - NaN or Infinity as numeric literals
*/


/*
 ========================================
 JSON Example
 ========================================

 {
   "id": 1,
   "name": "Ahmed",
   "age": 25,
   "isActive": true,
   "skills": ["JavaScript", "Node.js"],
   "address": {
     "city": "Gaza",
     "country": "Palestine"
   },
   "phone": null
 }


 Explanation:

 - id: Number
 - name: String
 - age: Number
 - isActive: Boolean
 - skills: Array
 - address: Object
 - phone: null
*/


/*
 ========================================
 JSON vs JavaScript Object
 ========================================

 JavaScript Object:
 - Keys do not always need quotes.
 - Strings can use single or double quotes.
 - Can contain functions and undefined.
 - Can contain comments and trailing commas.

 JSON:
 - Object keys must use double quotes.
 - Strings must use double quotes.
 - Cannot contain functions or undefined.
 - Cannot contain comments or trailing commas.
*/


// Example 1: JavaScript Object

const user = {
  name: "Ahmed",
  age: 25,
  isActive: true,
};

console.log(user);
console.log(typeof user); // object


// Example 2: JSON String

const jsonUser = '{"name":"Ahmed","age":25,"isActive":true}';

console.log(jsonUser);
console.log(typeof jsonUser); // string


/*
 Important:

 - user is a JavaScript Object.
 - jsonUser is a String containing JSON data.
*/


/*
 ========================================
 JSON.stringify()
 ========================================

 - Converts a JavaScript value into a JSON string.
 - Commonly used when sending JSON data to a server.
 - Returns a string (for supported values).
*/


// Example 3: JavaScript Object to JSON String

const employee = {
  id: 1,
  name: "Sara",
  salary: 3000,
  isActive: true,
};

const jsonData = JSON.stringify(employee);

console.log(jsonData);
console.log(typeof jsonData); // string


/*
 Output:

 {"id":1,"name":"Sara","salary":3000,"isActive":true}
*/


/*
 ========================================
 JSON.parse()
 ========================================

 - Converts a JSON string into a JavaScript value.
 - Commonly used when receiving JSON data from a server.
 - The result can be an object, array, string, number, etc.
*/


// Example 4: JSON String to JavaScript Object

const responseData = '{"id":2,"name":"Ali","age":30}';

const parsedData = JSON.parse(responseData);

console.log(parsedData);
console.log(parsedData.name);
console.log(typeof parsedData); // object


/*
 Output:

 { id: 2, name: 'Ali', age: 30 }

 Ali

 object
*/


/*
 ========================================
 JSON.stringify() vs JSON.parse()
 ========================================

 JSON.stringify():
 JavaScript Value ---> JSON String

 JSON.parse():
 JSON String ---> JavaScript Value
*/


// Example 5: Complete Conversion

const student = {
  name: "Omar",
  grade: 90,
  subjects: ["Math", "English"],
};

// JavaScript Object to JSON String
const studentJSON = JSON.stringify(student);

console.log("JSON:", studentJSON);

// JSON String back to JavaScript Object
const studentObject = JSON.parse(studentJSON);

console.log("Object:", studentObject);

/*
 ========================================
 Handling Invalid JSON
 ========================================

 - JSON.parse() throws a SyntaxError if the JSON is invalid.
 - We can use try/catch to handle parsing errors.
*/


// Example 6: Invalid JSON

const invalidJSON = "{name: 'Ahmed'}";

try {
  const data = JSON.parse(invalidJSON);
  console.log(data);
} catch (error) {
  console.log("Invalid JSON:", error.message);
}


/*
 ========================================
 JSON in HTTP Requests and Responses
 ========================================

 - JSON is commonly used to exchange data through APIs.
 - Clients can send JSON in an HTTP request body.
 - Servers can return JSON in an HTTP response body.

 Example HTTP Header:

 Content-Type: application/json


 Sending JSON with Fetch:

 fetch("https://example.com/api/users", {
   method: "POST",
   headers: {
     "Content-Type": "application/json"
   },
   body: JSON.stringify({
     name: "Ahmed",
     age: 25
   })
 });


 Important:

 - JSON.stringify() converts the object into a JSON string.
 - The server receives the JSON data.
 - response.json() reads and parses a JSON response body.
 - response.json() returns a Promise.
*/


/*
 ========================================
 Summary
 ========================================

 JSON:
 - A text-based format for exchanging data.

 JSON.stringify():
 - Converts JavaScript values to JSON strings.

 JSON.parse():
 - Converts JSON strings to JavaScript values.

 JSON vs JavaScript Object:
 - JSON is a data format.
 - JavaScript Objects are values in JavaScript memory.

 JSON in APIs:
 - Commonly used for request and response bodies.
 - Uses Content-Type: application/json.
*/