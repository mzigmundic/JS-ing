// Introduction to DOM
// Finding HTML elements
// Creating content with JS
// Traversing the DOM
// Attributes in JS
// Styling with JS
// Document Fragments
// Nodes Vs Element Nodes
// NodeList Vs HTMLCollection
// Adjacent DOM Manipulation

const movies = ["Die Hard", "Terminator", "Pulp Fiction", "Mister Bean"];

/* ==================================================================== */
/*                        Introduction to DOM                           */
/* ==================================================================== */
// document.getElementById("id")
// element.textContent
// element.innerText

const movieString = movies.join(", ");

const p1 = document.getElementById("paragraph1");
const p2 = document.getElementById("paragraph2");

p1.textContent = movieString;
p2.innerText = movieString;

/* ==================================================================== */
/*                        Finding HTML elements                         */
/* ==================================================================== */
// document.getElementById("id")
// document.querySelector("some complex selector")
// document.querySelectorAll("some complex selector")

const p3 = document.getElementById("paragraph3");
const para1 = document.querySelector("main .finding-html-elements .para-1");

p3.textContent = "Paragraph 3";
para1.textContent = "Paragraph para 1";

const paras = document.querySelectorAll("main .finding-html-elements p");
// console.log(paras); // NodeList(3) [p#p, p.p, p.p]

// Looping through NodeList
for (let i = 0; i < paras.length; i++) {
    // console.log(paras[i]);
}

// This also works
paras.forEach((p) => {
    // console.log(p);
});

/* ==================================================================== */
/*                       Creating content with JS                       */
/* ==================================================================== */
// document.createElement("Element");
// document.createTextNode("Some Text");
// parent.appendChild("Some Element");
// parent.removeChild("Some Element");
// parent.insertBefore(newNode, refNode) - insert a node
// parent.replaceChild(new, old) - replace a node
// node.cloneNode(boolean) - copy a node and optionaly its children

const sectionCreate = document.querySelector(".creating-content-with-js");
const secHead = sectionCreate.querySelector("h2");
const p4 = sectionCreate.querySelector("p");
secHead.textContent = "Creating contnet with JS";
p4.innerHTML = "List of <strong>movies</strong>:";
sectionCreate.removeChild(p4); // Remove paragraph

const movieList = document.createElement("ul"); // Create ul
sectionCreate.appendChild(movieList); // Append ul
movies.forEach((movie) => {
    const li = document.createElement("li"); // Create li
    const txt = document.createTextNode(movie); // Create text node
    li.appendChild(txt); // Append text
    movieList.appendChild(li); // Append li
});
const newNode = document.createElement("li");
newNode.textContent = "Predator";
movieList.insertBefore(newNode, movieList.children[2]); // Insert before Pulp Fiction
const newNode2 = document.createElement("li");
newNode2.textContent = "Taxi Driver";
movieList.replaceChild(newNode2, movieList.children[2]); // Replace Predator

const copyOfList1 = movieList.cloneNode(false); // empty ul
const copyOfList2 = movieList.cloneNode(true); //  ul with lis

/* ==================================================================== */
/*                         Traversing the DOM                           */
/* ==================================================================== */
// parent.children - HTMLCollection of elements
// parent.childNodes - NodeList of nodes
// parent.firstElementChild - 1 element node
// parent.lastElementChild - 1 element node
// parent.firstChild - 1 node
// parent.firstChild - 1 node
// parent.contains - boolean
// node.previousElementSibling - 1 element node
// node.nextElementSibling - 1 element node
// node.nextSibling - 1 node
// node.previousSibling - 1 node
// node.parentNode - 1 element node
// node.parentElement - 1 element node

const traversingList = document.querySelector(".traversing-dom ul"); // ul with 5 lis
const listChildren = traversingList.children; // HTMLCollection (5)
const listChildNodes = traversingList.childNodes; // NodeList (11)

const firstMovie = traversingList.firstElementChild; // li Movie 1
const lastMovie = traversingList.lastElementChild; // li Movie 5
const firstChild = traversingList.firstChild; // #text
const lastChild = traversingList.lastChild; // #text

const firstMovieNextElSib = firstMovie.nextElementSibling; // li Movie 2
const lastMoviePrevElSib = lastMovie.previousElementSibling; // li Movie 4
const firstMovieNextSib = firstMovie.nextSibling; // #text
const lastMoviePrevSib = firstMovie.previousSibling; // #text

const firstMovieText1 = firstMovie.innerText; // Movie 1
const firstMovieText2 = firstMovie.textContent; // Movie 1
const firstMovieText4 = firstMovie.childNodes[0].nodeValue; // Movie 1
const firstMovieText3 = firstMovie.firstChild.nodeValue; // Movie 1

const parent1OfFirstMovie = firstMovie.parentNode; // ul
const parent2OfFirstMovie = firstMovie.parentElement; // ul

const bool1 = traversingList.contains(firstMovie); // true - doesn't have to be direct descendant

/* ==================================================================== */
/*                          Attributes in JS                            */
/* ==================================================================== */
// element.getAttribute("atr-name")
// element.setAttribute("atr-name", "atr-value")

const sectionAttributes = document.querySelector(".attributes");
sectionAttributes.setAttribute("title", "My Movies"); // Sets title to section
sectionAttributes.setAttribute("id", "sec-att-id"); // Sets id to section
sectionAttributes.title = "My Movies"; // Shorthand
sectionAttributes.id = "sec-att-id"; // Shorthand
// console.log(sectionAttributes.getAttribute("title")); // My Movies

