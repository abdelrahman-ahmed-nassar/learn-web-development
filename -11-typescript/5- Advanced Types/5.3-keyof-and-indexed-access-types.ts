interface Colors {
  red: string;
  green: string;
  blue: string;
}

let colors: Colors = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
};

interface Square {
  kind: "square";
  sideLength: number;
  color: keyof Colors;
}

let square: Square = {
  kind: "square",
  sideLength: 5,
  color: "blue",
};

console.log(colors);
console.log(square);
