// Basic Syntax
// all Method
// race Method
// fetch
// Load Multiple Files
// Combining fetch and Promise all
// Async Await and Promises
// Error Handling
// finally Method

/* ==================================================================== */
/*                            Basic Syntax                              */
/* ==================================================================== */
// Wrappers for anything async
// ajax calls, reading files, timeouts, geolocation, talk to database, calbacks
// Use them to get rid of callback hell

// Example 1
const p1 = new Promise((resolve, reject) => {
    let x = 5;
    // resolve(x); // calling this will call then()
    // reject(x);
    setTimeout(resolve, 1500, Math.floor(Math.random() * 10) + 1);
});

p1.then((x) => {
    // console.log(x);
    return x;
})
    .then((x) => {
        // console.log(x + 2);
    })
    .catch((err) => {
        // console.log("caught", err);
    });

// Example 2
const p2 = new Promise((resolve, reject) => {
    if (true) {
        resolve("Promise2 resolved");
    } else {
        reject("Promise2 rejected");
    }
});
p2.then((result) => {
    // console.log("prom2:", result);
});

// Example 3
const p3 = Promise.resolve("Promise3 resolved");
p3.then((result) => {
    // console.log("p3:", result);
});

// Example 4
const p4 = () => Promise.resolve("Promise4 resolved");
p4().then((result) => {
    // console.log("p4:", result);
});

// Example 5
const p5 = () => Promise.reject("Promise5 rejected");
p5()
    .then(() => {
        // console.log("Resolved:")
    })
    .catch((err) => {
        // console.log("Rejected:", err);
    });

/* ==================================================================== */
/*                            all Method                                */
/* ==================================================================== */
// Promise.all()
// When you want to run your code after ALL your promises are resolved.
// Example: fetching data from multiple locations

const p6 = Promise.resolve("Got the users");
const p7 = Promise.resolve("Got the tweets");
const p8 = Promise.resolve("Got the weather");

Promise.all([p6, p7, p8]).then((resultsArr) => {
    //console.log(resultsArr[1]);
    //console.log(resultsArr[0]);
    //console.log(resultsArr[2]);
});

// Those could have been functions: p6 = () => ..., then passed as [p6(), ...]

/* ==================================================================== */
/*                            race Method                               */
/* ==================================================================== */
// Promise.race()
// When you only want the result from the first resolved promise

const p9 = Promise.reject("Reject 9");
const p10 = Promise.resolve("Resolve 10");
const p11 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Resolve 11");
});

Promise.race([p11, p9, p10])
    .then((result) => {
        // console.log("Winning:", result);
    })
    .catch((result) => {
        // console.log("Failed:", result);
    });

// [p9, p10, p11] -> Failed: Reject 9
// [p9, p10, p11] -> Winning: Resolve 10
// [p11, p9, p11] -> Failed: Reject 9
// [p11, p10, p9] -> Winning: Resolve 10

/* ==================================================================== */
/*                               fetch                                  */
/* ==================================================================== */
const fetchUrl = "https://jsonplaceholder.typicode.com/comments?postId=42";
const fetchSection = document.querySelector(".fetching pre");
fetch(fetchUrl)
    .then((response) => response.json())
    .then((data) => {
        let str = JSON.stringify(data, null, "\t");
        // console.log(data); // (5) [{...}, {...}, ...]
        // console.log(str); // [ {...}, {...}, ...]
        // fetchSection.textContent = str;
        fetchSection.textContent = data[0].email;
    })
    .catch((err) => {
        const msg = `Catch: ${err.name} ${err.message}`;
        console.log(msg);
        fetchSection.textContent = msg;
    });

/* ==================================================================== */
/*                          Load Multiple Files                         */
/* ==================================================================== */
const cssUrl1 = "./css/3_promise-color.css";
const cssUrl2 = "./css/3_promise-font.css";

