// Arrays and Array Methods

// - Arrays store ordered collections of data (numbers, strings, objects, etc.).

// - JavaScript provides built-in methods for iterating, transforming, and reducing data collections.

// - Common methods: forEach, map, filter, reduce.

// - These methods enable a functional programming style: working with data by transforming it, without changing the original array.

// // -- Example Array
const prices = [10, 20, 30, 40];

// // -- Access specific items
// console.log(prices[0]); // First item
// console.log(prices[prices.length - 1]); // Last item

// // -- Add an item
// prices.push(50);
// console.log("After push:", prices);

// // -- Remove last item
// prices.pop();
// console.log("After pop:", prices);

// // -- Check array length
// console.log("Array Length:", prices.length);

// // -- Example 1: for...of - Another way to iterate
// for (const price of prices) {
//   console.log(`price: ${price}`);
// }

// // -- Example 2: forEach - Iterate over array items
// prices.forEach((price) => {
//   console.log(`Price: ${price}`);
// });

// // -- Example 3: map - Create a new array with a transformation (e.g., add discount)
// const discountedPrices = prices.map((price) => price * 0.5);
// console.log("Discounted Prices:", discountedPrices);
// Task: Swap capital letters to small and vice versa
// Task: Convert negative numbers to positive and vice versa

// // -- Example 4: filter - Return only prices greater than 20
// const expensivePrices = prices.filter((price) => price > 20);
// console.log("Prices > 20:", expensivePrices);
// Task: Retrun only even numbers
// Task: Return words longer than 4 characters => ["apple", "banana", "hi", "code", "wonderful", "sun"]

// // -- Example 5: reduce - Sum all prices
// const totalPrice = prices.reduce((accumulator, currentPrice) => {
//   return accumulator + currentPrice;
// }, 0);
// console.log("Total Price:", totalPrice);
// Task: Return longest word => ["code", "developer", "hi", "awesome"]
