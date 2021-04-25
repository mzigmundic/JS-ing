// Map
// WeakMap
// Set
// WeakSet

/* ==================================================================== */
/*                                 Map                                  */
/* ==================================================================== */
// A Map object is a simple key/value map and can iterate its elements in insertion order
// Any value (objects and primitive values) may be used as either a key or a value
// for...of loop returns an array of [key, value] for each iteration

let myMap = new Map();
myMap.set("dog", "vauvau");
myMap.set("cat", "mijau");
myMap.set("mouse", "ciuciu");

// console.log(myMap.size); // 3
// console.log(myMap.get("cat")); // mijau
// console.log(myMap.get("fox")); // undefined
// console.log(myMap.has("cat")); // true
// console.log(myMap.has("fox")); // false
// myMap.delete("mouse");
// console.log(myMap.size); // 2

for (let [key, value] of myMap) {
    // console.log(key + " goes " + value); // dog goes vauvau, cat goes mijau, mouse goes ciuciu
}

Array.from(myMap).forEach((item) => {
    // console.log(item); // (2) ["dog", "vauvau"], (2) ["cat", "mijau"], (2) ["mouse", "ciuciu"]
});
const convertedToArray1 = [...myMap];
// console.log(convertedToArray1); // (3) [Array(2), Array(2), Array(2)]

// myMap.clear();
// console.log(myMap.size); // 0

// Instance properties:
//    - size -> returns the number of key-value pairs in the Map object
// Instance Methods:
//    - get(key) -> returns the value associated to the key, or undefined if there is none
//    - set(key, value) -> sets the value for the key in the Map. Returns the Map object
//    - has(key) -> returns true if there is provided key in the Map, otherwise returns false
//    - delete(key) -> returns true if an element existed and has been removed
//    - clear() -> removes all key-value pairs from Map
// Iteration Methods:
//    - keys()
//    - values()
//    - entries()
//    - forEach()

/* ==================================================================== */
/*                               WeakMap                                */
/* ==================================================================== */
// A WeakMap object is a collection of key-value pairs in which the keys are objects only
//    and the values can be arbitrary values.
// The object references in the keys are held weakly, so they are garbage collected
//    if there is no other reference to the object anymore
// In Map objects keys are enumerable, in WeakMap keys are not enumerable
let myWeakMap = new WeakMap();
const myObj1 = {};
const myObj2 = {};
const myObj3 = {};
myWeakMap.set(myObj1, "vauvau");
myWeakMap.set(myObj2, "mijau");
myWeakMap.set(myObj3, "ciuciu");

/* ==================================================================== */
/*                                 Set                                  */
/* ==================================================================== */
// A Set object is a collection of values, elements can be iterated in insertion order.
// A value in a Set may only occur once - it is unique in Set's collection.
let mySet = new Set();
mySet.add(2);
// console.log(mySet); // Set(1) {2}
mySet.add(5);
// console.log(mySet); // Set(2) {2, 5}
mySet.add(5);
// console.log(mySet); // Set(2) {2, 5}
// console.log(mySet.size); // 2
const myObj4 = { a: 1, b: 2 };
mySet.add(myObj4);
mySet.add({ a: 1, b: 2 });
// console.log(mySet); // Set(4) {2, 5, {…}, {…}} // differet references, so no problem here
// console.log(mySet.has(5)); // true
// console.log(mySet.has(myObj4)); // true
// console.log(mySet.has(3)); // false
mySet.delete(5);
// console.log(mySet); // Set(3) {2, {…}, {…}}
// in Firefox it logs  // Set(3) [2, {…}, {…}]

for (let item of mySet) {
    // console.log(item); // 2, {a: 1, b: 2}, {a: 1, b: 2}
}
Array.from(mySet).forEach((item) => {
    // console.log(item); // 2, {a: 1, b: 2}, {a: 1, b: 2}
});
const convertedToArray2 = [...mySet];
// console.log(convertedToArray2); // (3) [2, {…}, {…}]

// Instance properties:
//    - size -> returns the number of key-value pairs in the Set object
// Instance Methods:
//    - add(value) -> appends value to the Set object. Returns the Set object with added value
//    - has(value) -> returns true if there is element with given value in Set, otherwise returns false
//    - delete(value) -> returns true if an element existed and has been removed
//    - clear() -> removes all key-value pairs from Set
// Iteration Methods:
//    - keys()
//    - values()
//    - entries()
//    - forEach()

/* ==================================================================== */
/*                               WeakSet                                */
/* ==================================================================== */
