// Unary operators
// Arithmetic operators
// Relational operators
// Equality operators
// Bitwise shift operators
// Binary bitwise operators
// Binary logical operators
// Conditional (ternary) operator
// Optional Chaining operator
// Comma operator
// Assignment operators

/* ==================================================================== */
/*                          Unary operators                             */
/* ==================================================================== */
// Unary operation is an operation with only one operand

// ------------------------------ A++ ------------------------------------
// Postfix increment operator
let inc1 = 2;
// console.log(inc1++); // 2
// console.log(inc1); // 3

// ------------------------------ A-- ------------------------------------
// Postfix decrement operator
let dec1 = 2;
// console.log(dec1--); // 2
// console.log(dec1); // 1

// ------------------------------ ++A ------------------------------------
// Prefix increment operator
let inc2 = 2;
// console.log(++inc2); // 3
// console.log(inc2); // 3

// ------------------------------ --A ------------------------------------
// Prefix decrement operator
let dec2 = 2;
// console.log(--dec2); // 1
// console.log(dec2); // 1

// ------------------------------- + -------------------------------------
// Converts its operand to Number type
const unaryPlus1 = "4";
const unaryPlus2 = "-3";
// console.log(+unaryPlus1); // -4
// console.log(+unaryPlus2); // 3

// ------------------------------- - -------------------------------------
// Converts its operand to Number type and then negates it
const unaryMinus1 = "4";
const unaryMinus2 = "-3";
// console.log(-unaryMinus1); // -4
// console.log(-unaryMinus2); // 3

// ------------------------------- ~ -------------------------------------
// Bitwise NOT operator, inverts the bits of its operand
const bitNot1 = 5; //////// 0000000000000101   ->  5
//console.log(~bitNot1); // 1111111111111010   -> -6
const bitNot2 = -3; /////// 1111111111111101   -> -3
//console.log(~bitNot2); // 0000000000000010   ->  2

// ------------------------------- ! -------------------------------------
// Logical NOT operator, takes truth to falsity and vice versa.
const logicalNot1 = false;
// console.log(!logicalNot1); // true
const logicalNot2 = true;
// console.log(!logicalNot2); // false
const logicalNot3 = 0;
// console.log(!logicalNot3); // true
const logicalNot4 = 3;
// console.log(!logicalNot4); // false
const logicalNot5 = undefined;
// console.log(!logicalNot5); // true
const logicalNot6 = null;
// console.log(!logicalNot6); // true

// ------------------------------- !! ------------------------------------
// Double logical NOT operator, forces conversion of any value to
//      corresponding boolean primitive
const logicalNotD1 = false;
// console.log(!!logicalNotD1); // false
const logicalNotD2 = true;
// console.log(!!logicalNotD2); // true
const logicalNotD3 = 0;
// console.log(!!logicalNotD3); // false
const logicalNotD4 = 3;
// console.log(!!logicalNotD4); // true
const logicalNotD5 = undefined;
// console.log(!!logicalNotD5); // false
const logicalNotD6 = null;
// console.log(!!logicalNotD6); // false

// ----------------------------- delete ----------------------------------
// Deletes a property form an object
const EmpDelete = {
    firstName: "John",
    lastName: "Rambo",
};
// console.log(EmpDelete); // {firstName: "John", lastName: "Rambo"}
// console.log(delete EmpDelete.firstName); // true
// console.log(EmpDelete); // {lastName: "Rambo"}
// console.log(delete EmpDelete.nonExistantProperty); // true

const EmpDelete2 = {};
Object.defineProperty(EmpDelete2, "name", { configurable: false });
// console.log(delete EmpDelete2.name); // false

// ------------------------------ void -----------------------------------
// Evaluates the given expression and then returns undefined
void function test() {
    console.log("Booo");
};
// console.log(test()); // ReferenceError: test is not defined

// ----------------------------- typeof ----------------------------------
// Returns a string indicating the type of the unevaluated operand

// number
// console.log(typeof 28);
// console.log(typeof Math.LN10);
// console.log(typeof Infinity);
// console.log(typeof NaN);
// console.log(typeof Number("1"));
// console.log(typeof Number("bla"));

