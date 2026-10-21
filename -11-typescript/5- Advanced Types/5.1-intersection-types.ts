// UNION
let mixedArray: (number | string)[] = [1, "2", 3, 4, 5];

// Intersection
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type StaffMember = Person & Employee;

let staff: StaffMember = { name: "Mohamed", employeeId: 1 };
