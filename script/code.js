let myVar = "Hello, world!";
console.log(typeof myVar);  // "string"

myVar = 42;
console.log(typeof myVar);  // "number"

// String
let str = "This is a string";
console.log(typeof str);  // "string"

// Number
let num = 100;
console.log(typeof num);  // "number"

// Boolean
let bool = true;
console.log(typeof bool);  // "boolean"

// Null
let nullVar = null;
console.log(typeof nullVar);  // "object" (this is a known quirk in JavaScript)

// Undefined
let undef;
console.log(typeof undef);  // "undefined"

// Symbol
let sym = Symbol("sym");
console.log(typeof sym);  // "symbol"

// BigInt
let bigIntVar = 1234567890123456789012345678901234567890n;
console.log(typeof bigIntVar);  // "bigint"

// Object
let obj = { name: "John", age: 30 };
console.log(typeof obj);  // "object"

// Array (which is technically an object)
let arr = [1, 2, 3];
console.log(typeof arr);  // "object"

// Function
let func = function() { return "I'm a function"; };
console.log(typeof func);  // "function"
