// Objects and properties
// Enumerating properties of an object
// Creating new objects
// Indexing object properties
// Defining properties for an object type
// Defining methods
// Defining getters and setters
// Deleting properties
// Comparing objects

/* ==================================================================== */
/*                      Objects and properties                          */
/* ==================================================================== */
// Creating object instance and asigning properties with values
const myCar1 = new Object();
myCar1.brand = "Ford";
myCar1.model = "Mustang";
myCar1.year = 1994;

// console.log(myCar1); // {brand: "Ford", model: "Mustang", ...}
// console.log(myCar1.year); // 1994

// Creating object by using object initializer
const myCar2 = {
    brand: "Opel",
    model: "Vectra",
    year: 1998,
};

// console.log(myCar2); // {brand: "Opel", model: "Vectra", ...}
// console.log(myCar2.year); // 1998

// Dinamically determined properties
const myObj1 = new Object();
const str1 = "myString";
const rand1 = Math.random();
const obj1 = new Object();
const obj2 = new Object();

myObj1.type = "Dot syntax asigning";
myObj1["date created"] = "String with space";
myObj1[str1] = "String property";
myObj1[rand1] = "Random number property";
myObj1[obj1] = "Object property 1";
myObj1[obj2] = "Object property 2";
myObj1[""] = "Value of empty string property";

// console.log(myObj1);
// console.log(myObj1["myString"]);
// console.log(myObj1["[object Object]"]); // Object property 2

/* ==================================================================== */
/*               Enumerating properties of an object                    */
/* ==================================================================== */
const myObj2 = {
    name: "Jon",
    age: 22,
    array: [
        ["ski", "dive"],
        ["run", "walk"],
    ],
    ob: {
        prop1: "Value1",
        prop2: "Value2",
    },
};
function showProps(obj) {
    let result = [];
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            result.push(i);
        }
    }
    return result;
}
function showPropsWithValues(obj) {
    let result = [];
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            result.push(`${i}: ${obj[i]}`);
        }
    }
    return result;
}

function listAllProperties(obj) {
    let obToInspect;
    let result = [];
    for (obToInspect = obj; obToInspect !== null; obToInspect = Object.getPrototypeOf(obToInspect)) {
        result = result.concat(Object.getOwnPropertyNames(obToInspect));
    }
    return result;
}

// object
// console.log(myObj2);

// -------------- Show all properties of an object --------------
// array with all own (not in prototype chain) enumerable property names
// console.log(Object.keys(myObj2)); // (4) ["name", "age", "array", "ob"]

// array with all own (not in prototype chain) property names (enumerable or not)
// console.log(Object.getOwnPropertyNames(myObj2)); // (4) ["name", "age", "array", "ob"]

// array with all enumerable properties and its prototype chain
// console.log(showProps(myObj2)); // (4) ["name", "age", "array", "ob"]
// console.log(showPropsWithValues(myObj2)); // (4) ["name: Jon", "age: 22", ...]

// array with all properties (with properties in prototype chain)
// console.log(listAllProperties(myObj2)); // (16) ["name" , "age", ... , "constructor", "toString", ...]

/* ==================================================================== */
/*                      Creating new objects                            */
/* ==================================================================== */
// -------------------- Using an object initializer ----------------------
const myObj3 = {
    name: "Jerry",
    22: "Some value",
    "Some prop": false,
    engine: {
        cylinders: 4,
        size: 2.2,
    },
};

// console.log(myObj3); // {22: "Some value", name: "Jerry", ...}

// ------------------ Using a constructor function -----------------------
// 1. Define object type by constructor function (use capital letter)
// 2. Create an instance of the object with new
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

const myHondaAccord = new Car("Honda", "Accord", 1992);
const myOpelVectra = new Car("Opel", "Vectra", 2000);
// console.log(myHondaCar); // Car {brand: "Honda", model: "Accord", year: 1992}
// console.log(myOpelVectra);

// An object can have a property that is itself another object
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

function Tractor(brand, year, owner) {
    this.brand = brand;
    this.year = year;
    this.owner = owner;
}

const misterJohn = new Person("John", 59, "M");
const missDaisy = new Person("Daisy", 53, "F");

const ferbuson = new Tractor("Ferbuson", 1989, misterJohn);
const zetor = new Tractor("Zetor", 1983, missDaisy);

// console.log(ferbuson); // Tractor {brand: "Ferbuson", year: 1989, owner: Person}
// console.log(zetor.owner.name); // Daisy

// Add to zetor owner a custom property - only to missDaisy, not misterJohn
zetor.owner.hungry = true;
// console.log(missDaisy); // Person { ... , hungry: true}

// --------------------- Using the Object.create method ------------------
// allows to choose the prototype object for the object that is to be created
// without having to define a constructor function

const Animal = {
    type: "Cat",
    displayType: function () {
        return this.type;
    },
};

const tiger = Object.create(Animal);
// console.log(tiger.displayType()); // Cat

const lion = Object.create(Animal);
lion.type = "Long Hair Cat";
// console.log(lion.displayType()); // Long Hair Cat