// string
// console.log(typeof "");
// console.log(typeof "bla");
// console.log(typeof `Temp bla`);
// console.log(typeof "1");
// console.log(typeof typeof 1); // typeof always returns a string
// console.log(typeof String(1));

// boolean
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof Boolean("bla"));
// console.log(typeof !!3);

// undefined
let declaredButUndefinedVariable;
// console.log(typeof undefined);
// console.log(typeof declaredButUndefinedVariable);
// console.log(typeof undefinedVariable);

// symbol
// console.log(typeof Symbol());
// console.log(typeof Symbol("foo"));
// console.log(typeof Symbol.iterator);

// object
// console.log(typeof null);
// console.log(typeof { a: 1 });
// console.log(typeof [1, 2, 4]);
// console.log(typeof new Date());
// console.log(typeof new Boolean(true)); // avoid this
// console.log(typeof new Number(2)); // avoid this
// console.log(typeof new String("bla")); // avoid this

// function
// console.log(typeof function () {});
// console.log(typeof class Klasa {});
// console.log(typeof Math.sin);

/* ==================================================================== */
/*                        Arithmetic operators                          */
/* ==================================================================== */
// They take numerical values (literals or variables) as their operands
//    and return a single numerical value

// ------------------------------- + -------------------------------------
// Addition operator or string concatenation
// console.log(3 + 5); // 8
// console.log(4 + true); // 5
// console.log(3 + false); // 3
// console.log("Hello " + "World"); // Hello World
// console.log(12 + "Dva"); // 12Dva
// console.log("3" + "5"); // 35
// console.log("Foo" + false); // Foofalse
// console.log(Infinity + 2); // Infinity

// ------------------------------- - -------------------------------------
// Subtraction operator
// console.log(8 - 3); // 5
// console.log(9.8 - 2); // 7.80000000001
// console.log(6 - "Hello"); // NaN
// console.log(4 - true); // 3

// ------------------------------- / -------------------------------------
// Division operator
// console.log(12 / 2); // 6
// console.log(3 / 2); // 1.5
// console.log(6 / "3"); // 2
// console.log(6 / true); // 6
// console.log(2 / 0); // Infinity
// console.log(2 / -0); // -Infinity

// ------------------------------- * -------------------------------------
// Multiplcication operator
// console.log(4 * 3); // 12
// console.log(-4 * 3); // -12
// console.log("4" * 3); // 12
// console.log("Foo" * 3); // NaN
// console.log(Infinity * 0); // NaN
// console.log(Infinity * Infinity); // Infinity

// ------------------------------- % -------------------------------------
// Remainder operator
// console.log(12 % 5); // 2
// console.log(13 % 5); // 3
// console.log(14 % 5); // 4
// console.log(15 % 5); // 0
// console.log(-12 % 5); // -2
// console.log(5.5 % 2); // 1.5
// console.log(NaN % 2); // NaN
// console.log(Infinity % 2); // NaN

// ------------------------------- ** ------------------------------------
// Exponetiation operator
// console.log(3 ** 3); // 27
// console.log(10 ** -2); // 0.01
// console.log(2 ** (2 ** 3)); // 256
// console.log((2 ** 2) ** 3); // 64

/* ==================================================================== */
/*                         Relational operators                         */
/* ==================================================================== */
// Relational operator compares its operands and returns a Boolean value
//    based on whether the comparison is true

// ------------------------------- in ------------------------------------
// Returns true if property is in object or its prototype chain
const inCar = { brand: "Honda", model: "Accord", year: 1995 };
// console.log("model" in inCar); // true
delete inCar.model;
// console.log("model" in inCar); // false

const inTrees = ["bay", "cedar", "oak"];
// console.log(1 in inTrees); // true
// console.log(5 in inTrees); // false
// console.log("bay" in inTrees); // false
// console.log("length" in inTrees); // true

// console.log("PI" in Math); // true
// console.log("toString" in {}); // true

