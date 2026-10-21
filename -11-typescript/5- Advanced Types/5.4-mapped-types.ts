type Todo = {
  title: string;
  description: string;
};

type ReadonlyTodo = Readonly<Todo>;

// custom mapped type
type Optinal<T> = { [P in keyof T]?: T[P] };

let todo: Todo = {
  title: "Learn TypeScript",
  description: "Understand advanced types",
};

todo.description = "xyz";
todo["title"];
