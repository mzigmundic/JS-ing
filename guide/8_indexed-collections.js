// Creating an array
// length property
// Iterating over arrays
// Array static methods
// Array instance methods

/* ==================================================================== */
/*                          Creating an array                           */
/* ==================================================================== */
// JS does not have an explicit array data type, but predefined Array object
//   and its methods can be used

// Following statements create equivalent arrays:
let myArray1 = new Array("Item 1", "Item 2", "Item 3", "Item 4");
let myArray2 = Array("Item 1", "Item 2", "Item 3", "Item 4");
let myArray3 = ["Item 1", "Item 2", "Item 3", "Item 4"];
// console.log(myArray1); // (4) ["Item 1", "Item 2", "Item 3", "Item 4"]
// console.log(myArray2);
// console.log(myArray3);

// Referring to array elemetns
// console.log(myArray1[0]); // Item 1
// console.log(myArray1[1]); // Item 2
// console.log(myArray1.length); // 4
// console.log(myArray1["length"]); // 4

// To create an array with non-zero length, but without any elements:
let myArray4 = new Array(5);
let myArray5 = Array(5);
let myArray6 = [];
myArray6.length = 5;
// console.log(myArray4); // (5) [empty × 5]
// console.log(myArray5);
// console.log(myArray6);
for (let i = 0; i < myArray6.length; i++) {
    // console.log(myArray6[i]); // 5 undefined
}
myArray6.forEach((item) => {
    console.log(item); // nothing happens
});
for (let i in myArray6) {
    console.log(myArray6[i]); // nothing happens
}
// If those elemetns were set explicitly as undefined, then they would be consoled log

// If you want to initialize an array with a single element that is a number,
//    you have to use bracket sytax, otherwise it would be interpreted as length
// Or you can use Array.of() method
let myArray7 = Array.of(13); // [13];
let myArray8 = Array(7); // array of 7 empty slots

/* ==================================================================== */
/*                           length property                            */
/* ==================================================================== */
// JS arrays on implementation level store their elemetns as object properties,
//     using the array index as the property name
// length property returns the index of the last element plus one
let myCats = [];
myCats[30] = "Dusty";
// console.log(myCats.length); // 31

/* ==================================================================== */
/*                        Iterating over arrays                         */
/* ==================================================================== */
let myArrayToLoop = ["A", "B", "C", "D", "E"];

// Standard for loop
for (let i = 0; i < myArrayToLoop.length; i++) {
    // console.log(myArrayToLoop[i]); // A, B, C, D, E
}

// with forEach() method
myArrayToLoop.forEach(function (item) {
    // console.log(item); // A, B, C, D, E
});

// with forEach() and arrow function
myArrayToLoop.forEach((item) => {
    // console.log(item); // A, B, C, D, E
});

// with for...in loop - not advisable
for (let prop in myArrayToLoop) {
    // console.log(myArrayToLoop[prop]); // A, B, C, D, E
}

/* ==================================================================== */
/*                        Array static methods                          */
/* ==================================================================== */
// -------------------------- Array.from() -------------------------------
// Creates a new Array instance from an array-like or iterable object
const myString1 = "FooBar";
const myArrayFrom1 = Array.from(myString1);
// console.log(myArrayFrom1); // (6) ["F", "o", "o", "B", "a", "r"]

const myMetaTags = document.getElementsByTagName("meta");
// console.log(myMetaTags); // HTMLCollection(3)
// myMetaTags.forEach((item) => console.log(item)); // TypeError: not a function
// Array.from(myMetaTags).forEach((item) => console.log(item)); // meta, meta, meta

// ------------------------- Array.isArray() -----------------------------
// Returns true if the argument is an array, or false otherwise
const toTestAsArray1 = "BlaBla";
const toTestAsArray2 = { foo: "bar" };
const toTestAsArray3 = [1, 4, 5];
const toTestAsArray4 = undefined;
// console.log(Array.isArray(toTestAsArray1)); // false
// console.log(Array.isArray(toTestAsArray2)); // false
// console.log(Array.isArray(toTestAsArray3)); // true
// console.log(Array.isArray(toTestAsArray4)); // false

// --------------------------- Array.of() --------------------------------
// Creates a new Array instance with a variable number of arguments
const myArray9_1 = Array(7);
const myArray9_2 = Array.of(7);
const myArray9_3 = Array.of(7, 8, 9);
// console.log(myArray9_1); // [empty × 7]
// console.log(myArray9_2); // [7]
// console.log(myArray9_3); // (3) [7, 8, 9]

/* ==================================================================== */
/*                       Array instance methods                         */
/* ==================================================================== */
// concat, join, fill, slice, splice, reverse, indexOf, lastIndexOf, includes
// push, pop, shift, unsift
// forEach, map, sort, find, filter, reduce, some, every

