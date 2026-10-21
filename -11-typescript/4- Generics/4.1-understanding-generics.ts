function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hello, Generics!");
let output2 = identity<number>(1);
let output3 = identity<boolean>(true);

console.log(output1); // Output: Hello, Generics!
