// Declaring async function
async function hello1() {
    return "Hello1";
}

// Declaring async function with arrow function
let hello2 = async () => {
    return "Hello2";
};
//console.log(hello1()); // Promise {<fulfilled>: "Hello1"}
//console.log(hello2()); // Promise {<fulfilled>: "Hello2"}
//hello1().then((value) => console.log(value)); // Hello1
//hello1().then(console.log); // Hello1

// Promises with standard .then()
fetch("https://jsonplaceholder.typicode.com/comments?postId=42")
    .then((res) => {
        if (!res.ok) {
            throw new Error("HTTP error: " + res.status);
        }
        return res.json();
    })
    .then((data) => {
        // console.log(data);
    })
    .catch((e) => console.log(e));

// Promises with async/await
async function myFetch() {
    let res = await fetch("https://jsonplaceholder.typicode.com/comments?postId=42");
    if (!res.ok) {
        throw new Error("HTTP error: " + res.status);
    }
    let data = await res.json();
    // console.log(data);
}
myFetch().catch((e) => console.log(e));

// Hybrid aproach
async function myFetch2() {
    let res = await fetch("https://jsonplaceholder.typicode.com/comments?postId=42");
    if (!res.ok) {
        throw new Error("HTTP error: " + res.status);
    }
    return await res.json();
}
myFetch2()
    .then((data) => {
        //   console.log(data);
    })
    .catch((e) => console.log(e));

// Error handling on async/await
async function myFetch3() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/comments?postId=42");
        if (!res.ok) {
            throw new Error("HTTP error: " + res.status);
        }
        let data = await res.json();
        //console.log(data);
    } catch (error) {
        console.log(error);
    }
}
myFetch3();

// Error handling on hybrid aproach - same as shown previously
async function myFetch4() {
    let res = await fetch("https://jsonplaceholder.typicode.com/comments?postId=42");
    if (!res.ok) {
        throw new Error("HTTP error: " + res.status);
    }
    return await res.json();
}
myFetch4()
    .then((data) => {
        // console.log(data);
    })
    .catch((e) => console.log(e));
