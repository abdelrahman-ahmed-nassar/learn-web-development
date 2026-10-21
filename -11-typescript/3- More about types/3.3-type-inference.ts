let count = 10;
let message = "Hello, TypeScript!";
let numbers = [1, 2, 3, 4, 5];
let name: string;

// name = 15;
name = "15";
// name = true;

const add = (a: number, b: number): number => {
  return a + b;
};

//----
// Contextual Typing
window.addEventListener("click", (event: MouseEvent) => {
  console.log(event.button);
});

//----

let names = ["Alice", "Bob", "Charlie"];

names.forEach((name: string) => {
  console.log(name.toUpperCase());
});