const elementsWithAttr = document.querySelectorAll("[data-year]"); // NodeList (4) [li, li...]

/* ==================================================================== */
/*                           Styling with JS                            */
/* ==================================================================== */
// element.className // class-1 class-2
// element.classList // DOMTokenList(2)
// element.classList.add("class")
// element.className.remove("class")
// element.className.toggle("class")
// element.style.propName = value
// element.style.cssText = "css rules"
// window.getComputedStyle(element)

const stylingSection = document.querySelector(".styling-js");
const stylingH2 = stylingSection.querySelector("h2");
const stylingList = stylingSection.querySelector("ul");
const stylingP = stylingSection.querySelector("p");

stylingH2.className = "class-2"; // Set only class to element
stylingH2.classList.add("class-3"); // Add class
stylingH2.classList.remove("class-2"); // Remove class

stylingList.classList.toggle("class-2"); // Toggle class
stylingList.style.listStyle = "none"; // Change one property
stylingList.style.textDecoration = "underline"; // Change one property

stylingP.style.cssText = "color: yellow; padding-left: 20px;"; // Multiple properties

const winStyle = window.getComputedStyle(stylingList); // Get all styles applied on element
// console.log(winStyle); // CSSStyleDecoration {...}
/*for (let p in winStyle) {
    if (isNaN(Number(p))) {
        console.log(p + ": " + winStyle[p]); // Gives every css rule applied
    }
}
*/
// console.log(winStyle.getPropertyValue("color")); // rgb(106, 90, 205);

/* ==================================================================== */
/*                        Document Fragments                            */
/* ==================================================================== */
// const df = new DocumentFragment();
const docFragMovies = document.querySelector(".doc-frag-list");

// Not good
movies.forEach((m) => {
    const li = document.createElement("li");
    li.textContent = m;
    // docFragMovies.appendChild(li); -> this would repaint every time when new item added
});

// This is good
const docFragment = new DocumentFragment(); // Create new DocumentFragment instance
movies.forEach((m) => {
    const li = document.createElement("li");
    li.textContent = m;
    docFragment.appendChild(li);
});
docFragMovies.appendChild(docFragment); // Append document fragment to wherever you want

/* ==================================================================== */
/*                       Nodes Vs Element Nodes                         */
/* ==================================================================== */
// Node Types:
// 1 - Element Node
// 3 - Text Node
// 8 - Comment Node
// 9 - Document Node
// 10 - Document Type Node <!DOCTYPE html> -> First child of Document Node
// 11 - Document Fragment Node
// Depricated:
// 2 - Attribute Node
// 4 - CData Node

const secNodesVsElms = document.querySelector(".nodes-vs-elements"); // 1 - <section></section>
const secFirstChild = secNodesVsElms.firstChild; // 3 - #text
const comment = secNodesVsElms.firstElementChild.nextSibling.nextSibling; // 8 - <!-- Comment -->
const myDoc = document; // 9 - #document
const myDocType = myDoc.firstChild; // 10 - <!DOCTYPE html>
const dfrag = new DocumentFragment(); // 11 - #document-fragment

/* ==================================================================== */
/*                      NodeList Vs HTMLCollection                      */
/* ==================================================================== */
// NodeList has forEach method, HTMLCollection does not
// NodeList -> any nodes -> static, except element.childNodes -> live
// HTMLCollection -> elements only -> live

// NodeLists:
// document.querySelectorAll()
// document.body.childNodes
//
// HTMLCollections:
// document.getElementsByClassName("class")
// document.getElementsByTagName("section");
// document.getElementsByTagNameNS("xml", "td");
// document.children

const secNLvsHC = document.querySelector(".nodelist-vs-htmlcollection");
const myDoc2 = secNLvsHC.ownerDocument; // #document - same as document
const myHtml = document.documentElement; // <html>...</html
const myBody = document.body; // <body>...</body>
const myHead = document.head; // <head>...</head>

/* ==================================================================== */
/*                     Adjacent DOM Manipulation                        */
/* ==================================================================== */
// insertAdjacentHTML("position", html)
// insertAdjacentElement("position", element)
// insertAdjacentText("position", text)
// positions: beforebegin, afterbegin, beforeend, afterend

const sectionAdjacent = document.querySelector(".adjacent-dom");
const adjacentPara1 = sectionAdjacent.querySelector(".p-1");
const adjacentPara2 = sectionAdjacent.querySelector(".p-2");
const adjacentPara3 = sectionAdjacent.querySelector(".p-3");

const myTemp = `<span>The <strong>Best</strong> Way</span>`;
adjacentPara1.insertAdjacentHTML("beforebegin", myTemp);
adjacentPara1.insertAdjacentHTML("afterbegin", myTemp);
adjacentPara1.insertAdjacentHTML("beforeend", myTemp);
adjacentPara1.insertAdjacentHTML("afterend", myTemp);

const mySpan = document.createElement("span");
mySpan.innerText = "Span text";
adjacentPara2.insertAdjacentElement("beforebegin", mySpan);
adjacentPara2.insertAdjacentElement("afterbegin", mySpan);
adjacentPara2.insertAdjacentElement("beforeend", mySpan);
adjacentPara2.insertAdjacentElement("afterend", mySpan);

const myText = "Some awesome text";
adjacentPara3.insertAdjacentText("beforebegin", myText);
adjacentPara3.insertAdjacentText("afterbegin", myText);
adjacentPara3.insertAdjacentText("beforeend", myText);
adjacentPara3.insertAdjacentText("afterend", myText);

// console.log(sectionAdjacent);
