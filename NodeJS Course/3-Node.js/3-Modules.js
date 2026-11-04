// Modules

// In Node.js, every file is treated as a separate module.
// Modules help encapsulate code — meaning each file/module keeps its variables and functions private unless explicitly exported.
// You can export parts of a module and import them into other files using `require()` (in CommonJS module system).

// Why use Modules?
// - Helps organize and encapsulate code into reusable, manageable pieces.
// - Allows code sharing between files.

// Node.js uses the CommonJS module system to handle modules.
// It provides two main things:
// - `require()` → To import modules into other files.
// - `module.exports` → To export data (variables, functions, objects) from a module.

// Key Concepts:
// - `module` is an object containing info about the current module (like filename, path, exports).
// - `module.exports` defines what a module exposes to other files when imported.
// - When another file uses `require()` to import this module, it receives whatever was assigned to `module.exports`.
// - By default, if you don’t export anything, nothing is accessible from outside the module.
