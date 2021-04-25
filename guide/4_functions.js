// Function declarations
// Function expressions
// Recursion
// Closures
// arguments object
// Default parameters
// Rest parameters
// Arrow functions
// Predefined functions

/* ==================================================================== */
/*                        Function declarations                         */
/* ==================================================================== */
// declaration / definition / statement
// primitive parameters are passed to functions by value,
// non-primitive parameters are passed by reference

function square1(number) {
    return number * number;
}
const mySquare1 = square1(3);
// console.log(mySquare1); // 9

function myFunction(obj) {
    obj.brand = "Toyota";
}

const myCar = { brand: "Honda", year: 1992 };

// console.log(myCar.brand); // Honda
myFunction(myCar);
// console.log(myCar.brand); // Toyota

/* ==================================================================== */
/*                         Function expressions                         */
/* ==================================================================== */
// ---------------------------- anonymous --------------------------------
const square2 = function (number) {
    return number * number;
};

const mySquare2 = square2(4);
// console.log(mySquare2); // 16

// ------------------------------ named ----------------------------------
// Allows refering to itself
// Shown in stack traces
const factorial = function fac(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * fac(n - 1);
    }
};
//console.log(factorial(5)); // 120

// Function expressions are conveniet for passing as an argument to another func
function map(func, arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = func(arr[i]);
    }
    return result;
}
const myCuber = function (num) {
    return num * num * num;
};
const myNumbers = [2, 3, 4];
const myNumbersCubed = map(myCuber, myNumbers);
// console.log(myNumbers); // [2, 3, 4]
// console.log(myNumbersCubed); // [8, 27, 64]

// Function can be defined based on a condition
let conditionedFunction;
if (true) {
    conditionedFunction = function (x) {
        return x * 2;
    };
}
// console.log(conditionedFunction(5)); // 10

/* ==================================================================== */
/*                              Recursion                               */
/* ==================================================================== */
// Three ways for a function to refer to itself within the body
const myFunc = function func() {
    func();
    arguments.callee();
    myFunc();
};

// myFunc(); // Uncaught RangeError: Maximum call stack size exceeded

// It is possible to convert any recursive algorithm to a non-recursive,
//    but usually the logic is more complex
function myLooper1(inc) {
    while (inc <= 10) {
        console.log(inc);
        inc++;
    }
}
function myLooper2(inc) {
    if (inc > 10) {
        return;
    }
    console.log(inc);
    myLooper2(inc + 1);
}
// myLooper1(0); // 1, 2, 3 ... 10
// myLooper2(0); // 1, 2, 3 ... 10

// Getting all the nodes of a dom body tree with recursion:
function walkTree(node) {
    if (node == null) {
        return;
    }
    console.log(node);
    for (let i = 0; i < node.childNodes.length; i++) {
        walkTree(node.childNodes[i]);
    }
}
const myDOM = document.body;
// walkTree(myDOM); // <body>...<body>, #text, <h1>JS<h1>, "JS", #text, <script>

/* ==================================================================== */
/*                               Closures                               */
/* ==================================================================== */
// example
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
// console.log(addSquares(2, 3)); // 13
// console.log(addSquares(3, 4)); // 25

// example
function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}

const fnInside = outside(3);
const result1 = fnInside(4);
// console.log(result1); // 7;
const result2 = outside(3)(4);
// console.log(result2); // 7

// example
const myPet = function (name) {
    const getName = function () {
        return name;
    };
    return getName;
};
const myLittlePet = myPet("Johnny");
// console.log(myLittlePet()); // Johnny
// console.log(myPet("Jerry")()); // Jerry

// example with objects
const createPet = function (name) {
    let sex;

    return {
        setName: function (newName) {
            name = newName;
        },
        getName: function () {
            return name;
        },
        getSex: function () {
            return sex;
        },
        setSex: function (newSex) {
            sex = newSex;
        },
    };
};
const myBigPet = createPet("Miki");
// console.log(myBigPet.getName()); // Miki
myBigPet.setName("Oliver");
myBigPet.setSex("Male");
// console.log(myBigPet.getName()); // Oliver
// console.log(myBigPet.getSex()); // Male

// example
const getCode = (function () {
    const apiCode = "my-api-code";
    return function () {
        return apiCode;
    };
})();
//console.log(getCode()); // my-api-code

