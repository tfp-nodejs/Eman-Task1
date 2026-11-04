/*
 ========================================
  Single Threading vs Multi Threading
 ========================================

 What is a Thread?

 - A thread is a single path of execution within a process.
 - A program can have one or multiple threads.
 - Threads are responsible for executing instructions.


 Single-Threaded:

 - Uses one thread to execute instructions.
 - Executes one piece of code at a time on that thread.
 - A long-running synchronous task can block other tasks.


 Multi-Threaded:

 - Uses multiple threads within the same process.
 - Different threads can work on different tasks.
 - Threads can execute in parallel on multiple CPU cores.
 - Multiple threads may share memory.
*/


// ========================================
// Example 1: Single-Threaded Execution
// ========================================

function task1() {
  console.log("Task 1 Started");
  console.log("Task 1 Finished");
}

function task2() {
  console.log("Task 2 Started");
  console.log("Task 2 Finished");
}

// task1();
// task2();

/*
 Output:

 Task 1 Started
 Task 1 Finished
 Task 2 Started
 Task 2 Finished
*/


/*
 ========================================
  Is JavaScript Single-Threaded?
 ========================================

 - JavaScript normally executes code on a single main thread.
 - It uses a single Call Stack for that thread.
 - Only one JavaScript task runs on that thread at a time.

 But how can JavaScript handle multiple operations?

 Answer: Asynchronous Programming + Event Loop!
*/


/*
 ========================================
  How the Event Loop Works
 ========================================

 1- JavaScript executes synchronous code on the Call Stack.

 2- Asynchronous operations can be handled by the runtime
    (Browser APIs, Node.js APIs, Operating System, etc.).

 3- When an asynchronous operation completes,
    its callback becomes ready to execute.

 4- The Event Loop allows callbacks to run
    when the Call Stack is available.

 Important:
 - The Event Loop does NOT make JavaScript multi-threaded.
 - JavaScript callbacks still execute one at a time
   on the main thread.
*/


// ========================================
// Example 2: Event Loop
// ========================================

function eventLoopExample() {
  console.log("Start");

  setTimeout(() => {
    console.log("Timer Finished");
  }, 2000);

  console.log("End");
}

// eventLoopExample();

/*
 Output:

 Start
 End
 Timer Finished

 Explanation:

 - "Start" executes first.
 - setTimeout schedules a timer.
 - JavaScript continues executing without waiting.
 - "End" executes.
 - After the timer finishes, its callback executes
   when the Call Stack is available.
*/


/*
 ========================================
  Concurrency vs Parallelism
 ========================================

 Concurrency:
 - Handling multiple tasks during overlapping periods.
 - Tasks can make progress without all running
   at the exact same moment.
 - Does not necessarily require multiple threads.

 Parallelism:
 - Executing multiple tasks at the exact same time.
 - Can be achieved using multiple CPU cores and threads.


 Example:

 Concurrency:
 One chef prepares food while waiting for another dish
 to finish cooking in the oven.

 Parallelism:
 Two chefs prepare two different dishes
 at the exact same time.


 JavaScript's Event Loop enables concurrency.

 Worker Threads can enable parallel JavaScript execution.
*/


/*
 ========================================
  Blocking the Event Loop
 ========================================

 - Synchronous code blocks the main thread until it finishes.
 - While the main thread is blocked, callbacks cannot execute.
 - CPU-intensive operations can cause performance problems.
*/


// ========================================
// Example 3: Blocking the Main Thread
// ========================================

function blockingExample() {
  console.log("Start");

  setTimeout(() => {
    console.log("Timer Finished");
  }, 0);

  // Heavy synchronous operation (3 seconds)
  const start = Date.now();

  while (Date.now() - start < 3000) {
    // Blocking the main thread
  }

  console.log("Heavy Task Finished");
}

// blockingExample();

/*
 Output:

 Start
 Heavy Task Finished
 Timer Finished

 Explanation:

 - The timer is scheduled with 0ms delay.
 - The while loop blocks the main thread for 3 seconds.
 - The timer callback cannot execute while the loop runs.
 - The callback executes after the synchronous code finishes.

 Important:
 setTimeout(fn, 0) does NOT mean immediate execution.
*/


/*
 ========================================
  Does Async/Await Create New Threads?
 ========================================

 NO!

 - async/await does not make JavaScript multi-threaded.
 - await pauses the execution of the async function.
 - It does NOT block the entire JavaScript thread
   while waiting for an asynchronous operation.
*/


// ========================================
// Example 4: Async/Await and Event Loop
// ========================================

async function asyncExample() {
  console.log("Task 1");

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  console.log("Task 2");
}

asyncExample();
console.log("Task 3");

/*
 Output:

 Task 1
 Task 3
 Task 2

 Explanation:

 - Task 1 executes immediately.
 - await suspends the async function.
 - JavaScript continues executing Task 3.
 - After the Promise resolves, Task 2 executes.

 Important:
 await does NOT block the main thread while waiting
 for this asynchronous timer.
*/


/*
 ========================================
  Summary
 ========================================

 Thread:
 - A path of execution within a process.

 Single-Threaded:
 - One thread executes instructions.

 Multi-Threaded:
 - Multiple threads can execute instructions.

 Concurrency:
 - Handling multiple tasks during overlapping periods.

 Parallelism:
 - Executing multiple tasks at the exact same time.

 Event Loop:
 - Coordinates the execution of asynchronous callbacks.

 JavaScript:
 - Normally executes on a single main thread.
 - Supports asynchronous concurrency.
 - Can use Worker Threads for parallel execution.

 Async/Await:
 - Makes asynchronous code easier to read.
 - Does not create additional threads.
*/


// ========================================
// Run Examples (One at a Time)
// ========================================

// task1();
// task2();

// eventLoopExample();

// blockingExample();

// asyncExample();
// console.log("Task 3");