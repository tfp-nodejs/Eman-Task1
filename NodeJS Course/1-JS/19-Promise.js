// Promise
// - A Promise in JavaScript is like a real-life promise — something that might happen in the future
// - It represents the result of an asynchronous operation
// - Promises help avoid "callback hell" and make async code cleaner and more readable

// - Promise States:
//  1- Pending   → Initial state, neither fulfilled nor rejected
//  2- Fulfilled → Operation completed successfully
//  3- Rejected  → Operation failed

// - Once A Promise Has Been Called, It Will Start In A Pending State
// - The Created Promise Will Eventually End In A Fulfilled State Or In A Rejected State

// Exampe 2
const myPromise = new Promise((resolve, reject) => {
  let connect = true;
  if (connect) {
    resolve("Connection Established");
  } else {
    reject(Error("Connection Failed"));
  }
});
myPromise
  .then((resolveValue) => console.log(`Success: ${resolveValue}`))
  .catch((error) => console.log(`Error: ${error.message}`))
  .finally(() => console.log("Operation Finished"));

// // Example 2: Chaining Promises (Avoiding Callback Hell)

// // 1- Boil Water
// // 2- Add Tea
// // 3- Pour Tea

// function boilWater() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Water boiled");
//             resolve();
//         }, 1000);
//     });
// }

// function addTea() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Tea added");
//             resolve();
//         }, 1000);
//     });
// }

// function pourTea() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Tea poured");
//             resolve();
//         }, 1000);
//     });
// }

// boilWater()
//     .then(addTea)
//     .then(pourTea)
//     .then(() => {
//         console.log("Tea is ready!");
//     })
//     .catch((error) => {
//         console.log("Error:", error.message);
//     });