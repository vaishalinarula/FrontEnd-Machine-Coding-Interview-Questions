// Base constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to Person's prototype
Person.prototype.greet = function() {
  return `Hello, my name is ${this.name}.`;
};

// Derived constructor
function Employee(name, age, jobTitle) {
  // Call the Person constructor with `this` binding
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Set up inheritance by linking prototypes
Employee.prototype = Object.create(Person.prototype);

// Set the constructor property back to Employee
Employee.prototype.constructor = Employee;

// Adding a method to Employee's prototype
Employee.prototype.describeJob = function() {
  return `${this.greet()} I work as a ${this.jobTitle}.`;
};

// Testing the inheritance
const emp = new Employee('Alice', 30, 'Software Engineer');
console.log(emp.greet()); // Output: "Hello, my name is Alice."
console.log(emp.describeJob()); // Output: "Hello, my name is Alice. I work as a Software Engineer."
