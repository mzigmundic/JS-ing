// Declaring variables
// var
// let
// const
// Hoisting
// Data types
// Literals - Array, Boolean, Numeric, Floating-point, Object, RegExp, String

/* ==================================================================== */
/*                         Declaring variables                          */
/* ==================================================================== */
// Names of variables (identifiers) rules:
//   must start with a letter, underscore(_), or dollar sign($)
//   subsequent characters can also be digits (0-9);
//   case sensitive

/* ==================================================================== */
/*                                 var                                  */
/* ==================================================================== */
// Declares a function-scoped or globally-scoped variable,
//    optionally initializing it to a value
// Whenever var declarations occur, they are processed before any code
//    is executed - this is called hoisting
// Their initial value is undefined
// Redelcaring the same variable within the same block is not a problem

myBla = "Bla";
// console.log(myBla); // Bla

blabla = "Blabla";
var blabla;
// console.log(blabla); // Blabla
// implicitply understood as:
// var blabla;
// blabla = "Blabla"

var myZeroX = "my-zero-x";
{
    var myZeroX = "Changed zero-x"; // same variable
    // console.log(myZeroX); // Changed zero-x
}
// console.log(myZeroX); // Changed zero-x

var myFirstX = "my-first-x";
function myVarFunction1() {
    var myFirstY = "my-first-y";
    console.log(myFirstX, myFirstY);
}
// myVarFunction1(); // my-first-x, my-first-y
// console.log(myFirstX); // my-first-x
// console.log(myFirstY); // ReferenceError

var mySecondX = "my-second-x";
function myVarFunction2() {
    mySecondY = "my-second-y";
    console.log(mySecondX, mySecondY);
}
// myVarFunction2(); // my-second-x, my-second-y
// console.log(mySecondX); // my-second-x
// console.log(mySecondY); // my-second-y

function myVarFunction3() {
    console.log(myThirdX);
    var myThirdX = 13;
    console.log(myThirdX);
}
// myVarFunction3(); // undefined, 13

/* ==================================================================== */
/*                                  let                                 */
/* ==================================================================== */
// Declares a block-scoped local variable, optionally initializing it to a value
// Redelcaring the same variable within the same block throws SyntaxError

// flafla = "Flafla";
// let flafla;
// console.log(flafla); // ReferenceError: Cannot access before initialization

let myFirstA = "my-first-a";
{
    let myFirstA = "my-first-a inside block";
    // console.log(myFirstA); // my-first-a inside block
}
// console.log(myFirstA); // my-first-a

let mySecondA = "my-second-a";
{
    mySecondA = "my-second-a inside block";
    let mySecondB = "my-second-b inside block";
}
// console.log(mySecondA); // my-second-a inside block
// console.log(mySecondB); // ReferenceError: not defined

/* ==================================================================== */
/*                                 const                                */
/* ==================================================================== */
// Declares a block-scoped, just like let, but the value cannot be reassigned
// Its value must be specified in the same statement in which its declared
// On reference data types variable identifier cannot be reasigned,
//     but value can be mutated

// const myZeroC; // SyntaxError: Missing initializer in const declaration
// myZeroC = "my-zero-c";

const myFirstC = "my-first-c";
// myFirstC = "my-first-c mutated"; // TypeError: Assignment to constant variable

const mySecondC = ["one", "two"];
// console.log(mySecondC); // ["one", "two"]
mySecondC.push("three", "four");
// console.log(mySecondC); // ["one", "two", "three", "four"]

const myThirdC = {
    prop1: "Value 1",
    prop2: "Value 2",
};
// console.log(myThirdC); // {prop1: "Value 1", prop2: "Value 2"}
myThirdC.prop3 = "Value 3";
// console.log(myThirdC); // {prop1: "Value 1", prop2: "Value 2", prop3: "Value 3"}

/* ==================================================================== */
/*                                Hoisting                              */
/* ==================================================================== */
// Hoisting is concept in which you can refer to a variable declared later
//     whithout getting an exception
// var statements are hoisted and initialized to value undefined
// let an const are hoisted but not initialized
// function declarations are hoisted, function expressions are not

/* ==================================================================== */
/*                               Data types                             */
/* ==================================================================== */
// Eight data types:
// Primitives:
//   1. Boolean
//   2. null
//   3. undefined
//   4. Number
//   5. BigInt
//   6. String
//   7. Symbol
// Non-primitives:
//   8. Object

/* ==================================================================== */
/*                                Literals                              */
/* ==================================================================== */
// fixed values, not variables, that you literally provide in your script

// --------------------------- Array literals ----------------------------
// List of zero or more expressions
// Array literals are also Array objects

let coffees = ["Turska", "Francuska", "Kolumbijska"];
// console.log(coffees); // (3) ["Turska", "Francuska", "Kolumbijska"]
// console.log(coffees[1]); // Francuska

