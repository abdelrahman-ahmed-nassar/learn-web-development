// making classes inheritance
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;

  // NOW we have duplicate code and the two classes are not connected and if we change one the other won't change

  Person.call(this, firstName, birthYear);
  this.course = course;
};

// linking the two classes
// we Are linking (inherit) the prototype of the person
Student.prototype = Object.create(Person.prototype);
// NOTICE must be linked before adding properties or methods

//! we don't do this
// Student.prototype = Person.prototype;
// this will make the student prototype IS the person prototype and the student object prototype will be the person prototype and not the student prototype
const mike = new Student("Mike", 1984, "Computer Science");

// after that  we can make specific changes to the student prototype (polymorphism)

Student.prototype.introduce = function () {
  console.log(`my name is ${this.firstName} and I study ${this.course}`);
};
mike.introduce();
// the result will be => my name is Mike and I study Computer Science


console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true if he get anything from the person prototype 

// fix the constructor problem (Student.prototype.constructor == Person !!!!)
// happen on Object.create
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