/* ==================================================================== */
/*                   Indexing object properties                         */
/* ==================================================================== */
// if you initially define a property by its name, you must always refer to it by its name
// if you initially define a property by an index, you must always refer to it by its index
// -> this restriction applies wne you create an object with its constructor function
//    and when you deifne individual properties explicitly
const bradpitt = new Person("Brad", 51, "M");
bradpitt.oscars = 2;
bradpitt[5] = "Some value";
// console.log(bradpitt.oscars); // 2
// console.log(bradpitt[5]); // Some value

// exception is array-like object reflected from HTML - such as forms
// -> you can refer to them by ordinal number (based on where they appear in the dom)
//    or their name if defined
// example:
//   second <form> tag in a dom has a NAME attribute of "myForm", you can refer to it:
//   - document.forms[1]
//   - document.forms["myForm"]
//   - document.forms.myForm

/* ==================================================================== */
/*              Defining properties for an object type                  */
/* ==================================================================== */
// properties can be added to previously defined object type by using prototype property
// this defines a property that is shared by all objects of that type
function Truck(model, year) {
    this.model = model;
    this.year = year;
}

const niceWheeler = new Truck("Wheeler", 1959);
Truck.prototype.color = "Gray";

// console.log(niceWheeler.color); // Gray

/* ==================================================================== */
/*                          Defining methods                            */
/* ==================================================================== */
// method is a function associated with an object, or sinonimly
// method is a property of an object that is a function

// ----------------------- One way of defining method --------------------
const myObj4 = {
    param1: 2,
    param2: 3,
    myMethodOne: function (p1, p2) {
        return p1 * this.param1 + p2 * this.param2;
    },
    myMethodTwo: function (p1, p2) {
        return p1 * this.param1 * p2 * this.param2;
    },
};

// console.log(myObj4.myMethodOne(1, 2)); // 8
// console.log(myObj4.myMethodTwo(1, 2)); // 12

// ---------------------- Shorthand of previus example -------------------
const myObj5 = {
    param1: 2,
    param2: 3,
    myMethodOne(p1, p2) {
        return p1 * this.param1 + p2 * this.param2;
    },
    myMethodTwo(p1, p2) {
        return p1 * this.param1 * p2 * this.param2;
    },
};

// console.log(myObj5.myMethodOne(1, 2));
// console.log(myObj5.myMethodTwo(1, 2));

// ---------- Including a method definiton in object constructor ---------
function Priest(name, age) {
    this.name = name;
    this.age = age;
    this.sayAleluja = function sayAleluja() {
        return "Aleluja, I am " + this.name;
    };
}

const danny = new Priest("Danny", 53);
const niki = new Priest("Niki", 38);
// console.log(danny.sayAleluja()); // Aleluja, I am Danny
// console.log(niki.sayAleluja()); // Aleluja, I am Niki

// ------------ Attaching method to previously defined objects -----------
const Manager = {
    name: "Jimy",
    age: 28,
};

const Janitor = {
    name: "Grundhog",
    age: 63,
};

function sayHello() {
    return "Hello, my name is " + this.name;
}

Manager.sayHello = sayHello;
Janitor.sayHello = sayHello;

// console.log(Manager.sayHello()); // Hello, my name is Jimy
// console.log(Janitor.sayHello()); // Hello, my name is Grundhog

/* ==================================================================== */
/*                 Defining getters and setters                         */
/* ==================================================================== */
// can be defined on any predefined core object or user-defined object

// - using object initializers
const myObj6 = {
    a: 8,
    get b() {
        return this.a + 2;
    },
    set c(x) {
        this.a = x + 3;
    },
};
// console.log(myObj6.a); // 8
// console.log(myObj6.b); // 10
myObj6.c = 40;
// console.log(myObj6.a); // 43
// console.log(myObj6.b); // 45

// - added later to any object with Object.defineProperties method
const myObj7 = {
    a: 8,
};

Object.defineProperties(myObj7, {
    b: {
        get: function () {
            return this.a + 2;
        },
    },
    c: {
        set: function (x) {
            this.a = x + 3;
        },
    },
});

// console.log(myObj7.a); // 8
// console.log(myObj7.b); // 10
myObj7.c = 40;
// console.log(myObj7.a); // 43
// console.log(myObj7.b); // 45

/* ==================================================================== */
/*                        Deleting properties                           */
/* ==================================================================== */
// using delete operator
const myObj8 = {
    a: 12,
    b: 15,
};

delete myObj8.a;
// console.log(myObj8); // {b:15}

/* ==================================================================== */
/*                           Comparing objects                          */
/* ==================================================================== */
// objects are reference type, two distinct objects are never equal

// two variables, two distinct objects with the same properties
const fruit = { name: "apple" };
const fruitbear = { name: "apple" };

// console.log(fruit == fruitbear); // false
// console.log(fruit === fruitbear); // false

// two variables, a single object
const mouse = { name: "Miki" };
const mousefina = mouse;

// console.log(mouse == mousefina); // true
// console.log(mouse === mousefina); // true