// --------------------------- instanceof --------------------------------
// Tests to see if the prototype property of a constructor appears
//    anywhere in the prototype chain of an object
function InstanceOfCar(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}
const myInstanceCar = new InstanceOfCar("Opel", "Astra", 1995);
// console.log(myInstanceCar instanceof InstanceOfCar); // true
// console.log(myInstanceCar instanceof Object); // true

const myLitString = "This is litteral string";
const myStringObject = new String("String called with constructor");
// console.log(myLitString instanceof String); // false
// console.log(myLitString instanceof Object); // false
// console.log(myStringObject instanceof String); // true
// console.log(myStringObject instanceof Object); // true
// console.log(String instanceof Object); // true

// ------------------------------- < -------------------------------------
// Less than operator
// console.log(5 < 3); // false
// console.log(3 < 3); // false
// console.log(2 < 3); // true
// console.log("aa" < "ab"); // true
// console.log(false < true); // true
// console.log(null < true); // true
// console.log(undefined < 3); // false
// console.log(NaN < 3); // false

// ------------------------------- > -------------------------------------
// Greather than operator
// console.log(5 > 3); // true
// console.log(3 > 3); // false
// console.log(3 > 2); // true
// console.log("ab" > "aa"); // true
// console.log(true > false); // true
// console.log(true > false); // true
// console.log(3 > undefined); // false
// console.log(3 > NaN); // false

// ------------------------------- <= ------------------------------------
// Less than or equal operator
// console.log(3 <= 5); // true
// console.log(3 <= 3); // true
// console.log(3 <= 2); // false
// console.log("aa" <= "aa"); // true
// console.log("ac" <= "ab"); // false

// ------------------------------- >= ------------------------------------
// Greather than or equal operator
// console.log(5 >= 3); // true
// console.log(3 >= 3); // true
// console.log(3 >= 2); // true
// console.log("ab" >= "aa"); // true

/* ==================================================================== */
/*                         Equality operators                           */
/* ==================================================================== */
// Returns a Boolean value based on whether the comparison is true

// ------------------------------- == ------------------------------------
// Equality operator
// console.log(1 == 1); // true
// console.log("hello" == "hello"); // true
// console.log(new String("bla") == new String("bla")); // false
// console.log("1" == 1); // true
// console.log(0 == false); // true
// console.log(0 == null); // false
// console.log(0 == undefined); // false
// console.log(0 == !!null); // true
// console.log(0 == !!undefined); // true
// console.log(null == undefined); // true
// console.log(new Number(3) == 3); // true
// console.log(new Number(3) == new Number(3)); // false
// console.log({ key: "value" } == { key: "value" }); // false
const myObjToCompare = { name: "Jon" };
// console.log(myObjToCompare == myObjToCompare); // true

// ------------------------------- != ------------------------------------
// Inequality operator
// negates equality operator result

// ------------------------------ === ------------------------------------
// Identity operator
// console.log(1 === 1); // true
// console.log("hello" === "hello"); // true
// console.log(new String("bla") === new String("bla")); // false
// console.log("1" === 1); // false
// console.log(0 === false); // false
// console.log(0 === null); // false
// console.log(0 === undefined); // false
// console.log(0 === !!null); // false
// console.log(0 === !!undefined); // false
// console.log(null === undefined); // false
// console.log(new Number(3) === 3); // false
// console.log(new Number(3) === new Number(3)); // false
// console.log({ key: "value" } === { key: "value" }); // false
const myObjToCompare2 = { name: "Jon" };
// console.log(myObjToCompare2 === myObjToCompare2); // true

// ------------------------------ !== ------------------------------------
// Nonidentity operator
// negates identity operator result

/* ==================================================================== */
/*                      Bitwise shift operators                         */
/* ==================================================================== */
// Shift all bits of the operand

// ------------------------------- << -------------------------------------
// Bitwise left shift operator - shits the first operand the specified
//    number of bits to the left, excess bits shifted of to left are discarded
//    Zero bits are shiffted in from the right
const myShiftLeft = 5; // 00000000000000000000000000000101 -> 5
const myShifterL = 3;
// console.log(myShiftLeft << myShifterL); // 000000000000000000000000000101000 -> 40

// console.log(-5 << 3); // -40