// If you put two commas in a row, array fills in the value undefined
let fish = ["Lion", , "Angel"];
// console.log(fish[1]); // undefined

// -------------------------- Boolean literals ---------------------------
// Two literal values: true, false
// Do not confuse primitive values true/false with values true/false of Boolean object
if (false) {
    console.log("Not going to echo");
}
if (new Boolean(false)) {
    // console.log("Will be echoed");
}

// -------------------------- Numeric literals ---------------------------
// Number and BigInt types can be written in bases 10, 2, 8, 16
const numDecimal = 20;
const numBina = 0b11;
const numOcta = 0o20;
const numHeksa = 0x20;
// console.log(numDecimal); // 20
// console.log(numBina); // 3
// console.log(numOcta); // 16
// console.log(numHeksa); // 32

// ---------------------- Floating-point literals ------------------------
// Can have the following parts:
//    A decimal integer which can be preceded by "+" or "-"
//    A decimal point "."
//    A fraction (another decimal number)
//    An exponent
//          "e" or "E" followed by an integer which can be preceded by "+" or "-"
// Must have at least one digit, and either a decimal point or "e" or "E"
const floating1 = 3.1415;
const floating2 = -0.148;
const floating3 = -3.1e3;
const floating4 = 0.1e-2;
// console.log(floating1); // 3.1415
// console.log(floating2); // -0.148
// console.log(floating3); // -3100
// console.log(floating4); // 0.001
// console.log(123 === 123.0); // true

// --------------------------- Object literals ---------------------------
// List of zero or more pairs of property names and associated values, enclosed by {}
// Property names can be any string, including the empty string
// If name would not be a valid identifier or number, it must be enclosed in quotes
//      and then cannot be accessed as a dot (.), but can be assessed with []

const myObjLit = { who: "Me", why: "Because" };
// console.log(myObjLit); // {who: "Me", why: "Because"}

function getMeAValue() {
    return "Returned value";
}
const myObjLit2 = { prop1: "Value", prop2: getMeAValue() };
// console.log(myObjLit2); // {prop1: "Value", prop2: "Returned value"}

const myObjLit3 = { moreCars: { a: "Opel", b: "Jeep" }, 7: "Skoda", "a b": "Kia" };
// console.log(myObjLit3.moreCars.a); // Opel
// console.log(myObjLit3[7]); // Skoda
// console.log(myObjLit3["a b"]); // Kia

// --------------------------- RegExp literals ---------------------------
// A pattern enclosed between slashes
const regexp1 = /ab+c/;
// console.log(regexp1); // /ab+c/

// --------------------------- String literals ---------------------------
// Zero or more characters enclosed in (") or (')
// Any of the String object's methods on a string literal can be called
// JS automatically converts the string literal to a temporary String object,
//    calls a method, then discards the temporary String object
// Property String.length can also be used

const myString1 = "Foo";
const myString2 = "Bar";
const myString3 = "1234";
const myString4 = "first line\n second line";
const myString5 = "John's dog";
// console.log(myString1);
// console.log(myString2);
// console.log(myString3);
// console.log(myString4);
// console.log(myString5);
// console.log(myString3.length); // 4

// ES6 introduced a template literal, which are enclosed by (`) back-tick
const myStringTemp1 = `My String Temp`;
const myStringTemp2 = `Multiline string
sounds good
`;
// console.log(myStringTemp1);
// console.log(myStringTemp2);

// Interpolation
const myVariable = "Bobert";
const myStringTemp3 = `I can insert a ${myVariable} in here`;
// console.log(myStringTemp3); // I can insert a Bobert in here

// ------------------- Special characters in strings ---------------------
// \0       Null Byte
// \b       Backspace
// \f       Form feed
// \n       New line
// \r       Carrige return
// \t       Tab
// \v       Vertical tab
// \'       Apostrophe or single quote
// \"       Double quote
// \\       Backslash character
// \XXX     Char whith the Latin-1 encoding, three octal digits 0 - 377; example \251 - copyright symbol
// \xXX     Char whith the Latin-1 encoding, two hexadecimal digits 0 - FF; example \xA9 - copyright sym
// \uXXXX   Unicode char, four hexadecimal digits; example \u00A9 - copyright symbol
// \u{XXXXX} Unicode code point escapes; example \u{2F804} same as \uD87E\uDC04

// console.log("\0");
// console.log("\b");
// console.log("\f");
// console.log("\n");
// console.log("\r");
// console.log("\t");
// console.log("\v");
// console.log("'");
// console.log('"');
// console.log("\\");
// console.log("\251");
// console.log("\x49");
// console.log("\u0049");
// console.log("\u{2F804}");
// console.log("\uD87E\uDC04");
