// Await
// - Await works only inside async functions
// - Await makes JavaScript wait for the Promise result
// - More elegant, readable, and clean alternative to .then()

// - Benefits:
//   - Looks synchronous, runs asynchronously
//   - No .then() chaining
//   - Clean, flat structure
//   - Easy error handling with try...catch

// // Example 1
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("I am the Good promise");
//   }, 3000);
// });
// async function readData() {
//   console.log("Before Promise");

//   myPromise.then((data) => console.log(data));

//   console.log("After Promise");
// }
// readData();

// // Example 2
// function boilWater() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Water boiled");
//       resolve();
//     }, 1000);
//   });
// }

// function addTea() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Tea added");
//       resolve();
//     }, 1000);
//   });
// }

// function pourTea() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Tea poured");
//       resolve();
//     }, 1000);
//   });
// }

// // Using Async / Await
// async function makeTea() {
//   try {
//     await boilWater();
//     await addTea();
//     await pourTea();

//     console.log("Tea is ready!");
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// makeTea();