// ------------------------------- >> -------------------------------------
// Bitwise right shift operator - shift in oposite direction than left shift
const myShiftRight = 40; // 00000000000000000000000000010100 -> 40
const myShifterR = 3;
// console.log(myShiftRight >> myShifterR); // // 00000000000000000000000000000101 -> 5

// console.log(-40 >> 3); // -5

// ------------------------------ >>> -------------------------------------
// Bitwise unsigned right shift operator
const myUnsignedShiftRight = 40;
const myUnsignedShifterR = 3;
// console.log(myUnsignedShiftRight >>> myUnsignedShifterR); // 5

// console.log(-5 >>> 3); // 536870911

/* ==================================================================== */
/*                      Binary bitwise operators                        */
/* ==================================================================== */
// Treat their operands as a set of 32 bits (0s & 1s) and return numerical values

// ------------------------------- & -------------------------------------
// Bitwise AND - returns 1 in each position for which the corresponding
//    bits of both operands are 1s
const myBAa = 5; //////////////// 00000000000000000000000000000101
const myBBa = 3; //////////////// 00000000000000000000000000000011
// console.log(myBAa & myBBa); // 00000000000000000000000000000001 -> 1

// ------------------------------- | -------------------------------------
// Bitwise OR
const myBOa = 5; //////////////// 00000000000000000000000000000101
const myBOb = 3; //////////////// 00000000000000000000000000000011
// console.log(myBOa | myBOb); // 00000000000000000000000000000111 -> 7

// ------------------------------- ^ -------------------------------------
// Bitwise XOR
const myBXOa = 5; //////////////// 00000000000000000000000000000101
const myBXOb = 3; //////////////// 00000000000000000000000000000011
// onsole.log(myBXOa ^ myBXOb); // 00000000000000000000000000000110 -> 6

/* ==================================================================== */
/*                      Binary logical operators                        */
/* ==================================================================== */
// ------------------------------- && ------------------------------------
// Logical AND
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// Short circuit evaluation
const logicalAndFunc = function () {
    return "Returned Yea";
};
// console.log(true && logicalAndFunc()); // Returned Yea
// console.log(false && logicalAndFunc()); // false
// console.log(null && logicalAndFunc()); // null
// console.log(undefined && logicalAndFunc()); // undefined

// ------------------------------- || ------------------------------------
// Logical OR
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// Short circuit evaluation
const logicalOrFunc = function () {
    return "Ouuu yea";
};
// console.log(true || logicalOrFunc()); // true
// console.log(false || logicalOrFunc()); // Ouuu yea
// console.log(null || logicalOrFunc()); // Ouuu yea
// console.log(undefined || logicalOrFunc()); // Ouuu yea

// ------------------------------- ?? ------------------------------------
// Nullish Coalescing Operator - similar to || but does evaluate for
//    any falsy value, only to null or undefined
const logicalNullFunc = function () {
    return "Yupika";
};
// console.log(true ?? logicalNullFunc()); // true
// console.log(false ?? logicalNullFunc()); // false
// console.log(null ?? logicalNullFunc()); // Yupika
// console.log(undefined ?? logicalNullFunc()); // Yupika

/* ==================================================================== */
/*                    Conditional (ternary) operator                    */
/* ==================================================================== */
// ------------------- condition ? ifTrue : ifFalse ----------------------
// Returns one of two values based on the logical value of the condition - truthy or falsy
// console.log(true ? "Say yes" : "Say no"); // Say yes
// console.log(false ? "Say yes" : "Say no"); // Say no
// console.log(null ? "Say yes" : "Say no"); // Say no
// console.log(undefined ? "Say yes" : "Say no"); // Say no
// console.log("" ? "Say yes" : "Say no"); // Say no
// console.log("S" ? "Say yes" : "Say no"); // Say yes
// console.log(4 > 2 ? "Say yes" : "Say no"); // Say yes

