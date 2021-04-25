// fetch Method
// fetch with Request and Headers Object
// Sending AJAX Form Data to the Server with fetch
// Real World Example
// Upload Files with fetch
// fetching and inserting new HTML
// FormData Object
// Using FormData to Parse Forms
// Async Await with fetch

/* ==================================================================== */
/*                            fetch Method                              */
/* ==================================================================== */

const fetchOutput = document.querySelector(".fetch-method article");
const root1 = "https://jsonplaceholder.typicode.com";
const id1 = Math.floor(Math.random() * 10) + 1;
const uri1 = root1 + "/users/" + id1;
//console.log("Fetch: " + uri1);

fetch(uri1)
    .then((res) => {
        if (res.status == 200) {
            return res.json();
        } else {
            throw new Error("Response status is not OK");
        }
    })
    .then((data) => {
        const str = JSON.stringify(data);
        fetchOutput.textContent = str;
    })
    .catch((err) => console.log(err.message));

// res -> Response Object
// data -> Object
// str -> JSON string

/* ==================================================================== */
/*                fetch with Request and Headers Object                 */
/* ==================================================================== */
// new Request(uri);
// new Request(uri, options);
// options - method, headers, body, mode
// methods: GET, POST, PUT, DELETE, OPTIONS

// new Headers()
// headers.append(name, value)
// Content-Type, Content-Length, Accept, Accept-Language,
// X-Requested-With, User-Agent

const uri2 = "https://jsonplaceholder.typicode.com/users";

const header1 = new Headers();
header1.append("Accept", "application/json");
const request1 = new Request(uri2, {
    method: "GET",
    headers: header1,
    mode: "cors",
});

fetch(request1)
    .then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error("Response status not ok");
        }
    })
    .then((jsonData) => {
        // console.log(jsonData);
    })
    .catch((err) => {
        console.log("Error: ", err.message);
    });

/* ==================================================================== */
/*          Sending AJAX Form Data to the Server with fetch             */
/* ==================================================================== */
const root3 = "https://jsonplaceholder.typicode.com";
const uri3 = root3 + "/posts";

const formdata = new FormData();
formdata.append("userId", 3);
formdata.append("title", "Title yea");
formdata.append("body", "This is the body text of the post");

const request3 = new Request(uri3, {
    method: "POST",
    mode: "cors",
    body: formdata,
});

fetch(request3)
    .then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error("Response status not ok");
        }
    })
    .then((jsonData) => {
        // console.log(jsonData);
    })
    .catch((err) => {
        console.log("Error: ", err.message);
    });

/* ==================================================================== */
/*                          Real World Example                          */
/* ==================================================================== */
const uri4 = "https://jsonplaceholder.typicode.com/users";
const realUsers = document.getElementById("users");

const request4 = new Request(uri4, {
    method: "GET",
    mode: "cors",
});

fetch(request4)
    .then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error("Response status not ok");
        }
    })
    .then((jsonData) => {
        const df = new DocumentFragment();
        jsonData.forEach((user) => {
            const li = document.createElement("li");
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");
            p1.textContent = user.name;
            p2.textContent = user.username + " - " + user.email;
            p1.className = "name";
            p2.className = "info";
            li.appendChild(p1);
            li.appendChild(p2);
            df.appendChild(li);
        });
        realUsers.appendChild(df);
    })
    .catch((err) => {
        console.log("Error: ", err.message);
    });

/* ==================================================================== */
/*                      Upload Files with fetch                         */
/* ==================================================================== */
const uri5 = "https://jsonplaceholder.typicode.com/posts";
document.getElementById("upload-submit").addEventListener("click", upload);
const uploadOutput = document.querySelector(".fetch-upload article");

function upload(e) {
    e.preventDefault();
    const header = new Headers();
    header.append("Accept", "application/json");
    const formdata = new FormData();
    const myFile = document.getElementById("avatar_img").files[0];
    formdata.append("user-id", document.getElementById("user_id").value);
    formdata.append("avatar", myFile, "avatar.png");

    const req = new Request(uri5, {
        method: "POST",
        headers: header,
        mode: "no-cors",
        body: formdata,
    });

    fetch(req)
        .then((res) => {
            uploadOutput.textContent = "Response recieved from server";
        })
        .catch((err) => {
            console.log("Error: ", err.message);
        });
}

