// Data Types Examples

// Number
let numberVar = 10;
document.getElementById("number-result").innerHTML = `Number: ${numberVar} (Type: ${typeof numberVar})`;

// String
let stringVar = "Hello, World!";
document.getElementById("string-result").innerHTML = `String: "${stringVar}" (Type: ${typeof stringVar})`;

// Boolean
let booleanVar = true;
document.getElementById("boolean-result").innerHTML = `Boolean: ${booleanVar} (Type: ${typeof booleanVar})`;

// Object
let objectVar = { name: "John", age: 30 };
document.getElementById("object-result").innerHTML = `Object: ${JSON.stringify(objectVar)} (Type: ${typeof objectVar})`;

// Undefined
let undefinedVar;
document.getElementById("undefined-result").innerHTML = `Undefined: ${undefinedVar} (Type: ${typeof undefinedVar})`;

// Null
let nullVar = null;
document.getElementById("null-result").innerHTML = `Null: ${nullVar} (Type: ${typeof nullVar})`;

// Operations and Statements

// Arithmetic Operation
// Define variables
let a = 8;
let b = 4;

// Addition
let sum = a + b;
document.getElementById("addition").innerHTML = `The sum of ${a} and ${b} is : ${sum}.`;

// Subtraction
let difference = a - b;
document.getElementById("subtraction").innerHTML = `The difference between ${a} and ${b} is ${difference}.`;

// Multiplication
let product = a * b;
document.getElementById("multiplication").innerHTML = `The product of ${a} and ${b} is ${product}.`;

// Division
let quotient = a / b;
document.getElementById("division").innerHTML = `The division of ${a} by ${b} gives ${quotient}.`;

// Conditional Statement (If-Else)
let age = 25;
let conditionResult = (age >= 18) ? "Adult" : "Minor";
document.getElementById("condition-result").innerHTML = `Conditional Statement: Age ${age} is considered a(n) ${conditionResult}.`;

// Loop Example (For Loop)
let loopResult = "";
for (let i = 1; i <= 5; i++) {
    loopResult += `Loop Iteration: ${i} <br>`;
}
document.getElementById("loop-result").innerHTML = `Loop Result:<br>${loopResult}`;

// Function Example
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript!`;
}
let greetingMessage = greetUser("Alice");
document.getElementById("loop-result").innerHTML += `<br>Function Output: ${greetingMessage}`;