/* ==================================================================== */
/*                      Optional Chaining operator                      */
/* ==================================================================== */
// ------------------------------- ?. -------------------------------------
// Returns undefined instead of causing an error if a reference
//     is nullish (null or undefined)
const myAdventurer = {
    name: "Indiana",
    weapon: {
        type: "Sword",
    },
};
// console.log(myAdventurer.prop.something); // TypeError: Cannot read property "something" of undefined
// console.log(myAdventurer.prop?.something); // undefined
// console.log(myAdventurer.someMethod()); // TypeError: myAdventurer.someMethod is not a function
// console.log(myAdventurer.someMethod?.()); // undefined

/* ==================================================================== */
/*                           Comma operator                             */
/* ==================================================================== */
// ------------------------------- , -------------------------------------
// Allows multiple expressions to be evaluated in a single statement
//    and returns the result of the last expression
let myComaValue = 1;
myComaValue = (myComaValue++, myComaValue);
// console.log(myComaValue); // 2

let myComaValue2 = (5, 8);
// console.log(myComaValue2); // 8

for (let i = 0, j = 10; i <= 5; i++, j--) {
    // console.log(`${i}-${j}`); // 0-10, 1-9, 2-8, 3-7, 4-6, 5-5
}

/* ==================================================================== */
/*                        Assignment operators                          */
/* ==================================================================== */
// They assign a value to its left operand based on the value of its right operand
// =, +=, -=, *=, /=, **=, %=, <<=, >>=, >>>=, &=, |=, &&=, ||=, ??=

// ------------------------- [a, b] = [1, 2] -----------------------------
// Destructiring array assignment - unpacking values from array
const myDArray = ["one", "two", "three"];
const [myA1, myA2, myA3] = myDArray;
// console.log(myA1); // one
// console.log(myA2); // two
// console.log(myA3); // three

// Swapping variables
let myV1 = 1;
let myV2 = 4;
[myV1, myV2] = [myV2, myV1];
// console.log(myV1); // 4
// console.log(myV2); // 1

// Parsing an array returned from function
function destFuncA() {
    return ["foo", "bar"];
}
const [myV3, myV4] = destFuncA();
// console.log(myV3); // foo
// console.log(myV4); // bar

function destFuncB() {
    return ["foo", "bar", "mir"];
}
const [myV5, , myV6] = destFuncB();
// console.log(myV5); // foo
// console.log(myV6); // mir

// Assigning the rest of an array to a variable
const [myV7, ...myV8] = [1, 2, 3, 4, 5];
// console.log(myV7); // 1
// console.log(myV8); // (4) [2, 3, 4, 5]

// ----------------------- {a, b} = {a:1, b:2} ---------------------------
// Destructuring object assignment - unpacking values from object
const myDObject = {
    myV9: "Jane",
    myV10: "42",
};

const { myV9, myV10 } = myDObject;
// console.log(myV9); // Jane
// console.log(myV10); // 42

let myV11, myV12;
({ myV11, myV12 } = { myV11: 2, myV12: 4 }); // parentheses () are required in here
// console.log(myV11); // 2
// console.log(myV12); // 4

// --------- Assigning to custom variable names
const myDObject2 = {
    name: "Bob",
    age: 71,
};
const { name: myV13, age: myV14 } = myDObject2;
// console.log(myV13); // Bob
// console.log(myV14); // 71

// --------- Default values
const { myV15 = 10, myV16 = 5 } = { myV15: 8 };
// console.log(myV15); // 8
// console.log(myV16); // 5

// --------- Custom names with default values
const { name: myV17 = "Jimmy", age: myV18 = 18 } = { name: "Boby" };
// console.log(myV17); // Boby
// console.log(myV18); // 18

// --------- Unpacking from objects passed as function parameter
const myUser = {
    aName: "Gary",
    anAge: 33,
    aWeapon: {
        anId: 22,
        aMaterial: "Wood",
    },
};

function unpackingParams({ aName, aWeapon: { aMaterial } }) {
    return `${aName} - ${aMaterial}`;
}
function unpackingParamsCust({ aName: myV20, aWeapon: { aMaterial: myV21 } }) {
    return `${myV20} - ${myV21}`;
}
function unpackingAge({ anAge }) {
    return anAge;
}

// console.log(unpackingParams(myUser)); // Gary - Wood
// console.log(unpackingAge(myUser)); // 33
// console.log(unpackingParamsCust(myUser)); // Gary - Wood