// ---------------------------- concat() ---------------------------------
// Joins two or more arrays
// Does not change the existing array, but instead returns a new array
const myArray10 = ["a", "b", "c"];
const myArray11 = ["d", "e"];
const myArray12 = ["f", "g", "h"];
const myConcatenatedArray1 = [].concat(myArray10).concat(myArray11).concat(myArray12);
const myConcatenatedArray2 = myArray10.concat(myArray11).concat(myArray12);
// console.log(myConcatenatedArray1); // (8) ["a", "b", "c", "d", "e", "f", "g", "h"]
// console.log(myConcatenatedArray2); // (8) ["a", "b", "c", "d", "e", "f", "g", "h"]
// console.log(myArray10); // (3) ["a", "b", "c"];

// ----------------------------- join() ----------------------------------
// Joins all elements of an array into a string
const myArray13 = ["Who", "Are", "You"];
const myJoinedString1 = myArray13.join(" ");
const myJoinedString2 = myArray13.join("-");
// console.log(myJoinedString1); // Who Are You
// console.log(myJoinedString2); // Who-Are-You

// ----------------------------- fill() ----------------------------------
// Changes all elements in an array to a static value, from a start index (default 0),
//    to an end index (default array.length). It returns the modified array
const myArray14 = [1, 2, 3, 4, 5];
// console.log(myArray14.fill("x", 2, 4)); // (5) [1, 2, "x", "x", 5]
// console.log(myArray14); // (5) [1, 2, "x", "x", 5]
const myArray15 = [11, 12, 13, 14, 15];
// console.log(myArray15.fill("a")); // (5) ["a", "a", "a", "a", "a"]
// console.log(myArray15); // (5) ["a", "a", "a", "a", "a"]

// ---------------------------- slice() ----------------------------------
// Returns a shallow copy of a portion of an array into a new array object
//    selected from start index to end index (end not included)
// The original array is not modified.
const myArray17 = ["A", "B", "C", "D", "E"];
// console.log(myArray17.slice()); // (5) ["A", "B", "C", "D", "E"]
// console.log(myArray17.slice(2)); // (3) ["C", "D", "E"]
// console.log(myArray17.slice(2, 4)); // (2) ["C", "D"]
// console.log(myArray17); // (5) ["A", "B", "C", "D", "E"]

// ---------------------------- splice() ---------------------------------
// Changes the contents of an array by removing or replacing existing elements
//    and / or adding new elements in place (modifiing array instead of creating new one)
const myArray18 = ["A", "B", "C", "D", "E"];
// console.log(myArray18.splice(0)); // (5) ["A", "B", "C", "D", "E"]
// console.log(myArray18); // []
const myArray19 = ["A", "C", "D", "E"];
myArray19.splice(1, 0, "B");
// console.log(myArray19); // (5) ["A", "B", "C", "D", "E"]
const myArray20 = ["A", "B", "C", "D", "F", "G"];
myArray20.splice(4, 2, "E");
// console.log(myArray20); // (5) ["A", "B", "C", "D", "E"]

// ---------------------------- reverse() --------------------------------
// Reverses the order of the elements in array in place
const myArray21 = ["a", "b", "c", "d", "e"];
// console.log(myArray21.reverse()); // 5) ["e", "d", "c", "b", "a"]
// console.log(myArray21); //  5) ["e", "d", "c", "b", "a"]

// ---------------------------- indexOf() --------------------------------
// Returns the first index at which a given element can be found in the array,
//    or -1 if element is not preset
const myArray22 = ["a", "b", "c", "d", "e", "c", "f", "c"];
// console.log(myArray22.indexOf("c")); // 2
// console.log(myArray22.indexOf("c", 4)); // 5 -> started looking from index 4
// console.log(myArray22.indexOf("g")); // -1

// -------------------------- lastIndexOf() ------------------------------
// Returns the last index at which a given element can be found in the array,
//    or -1 if element is not preset
const myArray23 = ["a", "b", "c", "d", "e", "c", "f", "c"];
// console.log(myArray23.lastIndexOf("c")); // 7
// console.log(myArray23.lastIndexOf("c", 4)); // 2 -> started looking from index 4, backwards
// console.log(myArray23.lastIndexOf("g")); // -1

// ---------------------------- includes() -------------------------------
// Determines whether the array contains a value, and returns true or false
const myArray24 = ["a", "b", "c", "d"];
// console.log(myArray24.includes("a")); // true
// console.log(myArray24.includes("f")); // false

// ----------------------------- push() ----------------------------------
// Adds one or more elements to the end of an array and returns the new length of that array
const myArray25 = ["a", "b", "c", "d"];
// console.log(myArray25.push("e")); // 5
// console.log(myArray25); // (5) ["a", "b", "c", "d", "e"]
const myArray26 = ["a", "b", "c", "d"];
myArray26.push("e", "f", "g");
// console.log(myArray26); // (7) ["a", "b", "c", "d", "e", "f", "g"]