/* ==================================================================== */
/*                  fetching and inserting new HTML                     */
/* ==================================================================== */
fetchHTML = document.querySelector(".fetching-html button");
fetchedArticle = document.querySelector(".fetching-html article");
fetchHTML.addEventListener("click", getDataHTML);

function getDataHTML(e) {
    e.preventDefault();
    const url = "./css/4_html-snippet.html";
    const req = new Request(url, {
        method: "GET",
    });

    fetch(req)
        .then((res) => res.text())
        .then((text) => {
            // Version 1 - cannot manipulate content and peaces
            // fetchedArticle.innerHTML += text;
            //
            // Version 2 - new document created - whole html with head and body
            const doc = new DOMParser().parseFromString(text, "text/html");
            // console.log(doc); // #document
            const div = doc.body.firstElementChild;
            // fetchedArticle.appendChild(div);
            //
            // Version 3 - skips creating document - makes just fragment - div
            const frag = document.createRange().createContextualFragment(text);
            // console.log(frag); // #document-fragment
            fetchedArticle.appendChild(frag);
        })
        .catch((err) => console.log(err.message));
}

/* ==================================================================== */
/*                            FormData Object                           */
/* ==================================================================== */
const fdata = new FormData();
fdata.append("name", "Bubba");
fdata.append("id", 12);
fdata.append("created_at", Date.now());

// console.log(Array.from(fdata)); // (3) [Array(2), Array(2), Array(2)]

fdOutput = document.querySelector(".form-data pre");
fdOutput.textContent = JSON.stringify(Array.from(fdata), "\t", 2);

// If you want to send it to the server
// const url = "http://www.example.com";
// const req = new Request({
//     url: url,
//     body: fdata
// })
// fetch(req).then( res => res.json() ).then( data => {} ).catch( err => {} )

/* ==================================================================== */
/*                  Using FormData to Parse Forms                       */
/* ==================================================================== */
// collects everything from form that has a name attribute
const submitFormBtn = document.getElementById("form-data-form");
submitFormBtn.addEventListener("submit", handleFormData);

function handleFormData(e) {
    e.preventDefault();
    const myForm = e.target;
    const fd = new FormData(myForm);

    // add more things that were not in the form
    fd.append("api-key", "myCoolApiKey");

    for (let key of fd.keys()) {
        // console.log(key, fd.get(key));
    }

    // if you want to send json - in req -> body: instead of fd put json
    // create new Headers() and append content-type app/json
    const json = convertFDtoJSON(fd);
    console.log(json);

    const url = "https://jsonplaceholder.typicode.com/users";
    const head = new Headers();
    head.append("Content-type", "application/json");
    const req = new Request(url, {
        headers: head,
        body: json,
        method: "POST",
    });
    fetch(req)
        .then((res) => res.json())
        .then((data) => console.log("Response from server:\n", data))
        .catch(console.log);
}

function convertFDtoJSON(formdata) {
    const obj = {};
    for (let key of formdata.keys()) {
        obj[key] = formdata.get(key);
    }
    return JSON.stringify(obj);
}

/* ==================================================================== */
/*                     Async Await with fetch                           */
/* ==================================================================== */
(async function f() {
    const badUrl = "http://";
    const goodUrl = "https://jsonplaceholder.typicode.com/posts";
    const url = Math.round(Math.random()) ? badUrl : goodUrl;

    const data = await (await fetch(url).catch(handleErrorF)).json();
    if (data.code && data.code == 400) {
        // problem - do nothing just return
        return;
    } else {
        // console.log(data);
    }
})();

function handleErrorF(err) {
    const resp = new Response(
        JSON.stringify({
            code: 400,
            message: "Stupid network failure",
        })
    );
    return resp;
}
