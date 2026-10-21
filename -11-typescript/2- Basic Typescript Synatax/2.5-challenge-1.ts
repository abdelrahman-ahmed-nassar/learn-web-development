// calculator.js

function calculate(operation: "add" | "subtract" | "multiply" | "divide", ...nums: number[]): number | string {
  if (nums.length < 2) {
    return "Error: At least two numbers are required";
  }

  if (operation === "add") {
    return nums.reduce((acc, num) => acc + num);
  } else if (operation === "subtract") {
    return nums.reduce((acc, num) => acc - num);
  } else if (operation === "multiply") {
    return nums.reduce((acc, num) => acc * num);
  } else if (operation === "divide") {
    return nums.reduce((acc, num) => {
      if (num === 0) {
        throw new Error("Error: Division by zero");
      }
      return acc / num;
    });
  } else {
    return "Error: Invalid operation";
  }
}

console.log(calculate("add", 5, 3, 2)); // 10
console.log(calculate("subtract", 10, 4, 4)); // 2
console.log(calculate("multiply", 2, 2, 5)); // 20
console.log(calculate("divide", 15, 3, 5)); // 1
// console.log(calculate("divide", 15, 0)); // Error: Division by zero
// console.log(calculate("modulus", 10, 2)); // Error: Invalid operation
