
// Control Flow (if/else, loops, switch)

// - Control flow determines the order in which code is executed.

// - It uses conditionals (if/else, switch) and loops (for, while, do...while) for decision-making and repetition.

// -- Example 1: if/else Statement
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// -- Example 2: for Loop
for (let i = 0; i < 3; i++) {
  console.log(`Loop ${i}`);
}

// -- Example 3: switch Statement
const day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Regular day");
}

// -- Example 4: while Loop
// Repeats while the condition is true.
let i = 0;

while (i < 3) {
  console.log(i);
  i++;
}

// Output: 0, 1, 2

// -- Example 5: do...while Loop
// Executes at least once, even if the condition is false.
let j = 5;

do {
  console.log(j);
  j++;
} while (j < 3);

// Output: 5

// -- Example 6: break in for Loop
// Stops the loop completely.
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }

  console.log(i);
}

// Output: 0, 1, 2

// -- Example 7: continue in for Loop
// Skips the current iteration and continues the loop.
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}

// Output: 0, 1, 2, 4