// ------------------------------ pop() ----------------------------------
// Removes the last element from an array and returns that element
const myArray27 = ["a", "b", "c", "d"];
// console.log(myArray27.pop()); // d
// console.log(myArray27.pop()); // c
// console.log(myArray27); // (2) ["a", "b"]

// ----------------------------- shift() ---------------------------------
// Removes the first element from an array and returns that element
const myArray28 = ["a", "b", "c", "d"];
// console.log(myArray28.shift()); // a
// console.log(myArray28.shift()); // b
// console.log(myArray28); // (2) ["c", "d"]

// ---------------------------- unshift() --------------------------------
// Adds one or more elements to the beginning of an array and returns the new length of array
const myArray29 = ["c", "d", "e", "f"];
// console.log(myArray29.unshift("a", "b")); // 6
// console.log(myArray29); // (6) ["a", "b", "c", "d", "e", "f"]

// ---------------------------- forEach() --------------------------------
// Calls a function for each element in the array
const myArray30 = ["a", "b", "c", "d"];
myArray30.forEach((item) => {
    // console.log("Letter: " + item); // Letter: a, Letter: b, ...
});

myArray30.forEach((item, index, array) => {
    // console.log(`${item} - ${index} - ${array[index]}`); // a - 0 - a, b - 1 - b
});

// ------------------------------ map() ----------------------------------
// Creates a new array populated with the results of calling a provided function
//    on every element in the array
const myArray31 = ["a", "b", "c", "d"];
const myMappedArray1 = myArray31.map((item) => "Letter: " + item);
const myMappedArray2 = myArray31.map((item, index, array) => {
    return `${item} - ${index} - ${array[index]}`;
});
// console.log(myArray31); // (4) ["a", "b", "c", "d"]
// console.log(myMappedArray1); // (4) ["Letter: a", "Letter: b", "Letter: c", "Letter: d"]
// console.log(myMappedArray2); // (4) ["a - 0 - a", "b - 1 - b" ...]

// ----------------------------- sort() ----------------------------------
// Sorts the elements of an array in place, and returns the sorted array
//    Sort order is ascending, built upon converting the elements into string
const myArray32 = ["c", "f", "d", "b", "a"];
// console.log(myArray32.sort()); // (5) ["a", "b", "c", "d", "f"]
// console.log(myArray32); // (5) ["a", "b", "c", "d", "f"]

const myArray33 = [1, 32, 14, 5, 7, 22];
// myArray33.sort()
// console.log(mySortedArray1); // (6) [1, 14, 22, 32, 5, 7]
myArray33.sort((a, b) => a - b);
// console.log(myArray33); // (6) [1, 5, 7, 14, 22, 32]

const items = [
    { name: "Andrew", value: 27 },
    { name: "Liz", value: 12 },
    { name: "Bob", value: 34 },
    { name: "Jane", value: 22 },
];
items.sort((a, b) => a.value - b.value);
// console.log(items); //  [{name: "Liz", value: 12}, {name: "Jane", value: 22},...]

// ----------------------------- find() ----------------------------------
// Returns the value of the first element in the array that satisfies the provided function
// If no values satisfy the function, undefined is returned
// arguments of callback function accepted: item, index, array;
const myArray34 = [5, 14, 7, 122, 45];
const foundItem = myArray34.find((item) => item > 10);
// console.log(foundItem); // 14
// console.log(myArray34.find((item) => item > 200)); // undefined

// ---------------------------- filter() ---------------------------------
// Creates a new array with all elements that pass the test of the provided function
// arguments of callback function accepted: item, index, array;
const myArray35 = [5, 14, 7, 122, 45];
const filteredArray = myArray35.filter((item) => item > 20);
// console.log(filteredArray); // (2) [122, 45]
// console.log(myArray35.filter((item) => item > 200)); // []

// ---------------------------- reduce() ---------------------------------
// Executes a provided reducer function on each element of the array, resulting in single output
// arguments of reduce: callback function, opt: initial value
// arguments of callback function accepted: accumulator, currentvalue, opt: currentindex, sourcearray
const myArray36 = [5, 14, 7, 122, 45];
const reducedFromArray = myArray36.reduce((acc, value) => acc + value);
const reducedFromArray2 = myArray36.reduce((acc, value) => acc + value, 10);
// console.log(reducedFromArray); // 193
// console.log(reducedFromArray2); // 203

// ----------------------------- some() ----------------------------------
// Tests whether at least one element in the array passes the test of the provided function
// Returns true or false
const myArray37 = [5, 14, 7, 122, 45];
// console.log(myArray37.some((element) => element > 30)); // true
// console.log(myArray37.some((element) => element > 200)); // false

// ----------------------------- every() ---------------------------------
// Tests wheether all elements in the array pass the test of the provided function
// Returns true or false
const myArray38 = [5, 14, 7, 122, 45];
// console.log(myArray37.every((element) => element > 2)); // true
// console.log(myArray37.every((element) => element > 30)); // false
