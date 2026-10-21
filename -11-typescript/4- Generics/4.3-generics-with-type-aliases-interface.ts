// type Identity<T> = (arg: T) => T;
interface Identity<T> {
  (arg: T): T;
}

const identity: Identity<string> = function (arg) {
  return arg;
};

let output1 = identity("Hello, Generics!");
// let output2 = identity<number>(1); // Expected 0 type arguments, but got 1.ts(2558)
// let output3 = identity<boolean>(true); // Expected 0 type arguments, but got 1.ts(2558)

console.log(output1); // Output: Hello, Generics!

type Pair<Key, Value> = {
  key: Key;
  value: Value;
};

let numberStringPair: Pair<number, string> = { key: 1, value: "one" };
let stringBooleanPair: Pair<string, boolean> = { key: "isActive", value: true };