// const linkCss = document.createElement("link");
// linkCss.setAttribute("rel", "stylesheet");
// linkCss.setAttribute("type", "text/css");
// linkCss.href = cssUrl1;
// document.head.appendChild(linkCss);

const p12 = new Promise((resolve, reject) => {
    const linkCss = document.createElement("link");
    linkCss.setAttribute("rel", "stylesheet");
    linkCss.setAttribute("type", "text/css");
    linkCss.addEventListener("load", (e) => {
        //console.log("Your color css loaded");
        resolve(linkCss);
    });
    linkCss.addEventListener("error", (err) => {
        console.log("Your color css is not ready");
        reject(err);
    });
    linkCss.href = cssUrl1;
    document.head.appendChild(linkCss);
});

const p13 = new Promise((resolve, reject) => {
    const linkCss = document.createElement("link");
    linkCss.setAttribute("rel", "stylesheet");
    linkCss.setAttribute("type", "text/css");
    linkCss.addEventListener("load", (e) => {
        //console.log("Your font css loaded");
        resolve(linkCss);
    });
    linkCss.addEventListener("error", (err) => {
        console.log("Your font css is not ready");
        reject(err);
    });
    linkCss.href = cssUrl2;
    document.head.appendChild(linkCss);
});

Promise.all([p12, p13])
    .then((things) => {
        //console.log("Font and Color css loaded");
        // Now page can run and use both scripts
        // it works for images or scripts
    })
    .catch((err) => console.log("Something went wrong"));

/* ==================================================================== */
/*                Combining fetch and Promise all                       */
/* ==================================================================== */
fetchArticle = document.querySelector(".promise-and-fetch article");
const fetchData1 = fetch("https://jsonplaceholder.typicode.com/comments?postId=42");
const fetchData2 = fetch("https://jsonplaceholder.typicode.com/comments?postId=43");

Promise.all([fetchData1, fetchData2])
    .then((files) => {
        files.forEach((file) => {
            processProm(file.json());
        });
    })
    .catch((err) => console.log(err));

function processProm(prom) {
    prom.then((data) => {
        const p = document.createElement("p");
        p.textContent = data[0].email;
        fetchArticle.appendChild(p);
    });
}

/* ==================================================================== */
/*                     Async Await and Promises                         */
/* ==================================================================== */

// dothings();

async function dothings() {
    // if done like this next line, catch can be removed from Promise in delay function
    // const p = await delay(1000).catch((err) => console.log("Error:", err.message));
    // or can be done like this instead
    const p = await delay(1000);
    if (p) {
        console.log("Response from Promise:", p);
    } else {
        console.log("Promise rejected");
    }
}

function delay(ms) {
    return new Promise((resolve, reject) => {
        // setTimeout(resolve, ms, "Promise result");
        setTimeout(reject, ms, new Error("bad things happened"));
    }).catch((err) => console.log("Error:", err.message));
}

/* ==================================================================== */
/*                           Error Handling                             */
/* ==================================================================== */
function pErr() {
    return new Promise((resolve, reject) => {
        // resolve("Resolution");
        // reject("Rejection");
        throw new Error("Error inside promise");
    });
}

function ftw(e) {
    console.log("ftw resolve:", e);
}

function wtf1(e) {
    if (typeof e == "object") {
        console.log("wtf1 reject", e.message);
    } else {
        console.log("wtf1 reject:", e);
    }
}

function wtf2(e) {
    console.log("wtf2 resolve:", e);
}

// pErr().then(ftw).catch(wtf1);

/* ==================================================================== */
/*                           finally Method                             */
/* ==================================================================== */

const prom14 = new Promise((resolve, reject) => {
    const num = Math.random();
    if (num > 0.5) {
        // resolve("good thing " + num);
    } else {
        // reject("bad thing " + num);
    }
});

prom14
    .then(console.log)
    .catch(console.log)
    .finally(() => console.log("Finally"));