/* ==================================================================== */
/*                         arguments object                             */
/* ==================================================================== */
// array-like object, address it with arguments[i] within a function
// convert it to array with Array.from(arguments) or [...arguments]
// arguments.length - number of arguments passed
// argumnets.callee - reference to the currently executing function
function myConcat(separator) {
    let result = "";
    for (let i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result;
}
function myConcat2(separator) {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
}

// console.log(myConcat("-", "red", "green", "blue")); // red-green-blue-
const myArr = ["dog", "cat", "mouse"];
// console.log(myConcat(",", ...myArr)); // dog,cat,mouse,
// console.log(myConcat2(":", "kit", "kat", "pat")); // kit:kat:pat

// Updating arguments[0] also updates a, and vice versa
function myFunc3(a) {
    arguments[0] = 99;
    console.log(a);
}
function myFunc4(a) {
    a = 88;
    console.log(arguments[0]);
}
// myFunc3(100); // 99
// myFunc4(90); // 88

/* ==================================================================== */
/*                        Default parameters                            */
/* ==================================================================== */
// pre-ES6 - checking for undefined
function multiply(a, b) {
    if (typeof b === "undefined") {
        b = 1;
    }
    return a * b;
}
// console.log(multiply(5)); // 5
// console.log(multiply(4, 3)); // 12

// with ES6 - using default parameters
function multiplyDef(a, b = 1) {
    return a * b;
}
// console.log(multiplyDef(5)); // 5
// console.log(multiplyDef(5, undefined)); // 5
// console.log(multiplyDef(4, 3)); // 12

/* ==================================================================== */
/*                           Rest parameters                            */
/* ==================================================================== */
// allows a function to accept an indefinite number of args as an array
// function can have only one ... rest param, only the last param can be rest
function myFunc5(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}
// myFunc5("one", "two", "three", "four", "five");
// a one
// b two
// manyMoreArgs (3) ["three", "four", "five"]
// if only three args were provided last would be - manyMoreArgs ["three"]
// if only two args were provided last would be - manyMoreArgs []

/* ==================================================================== */
/*                           Arrow functions                            */
/* ==================================================================== */
// shorter syntax for function expressions, does not have its own
//    this, arguments, super, new.target
// call, apply, bind are not suitable for AF
// AF do not have their own arguments object
// AF cannot be used as constructors, will throw an error when used with new
// AF do not have a prototype property
// AF establish "this" based on the scope the AF is definded within
// always anonymous
const myFunc6 = function (s) {
    return s * 2;
};
const myFunc7 = (s) => s * 2;

// console.log(myFunc6(4)); // 8
// console.log(myFunc7(4)); // 8

function Man1() {
    this.age = 0;
    setInterval(function growUp() {
        console.log(this); // Window {}
        this.age++;
    }, 1000);
}
// const man1 = new Man1();

function Man2() {
    const self = this;
    self.age = 0;
    setInterval(function growUp() {
        console.log(self); // Man2 {}
        self.age++;
    }, 1000);
}
// const man2 = new Man2();

function Man3() {
    this.age = 0;
    setInterval(() => {
        console.log(this); // Man3 {}
        this.age++;
    }, 1000);
}
// const man3 = new Man3();

// when returning object literal, object must be wrapped with ()
const myFunc8 = () => ({ foo: 1, bar: 2 });

/* ==================================================================== */
/*                        Predefined functions                          */
/* ==================================================================== */
// top-level, built-in functions:

// ---------------------------- isFinite() -------------------------------
// Determines whether a value is not infinite
// console.log(1 / 0); // Infinity
// console.log(isFinite(1 / 0)); // false

// ------------------------------ isNaN() --------------------------------
// Determines whether a value is NaN or not
// console.log(isNaN(NaN)); // true
// console.log(isNaN(0 / 0)); // true
// console.log(isNaN("NaN")); // true
// console.log(isNaN("Nonvalidnumber")); // true
// console.log(isNaN({})); // true

// console.log(isNaN("47")); // false
// console.log(isNaN("")); // false

// alternatively use Number.isNaN()
// console.log(Number.isNaN(NaN)); // true
// console.log(Number.isNaN(Number.NaN)); // true
// console.log(Number.isNaN(0 / 0)); // true

// console.log(Number.isNaN("NaN")); // false
// console.log(Number.isNaN("Nonvalidnumber")); // false
// console.log(Number.isNaN({})); // false
// console.log(Number.isNaN("47")); // false
// console.log(Number.isNaN("")); // false

// --------------------------- parseFloat() -------------------------------
// Parses a string argument and returns a floating point nuber
// these are all 3.14
// console.log(parseFloat(3.14));
// console.log(parseFloat("3.14"));
// console.log(parseFloat("314e-2"));
// console.log(parseFloat("0.0314E+2"));
// console.log(parseFloat("3.14some non-digit characters"));

// console.log(parseFloat("somecahrs32")); // NaN

// ---------------------------- parseInt() --------------------------------
// Parses a string argument and returns an integer of the specified base
// console.log(parseInt("12")); // 12
// console.log(parseInt("23.55")); // 23
// console.log(parseInt("023.55")); // 23
// console.log(parseInt("0xF", 16)); // 15
// console.log(parseInt("1111", 2)); // 15

// console.log(parseInt("Hello")); // NaN
// console.log(parseInt("348", 2)); // NaN

// decodeURI()
// encodeURI()
// decodeURIComponent()
// encodeURIComponent()
// escape()
// unescape()
