// Callback

// - A function passed as an argument to another function to be executed later,
// typically after an asynchronous operation completes.

// Simple Example  
function fetchUser(callback) {
    console.log("Fetching user...");

    setTimeout(() => {
        const user = { id: 1, name: "Ahmad" };
        callback(user);
    }, 1000);
}

fetchUser((user) => {
    console.log("User:", user.name);
});

// - Callback Hell
//   - Happens when multiple asynchronous callbacks are nested inside each other
//   - Makes code difficult to read, maintain, and debug

// // Callback Hell Example
// // 1- Boil Water
// // 2- Add Tea
// // 3- Pour Tea

// function boilWater(callback) {
//   setTimeout(() => {
//     console.log("Water boiled");
//     callback();
//   }, 1000);
// }

// function addTea(callback) {
//   setTimeout(() => {
//     console.log("Tea added");
//     callback();
//   }, 1000);
// }

// function pourTea(callback) {
//   setTimeout(() => {
//     console.log("Tea poured");
//     callback();
//   }, 1000);
// }

// boilWater(() => {
//   addTea(() => {
//     pourTea(() => {
//       console.log("Tea is ready!");
//     });
//   });
// });






// function process(callback) {
//     console.log("A");

//     setTimeout(() => {
//         console.log("B");
//         callback();
//     }, 1000);

//     console.log("C");
// }

// process(() => {
//     console.log("D");
// });