// Class-based vs. prototype-based languages
// Simple constructors
// More flexible constructors
// Determining instance relationships
// Multiple inheritance illusion

/* ==================================================================== */
/*          Class-based vs. prototype-based languages                   */
/* ==================================================================== */

//                 Class-based (Java)              Prototype-based(JS)

// Class vs        Class and instance are          All objects can inherit
// instance        distinct entities.              from another object.

// Definition      Define a class with class       Define and create a set
//                 definition; instantiate         of objects with
//                 a class with                    constructor functions.
//                 constructor methods:

// Creation of     Create a single object          Same.
// new objects     with the new operator.

// Construction    By defining subclasses          By assigning an object
//  of object      of existing classes.            as the prototype associated
//  hierarchy                                      with a constructor function.

// Inheritance     Inherit properties by           Inherit properties by following
//   model         following the class chain.      the prototype chain.

// Extension       Class definition specifies      Constructor function or prototype
//     of          ALL properties of all           specifies an INITIAL set of props.
// properties      instances of class. Cannot      Props can be added or removed at
//                 add props at run time.          run time to indivudual objects or
//                                                 to the entire set of objects.

/* ==================================================================== */
/*                          Simple constructors                         */
/* ==================================================================== */
//                   Employee
//                       |
//                    /     \
//              Manager     Worker
//                             |
//                         /      \
//                     Sales     Engineer
//                    Person

function Employee() {
    this.name = "";
    this.dept = "general";
}

function Manager() {
    Employee.call(this);
    this.reports = [];
}

function Worker() {
    Employee.call(this);
    this.projects = [];
}

function SalesPerson() {
    Worker.call(this);
    this.dept = "sales";
    this.quota = 100;
}

function Engineer() {
    Worker.call(this);
    this.dept = "engineering";
    this.machine = "";
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Worker.prototype = Object.create(Employee.prototype);
Worker.prototype.constructor = Worker;

SalesPerson.prototype = Object.create(Worker.prototype);
SalesPerson.prototype.constructor = SalesPerson;

Engineer.prototype = Object.create(Worker.prototype);
Engineer.prototype.constructor = Engineer;

const emp1 = new Employee();
const man1 = new Manager();
const work1 = new Worker();
const sales1 = new SalesPerson();
const eng1 = new Engineer();
const eng2 = new Engineer();

// The property values are default ones shared by all new objects
// You can change the values of any of these properties like:
eng1.machine = "Chainsaw";
// and add new ones
eng1.bonus = 140;

// If you add property to an object that is used as the prototype for
//    a constructor function, you add property to all descendant objects
// It is burried deep in prototype chain
Employee.prototype.specialty = "none";

// Engineers override that property, it is found two levels closer
//    while an old value is still burried deep in prototype
Engineer.prototype.specialty = "coder";

// console.log(emp1);
// console.log(man1);
// console.log(work1);
// console.log(sales1);
// console.log(eng1); // Engineer {..., machine: "Chainsaw", bonus: 140}
// console.log(eng2); // Engineer {..., machine: ""}
// console.log(sales1.specialty); // none
// console.log(eng2.specialty); // coder

/* ==================================================================== */
/*                     More flexible constructors                       */
/* ==================================================================== */
//                   EmployeeFC
//                       |
//                    /     \
//             ManagerFC   WorkerFC
//                            |
//                        /      \
//                    Sales    EngineerFC
//                   PersonFC

function EmployeeFC(name, dept) {
    this.name = name || "";
    this.dept = dept || "general";
}

function WorkerFC(name, dept, projects) {
    EmployeeFC.call(this, name, dept);
    this.projects = projects || [];
}

function EngineerFC(name, dept, projects, machine) {
    WorkerFC.call(this, name, dept, projects);
    this.dept = "engineering";
    this.machine = machine || "";
}

WorkerFC.prototype = new EmployeeFC();
EngineerFC.prototype = new WorkerFC();
WorkerFC.prototype.constructor = WorkerFC;
EngineerFC.prototype.constructor = EngineerFC;

const eng3 = new EngineerFC("Jane", "Backend", "ProjectA", "PC");
// console.log(eng3);

/* ==================================================================== */
/*                Determining instance relationships                    */
/* ==================================================================== */
// Property lookup in JS looks within an object's own properties and if
//   property is not found, it looks within object's __proto__ property.
//     this continues recursively up the prototype chain

// Every object has a __proto__ object property
// Every function has a prototype object property
// Inheritance can be tested by comparing an object's proto
//    to a function's prototype - instanceof operator is a shortcut

const eng4 = new EngineerFC("Pigman", "sales", ["proj1, proj2"], "printer");
// console.log(eng4); // EngineerFC {name, dept, projects, machine}

// console.log(eng4.__proto__ === EngineerFC.prototype); // true
// console.log(eng4.__proto__.__proto__ === WorkerFC.prototype); // true
// console.log(eng4.__proto__.__proto__.__proto__ === EmployeeFC.prototype); // true
// console.log(eng4.__proto__.__proto__.__proto__.__proto__ === Object.prototype); // true
// console.log(eng4.__proto__.__proto__.__proto__.__proto__.__proto__ === null); // true

// console.log(eng4 instanceof EngineerFC); // true
// console.log(eng4 instanceof WorkerFC); // true
// console.log(eng4 instanceof EmployeeFC); // true
// console.log(eng4 instanceof Object); // true

// custom instanceOf function
function instanceOf(object, constructor) {
    object = object.__proto__;
    while (object != null) {
        if (object == constructor.prototype) {
            return true;
        }
        object = object.__proto__;
    }
    return false;
}

// console.log(instanceOf(eng4, EmployeeFC)); // true

/* ==================================================================== */
/*                   Multiple inheritance illusion                      */
/* ==================================================================== */
// A constructor function can call more than one other constructor function
// This gives the illusion of multiple inheritance

function Hobbylist(hobby) {
    this.hobby = hobby;
}

function Person(name) {
    this.name = name || "";
}

function Doctor(name, skill, hobby) {
    Person.call(this, name);
    Hobbylist.call(this, hobby);
    this.skill = skill || "";
}

// But only one prototype reference is posible
Doctor.prototype = new Person();

// Although instance will have all those properties
const doctorWilly = new Doctor("Willy", "Eye removing", "Dancing");
// console.log(doctorWilly); // {name, hobby, skill}

// If you add property to a prototype of constructor that is not referenced
Hobbylist.prototype.equipment = "Mask";

// instance will not inherit this new property
// console.log(doctorWilly.equipment); // undefined
