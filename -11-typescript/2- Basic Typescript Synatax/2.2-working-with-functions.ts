// we define type for parameters and for return type
function add(a: number, b: number): number {
  return a + b;
}

// sum will auto get type via the inference
let sum = add(1, 3);

// -- other types of functions

// function expression
const subtract = function (a: number, b: number): number {
  return a - b;
};

// Arrow function
const multiply = (a: number, b: number): number => {
  return a * b;
};

// optional parameters
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting} ${name}`;
  } else {
    return `Hello ${name}`;
  }
}

// default parameters
function greetWithDefault(name: string, greeting: string = "Hello"): string {
  return `${greeting} ${name}`;
}

// rest parameters
function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

// function overloading
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

// function with void return type
function logMessage(message: string): void {
  console.log(message);
}

// function with never return type
// Never type
/* Use never for functions that cannot return normally:
  - Functions that always throw an error.
  - Functions with infinite Loops.
*/
function throwError(message: string): never {
  throw new Error(message);
}

// function with generic type
function identity<T>(arg: T): T {
  return arg;
}

// using the generic function
let output1 = identity<string>("Hello");
let output2 = identity<number>(42);

// function with generic type and constraints
function loggingIdentity<T extends { length: number }>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// using the generic function with constraints
let output3 = loggingIdentity("Hello");
let output4 = loggingIdentity([1, 2, 3]);
