// Asynchronous vs Synchronous Programming

// What is Synchronous?
// - Code runs line by line, in order.
// - Each operation waits for the previous one to finish before moving on.
// - If one operation takes long (like reading a large file or calling an API), it blocks the rest of the code.

// What is Asynchronous?
// - Code can start a long-running task and move on without waiting for it to finish.
// - Other operations continue running (non-blocking).
// - When the long task completes, it notifies the program (via callbacks, promises, or async/await).
// - Perfect for web servers, file systems, and database operations.

// Common Async Operations:
// - API requests
// - Reading/Writing files
// - Database queries
// - Timers (setTimeout, setInterval)
// - Events (Event Listeners)
