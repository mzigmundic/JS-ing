// if...else statement
// switch statement
// Falsy values
// throw statement
// try...catch statement
// Utilizing Error objects
// Nested try-blocks

/* ==================================================================== */
/*                         if...else statement                          */
/* ==================================================================== */
let x = 5;
if (x < 5) {
    // console.log("X is smaller than 5");
} else if (x < 10) {
    // console.log("X is not smaller than 5 but also it is smaller than 10");
} else {
    // console.log("X is not smaller than 10");
}

/* ==================================================================== */
/*                           switch statement                           */
/* ==================================================================== */
let fruit = "Apple";
switch (fruit) {
    case "Orange":
        console.log("Color orange");
        break;
    case "Cherry":
        console.log("Color red");
        break;
    case "Apple":
    // console.log("Apple is green");
    case "Pear":
        // console.log("Pear is green");
        break;
    case "Lemon":
        console.log("Lemon is yellow");
        break;
    default:
        console.log("No such fruit");
}
// Will console log Apple is green, Pear is green

/* ==================================================================== */
/*                             Falsy values                             */
/* ==================================================================== */
// Values that evaluate to false:
//   false
//   undefined
//   null
//   0
//   NaN
//   "" - empty string

// but Boolean object is not falsy
const bool1 = new Boolean(false);
if (bool1) {
    // console.log("bool1"); // this is logged
}
if (bool1 == false) {
    // console.log("bool1 == false"); // this is logged
}
if (bool1 === false) {
    console.log("bool1 === false"); // not
}
if (bool1 == true) {
    console.log("bool1 == true"); // not
}

/* ==================================================================== */
/*                           throw statement                            */
/* ==================================================================== */
// Throws an exception

// throw "String error"; // Uncaught String error
// throw 25; // Uncaught 25
// throw true; // Uncaught true
// throw {
//     toString: function () {
//         return "Iam an object";
//     },
// }; // Uncaught {toString: f}

function MyException(message) {
    this.message = message;
    this.name = "MyException";
}
MyException.prototype.toString = function () {
    return `${this.name}: ${this.message}`;
};
// throw new MyException("My exception message");
// Uncaught MyException {message: "My exception message", name: "MyException"}

/* ==================================================================== */
/*                        try...catch statement                         */
/* ==================================================================== */
// consists of a try block, which contains one or more statements, and a
//    catch block, with statements to execute if exception is thrown in the try block
// if any statement in try block throws exception, control immediately shifts to catch block
// if no exception is thrown in the try block, the catch block is skipped
function divide(x) {
    if (x === 0) {
        throw "Cannot divide by zero";
    }
    return 1 / x;
}
function tryCatch() {
    let result;
    try {
        result = divide(0);
    } catch (e) {
        console.error(e);
    }
    if (result) {
        console.log(result);
    }
}
// tryCatch(); // Cannot divide by zero

// the finally block executes after the try and catch blocks execute, no matter how
function tryCatchFinally() {
    try {
        result = divide(0);
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Do this anyway");
    }
}
// tryCatchFinally(); // Cannot divide by zero, Do this anyway

/* ==================================================================== */
/*                       Utilizing Error objects                        */
/* ==================================================================== */
// Error types:
//    Error
//    EvalError
//    RangeError
//    ReferenceError
//    SyntaxError
//    TypeError
//    URIError
//    AggregateError

function doSomethingErrorProne() {
    let mistakeInCode = true;
    if (mistakeInCode) {
        throw new Error("Error message");
    }
    console.log("No error");
}

function utilizingErrorObjects() {
    try {
        doSomethingErrorProne();
    } catch (e) {
        console.error(e.name);
        console.error(e.message);
    }
}
// utilizingErrorObjects(); // Error, Error message

/* ==================================================================== */
/*                           Nested try-blocks                          */
/* ==================================================================== */
// example
function nestedTry1() {
    try {
        try {
            throw new Error("OOpps");
        } finally {
            console.log("Finally called");
        }
    } catch (e) {
        console.error("outer", e.message);
    }
}
// nestedTry1(); // Finally called, outer OOpps

// example
function nestedTry2() {
    try {
        try {
            throw new Error("Opps");
        } catch (e) {
            console.log("inner catch", e.message);
        } finally {
            console.log("Finally called");
        }
    } catch (e) {
        console.log("outer catch", e.message);
    }
}
//nestedTry2(); // inner catch Opps, Finnaly called

// example
function nestedTry3() {
    try {
        try {
            throw new Error("Ops");
        } catch (e) {
            console.log("inner catch", e.message);
            throw new Error("Auch");
        } finally {
            console.log("Finally inner");
        }
    } catch (e) {
        console.log("outer catch", e.message);
    } finally {
        console.log("Finally outer");
    }
}
// nestedTry3();
// inner catch Ops, Finally inner, outer catch Auch, Finally outer

// example - outer catch didnt run, because of the return in the finnaly block
function nestedTry4() {
    try {
        try {
            throw new Error("Ops");
        } catch (e) {
            console.log("inner catch", e.message);
            throw new Error("Auch");
        } finally {
            console.log("Finally inner");
            return;
        }
    } catch (e) {
        console.log("outer catch", e.message);
    } finally {
        console.log("Finally outer");
    }
}
// nestedTry4();
// inner catch, Finally inner, Finally outer
