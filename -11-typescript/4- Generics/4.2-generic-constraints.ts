type HasLength = {
  length: number;
};
function identity<T extends HasLength>(arg: T): number {
  return arg.length;
}

let output1 = identity("Hello, Generics!");
let output2 = identity([1, 2, 5]);
// let output2 = identity<number>(1);
// let output3 = identity<boolean>(true);

console.log(output1); // Output: Hello, Generics!
