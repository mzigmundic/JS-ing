// for statement
// while statement
// do...while statement
// break statement
// continue statement
// labeled statement
// for...in statement
// for...of statement

/* ==================================================================== */
/*                            for statement                             */
/* ==================================================================== */
const myArray = ["item 1", "item 2", "item 3"];
for (let i = 0; i < myArray.length; i++) {
    // console.log(myArray[i]); // item 1, item 2, item 3
}

/* ==================================================================== */
/*                           while statement                            */
/* ==================================================================== */
let counter1 = 0;
while (counter1 < myArray.length) {
    // console.log(myArray[counter1]); // item 1, item 2, item 3
    counter1++;
}

/* ==================================================================== */
/*                         do...while statement                         */
/* ==================================================================== */
do {
    // console.log("Execute at least once no matter what");
} while (false);

let counter2 = 0;
do {
    // console.log(myArray[counter2]); // item 1, item 2
    counter2++;
} while (counter2 < myArray.length - 1);

/* ==================================================================== */
/*                           break statement                            */
/* ==================================================================== */
for (let i = 0; i < 5; i++) {
    // console.log(i); // 0, 1, 2, 3
    if (i === 3) {
        break;
    }
}

/* ==================================================================== */
/*                         continue statement                           */
/* ==================================================================== */
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    // console.log(i); // 0, 1, 2, 4
}

/* ==================================================================== */
/*                          labeled statement                           */
/* ==================================================================== */
// Can be used with break or continue statements
// It is prefixing a statement with an identifier which can be refered to
myLabel1: for (let i = 0; i <= 5; i++) {
    myLabel2: for (let j = 0; j <= 4; j++) {
        if (j === 3) {
            break myLabel2;
        }
        if (i === 4) {
            break myLabel1;
        }
        // console.log("i", i);
        // console.log("j", j);
    }
}

myLabel3: for (let i = 0; i <= 5; i++) {
    myLabel4: for (let j = 0; j <= 4; j++) {
        if (j === 3) {
            continue myLabel4;
        }
        if (i === 4) {
            continue myLabel3;
        }
        // console.log("i", i);
        // console.log("j", j);
    }
}

/* ==================================================================== */
/*                         for...in statement                           */
/* ==================================================================== */
// Iterates a specified variable over all the enumerable properties for an object
// For each distinc property it executes the specified statements
const myObj1 = {
    name: "John",
    age: 33,
    buff: true,
    play: function () {
        return "I am playing";
    },
};

for (let prop in myObj1) {
    // console.log(prop, myObj1[prop]);
}
// name John
// age 33
// buff true
// play f () {return "I am playing"}

// Should not be used to iterate over an Array
const myArray2 = ["A", "B", "C", "D", "E"];
myArray2.foo = "bar";
for (let prop in myArray2) {
    // console.log(prop, myArray2[prop]); // 0 A, 1 B, 2 C, 3 D, 4 E, foo bar
}

/* ==================================================================== */
/*                         for...of statement                           */
/* ==================================================================== */
// Creates a loop iterating over iterable objects:
//    Array, Map, Set, String, arguments, ...
// for...in iterates over property names
// for...of iterates over property values

for (let i of myArray2) {
    // console.log(i); // A, B, C, D, E
}

const myStringIterable = "yupika";
for (const i of myStringIterable) {
    // console.log(i); // y, u, p, i, k, a
}
