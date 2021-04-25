// Introduction to Events
// Event Bubbling and Propagation
// Event target Vs currentTarget
// Built-in handleEvent method
// Keyboard Events
// MouseEnter & MouseLeave vs MouseOver & MouseOut vs MouseMove
// Creating and Dispatching Custom Events
// Touch Events on Mobile Devices
// Choosing Event Targets
// Removing Event Listeners
// Building Right Click Menus
// Handling Errors
// Modifying Text As You Type
// client vs page vs screen vs offset
// Form Events

/* ==================================================================== */
/*                       Introduction to Events                         */
/* ==================================================================== */
// object.addEventListeners("event-type", function);
// document.addEventListener("DOMContentLoaded", init);

const introPara = document.getElementById("intro-para");
const introBtn = document.getElementById("intro-btn");
const introLink = document.getElementById("intro-link");
const introInput1 = document.getElementById("intro-input-1");
const introInput2 = document.getElementById("intro-input-2");
const introInput3 = document.getElementById("intro-input-3");

introPara.addEventListener("click", (event) => {
    console.log(event.type); // click
    console.log(event.target); // <p>...</p>
    console.log(event.currentTarget); // <p>...</p>
});
introBtn.addEventListener("click", (event) => {
    console.log(event.type, event.target);
});
introLink.addEventListener("click", (event) => {
    event.preventDefault(); // stop the link from being followed
    console.log(event.type, event.target);
});
introInput1.addEventListener("input", (event) => {
    console.log("Input", event.target.value);
});
introInput2.addEventListener("change", (event) => {
    console.log("Change", event.target.value);
});
introInput3.addEventListener("focus", () => {
    console.log("Focused");
});
introInput3.addEventListener("blur", () => {
    console.log("Unfocus (Blur)");
});

/* ==================================================================== */
/*                  Event Bubbling and Propagation                      */
/* ==================================================================== */
// element.addEventListener("event-type", function, useCapture)
const ebpA = document.getElementById("ebp-a");
const ebpD = document.getElementById("ebp-d");
const ebpP = document.getElementById("ebp-p");
const ebpS = document.getElementById("ebp-s");

ebpD.addEventListener("click", handleDivEbp);
[ebpA, ebpD, ebpP, ebpS].forEach((elm) => elm.addEventListener("click", highlightEbp));

function handleDivEbp(event) {
    event.stopImmediatePropagation(); // get rid of other click listeners that are on this object
    console.log("I am in a div");
}

function highlightEbp(event) {
    event.stopPropagation(); // stops the event from bubbling through the chain
    tar = event.currentTarget;
    tar.classList.add("gold");
    reset(tar);
}

function reset(element) {
    setTimeout(() => element.classList.remove("gold"), 1500);
}

/* ==================================================================== */
/*                    Event target Vs currentTarget                     */
/* ==================================================================== */
document.getElementById("tvct-a").addEventListener("click", handleClickTvct);
document.getElementById("tvct-d").addEventListener("click", handleClickTvct);
document.getElementById("tvct-s").addEventListener("click", handleClickTvct);

function handleClickTvct(event) {
    console.log("Target:" + event.target.tagName + "\tCurrentTarget:" + event.currentTarget.tagName);
}

/* ==================================================================== */
/*                     Built-in handleEvent method                      */
/* ==================================================================== */
const objHem = {
    init: function () {
        const hemBtn = document.getElementById("hem-btn");
        hemBtn.addEventListener("click", this);
        hemBtn.addEventListener("focus", this);
        hemBtn.addEventListener("blur", this);
    },
    handleEvent: function (event) {
        switch (event.type) {
            case "click":
                this.someFunction(event);
                break;
            case "focus":
                this.someFunction(event);
                break;
            case "blur":
                this.someFunction(event);
                break;
        }
    },
    someFunction: function (event) {
        console.log("Button was " + event.type + "ed");
    },
};

objHem.init();

/* ==================================================================== */
/*                            Keyboard Events                           */
/* ==================================================================== */
// event.char || event.charCode || ev.which
// keydown keyup keypress

const inputKE = document.getElementById("ke-input");
inputKE.addEventListener("keydown", anyKeyKE);
//document.body.addEventListener("keydown", anyKeyKE);

function anyKeyKE(event) {
    const char = event.char || event.charCode || event.which;
    let str = String.fromCharCode(char);
    //console.log(char, str, event.target.tagName); // 65 "A" "INPUT"
    switch (char) {
        case 37:
            console.log("Dolje");
            break;
        case 38:
            console.log("Gore");
            break;
        case 39:
            console.log("Desno");
            break;
        case 40:
            console.log("Lijevo");
            break;
    }
}

/* ==================================================================== */
/*      MouseEnter & MouseLeave vs MouseOver & MouseOut vs MouseMove    */
/* ==================================================================== */
let mouseCountEnter = 0;
let mouseCountOver = 0;
let mouseCountMove = 0;

const mouseEnter = document.querySelector(".mouse-enter");
const mouseOver = document.querySelector(".mouse-over");
const mouseMove = document.querySelector(".mouse-move");

const mouseEnterSpan = mouseEnter.querySelector("span");
const mouseOverSpan = mouseOver.querySelector("span");
const mouseMoveSpan = mouseMove.querySelector("span");

mouseEnter.addEventListener("mouseenter", (ev) => {
    mouseCountEnter++;
    mouseEnterSpan.innerText = mouseCountEnter;
});

mouseOver.addEventListener("mouseover", (ev) => {
    mouseCountOver++;
    mouseOverSpan.innerText = mouseCountOver;
});

mouseMove.addEventListener("mousemove", (ev) => {
    mouseCountMove++;
    mouseMoveSpan.innerText = mouseCountMove;
});

/* ==================================================================== */
/*                 Creating and Dispatching Custom Events               */
/* ==================================================================== */
// 1. const event = new Event("explode");
// 2. const event = new CustomEvent("explode", {detail:{speed:20, volume:40}})

const born = new Event("born");
const died = new CustomEvent("died", { detail: { time: Date.now() } });

const custArticle = document.querySelector(".custom-events article");
addParagraphCustom(custArticle, "This is custom paragraph");
addParagraphCustom(custArticle, "This is another custom paragraph");
custArticle.addEventListener("click", (event) => {
    removeParagraphCustom(custArticle, custArticle.firstElementChild);
});

function addParagraphCustom(parent, txt) {
    const p = document.createElement("p");
    p.textContent = txt;
    p.addEventListener("born", wasBorn);
    p.addEventListener("died", hasDied);
    parent.appendChild(p);
    p.dispatchEvent(born);
}

function removeParagraphCustom(parent, p) {
    parent.removeChild(p);
    p.dispatchEvent(died);
}

function wasBorn(event) {
    // console.log(event.type, event.target);
}

function hasDied(event) {
    console.log(event.type, event.target, event.detail.time);
    event.target.removeEventListener("born", wasBorn);
    event.target.removeEventListener("died", hasDied);
}

/* ==================================================================== */
/*                     Touch Events on Mobile Devices                   */
/* ==================================================================== */
// Touch events - touchstart, touchend, touchmove, touchcancel
// There is NO tap, doubletap, swipe, swipeleft, swiperight, rotate, pinch, or zoom
// You would have to create those events yourself by connecting to the touch events.
// work on devices that are touch capable
// No error on other devices because 'touchstart' is just a name like winlottery
const touchParagraph = document.querySelector(".touch-events p");
touchParagraph.addEventListener("touchstart", f);
touchParagraph.addEventListener("touchend", f);
touchParagraph.addEventListener("touchmove", f);

function f(event) {
    console.log(event.touches, event.type);
}

/* ==================================================================== */
/*                         Choosing Event Targets                       */
/* ==================================================================== */
// 1. Placing event listener on a list
// 2. Placing event listener on every list item
const listCh = document.querySelector(".list-view-ch");
const listItemCh = listCh.querySelectorAll(".list-item-ch");
const spans = listCh.querySelectorAll(".list-item-ch span");

listCh.addEventListener("click", choosingClicked1);
function choosingClicked1(e) {
    console.log("Target: " + e.target.tagName + "; CurrentTarget: " + e.currentTarget.tagName);
    let li = e.target; // asuming that it is LI
    if (e.target.tagName == "SPAN") {
        li = e.target.parentElement;
    }
    console.log(li);
    const id = li.getAttribute("data-id");
    const name = li.getAttribute("data-name");
    const h4 = document.querySelector(".choosing-event-targets h4");
    h4.textContent = `${id}: ${name}`;
}

listItemCh.forEach((li) => {
    //li.addEventListener("click", choosingClicked2);
});
function choosingClicked2(e) {
    console.log("Target: " + e.target.tagName + "; CurrentTarget: " + e.currentTarget.tagName);
    const id = e.currentTarget.getAttribute("data-id");
    const name = e.currentTarget.getAttribute("data-name");
    const h4 = document.querySelector(".choosing-event-targets h4");
    h4.textContent = `${id}: ${name}`;
}

/* ==================================================================== */
/*                        Removing Event Listeners                      */
/* ==================================================================== */
const startRm = document.querySelector(".start-rm");
const listRm = document.querySelector(".list-view-rm");
const listItemRm = listRm.querySelectorAll(".list-item-rm");

startRm.addEventListener("click", () => setInterval(addItemRm, 700));
listItemRm.forEach((li) => li.addEventListener("click", removerRm));

function removerRm(event) {
    const li = event.currentTarget;
    li.removeEventListener("click", removerRm);
    li.parentElement.removeChild(this);
}

function addItemRm() {
    const li = document.createElement("li");
    li.className = "list-item-rm";
    li.textContent = "Post timestamp" + Date.now();
    li.addEventListener("click", removerRm);
    listRm.appendChild(li);
}

/* ==================================================================== */
/*                       Building Right Click Menus                     */
/* ==================================================================== */
// contextmenu
const menuRC = document.querySelector(".right-click-menu");
menuRC.querySelectorAll(".right-click-item").forEach((li) => {
    li.addEventListener("click", setColor);
});
const boxRC = document.querySelector(".right-click-box");

boxRC.addEventListener("contextmenu", showMenu);
document.addEventListener("click", (e) => {
    if (!menuRC.contains(e.target)) {
        hideMenu();
    }
});

function showMenu(e) {
    e.preventDefault();
    console.log(e.pageX, e.pageY);
    menuRC.style.top = `${e.pageY - 15}px`;
    menuRC.style.left = `${e.pageX}px`;
    menuRC.classList.remove("off");
}

function hideMenu() {
    menuRC.classList.add("off");
}

function setColor(e) {
    hideMenu();
    const color = e.target.id;
    boxRC.style.backgroundColor = color;
}

/* ==================================================================== */
/*                           Handling Errors                            */
/* ==================================================================== */
// onerror
// error
/*
window.onerror = (msg, url, line, col, err) => {
    const message = `${msg}\n${url}\n${line}\n${col}\n${err}`;
    console.error(message);
};
window.addEventListener("error", handleError);
bla;
function handleError(ev) {
    const message = `At line ${ev.lineno}: ${ev.message}`;
    console.error(message);
    ev.preventDefault();
}
*/

/* ==================================================================== */
/*                client vs page vs screen vs offset                    */
/* ==================================================================== */
const positionArticle = document.querySelector(".client-page-screen-offset article");
const positionHeadX = document.querySelector(".cpsoX");
const positionHeadY = document.querySelector(".cpsoY");
positionArticle.addEventListener("click", posFunction);

function posFunction(e) {
    const strX = `clientX: ${e.clientX}; pageX: ${e.pageX}; screenX: ${e.screenX}; offsetX: ${e.offsetX}`;
    const strY = `clientY: ${e.clientY}; pageY: ${e.pageY}; screenY: ${e.screenY}; offsetY: ${e.offsetY}`;
    positionHeadX.textContent = strX;
    positionHeadY.textContent = strY;
}

/* ==================================================================== */
/*                       Form Events                         */
/* ==================================================================== */
// We can put submit event on the form, or click event on the button
// input - every time you are typing
// change - making change to value, then leaving the element
// focus / blur - you know
// click - if mouseup -> mousedown happen on same element
// mousedown -> focus -> mouseup -> click
// keydown -> keypress -> input -> keyup  (during keydown and keypress -> value is not registred yet)
// change -> blur -> focus (on another element)

// Because there is a name attr on form, we can do like this,
// if there was an id we could use getElementById
const fForm = document.formSample;
const fName = document.getElementById("name");
const fEmail = document.getElementById("email");
const fPass = document.getElementById("password");
const fPhone = document.getElementById("password");
const fLang = document.getElementById("lang");
const fSubmit = document.getElementById("form-submit");

fName.addEventListener("change", fHandleChange);
fName.addEventListener("input", fHandleInput);
fName.addEventListener("keypress", fHandleKey);
fName.addEventListener("keydown", fHandleKey);
fName.addEventListener("keyup", fHandleKey);
fName.addEventListener("focus", fHandleFocus);
fName.addEventListener("blur", fHandleBlur);
fName.addEventListener("click", fHandleMouse);
fName.addEventListener("mousedown", fHandleMouse);
fName.addEventListener("mouseup", fHandleMouse);

fEmail.addEventListener("focus", fHandleFocus);
fEmail.addEventListener("blur", fHandleBlur);
fPass.addEventListener("focus", fHandleFocus);
fPass.addEventListener("blur", fHandleBlur);
fPhone.addEventListener("focus", fHandleFocus);
fPhone.addEventListener("blur", fHandleBlur);

fLang.addEventListener("change", fHandleChange);
fLang.addEventListener("input", fHandleInput);

fForm.addEventListener("submit", fHandleSend);
fSubmit.addEventListener("click", fHandleSend);

document.addEventListener("keypress", (e) => {
    // console.log("Keypress on document", { e });
});

function logEvent(e) {
    console.log(e.type.toUpperCase(), e.target.id, e.target.value);
}

function fHandleInput(e) {
    logEvent(e);
}

function fHandleChange(e) {
    logEvent(e);
}

function fHandleFocus(e) {
    logEvent(e);
}

function fHandleBlur(e) {
    logEvent(e);
}

function fHandleKey(e) {
    logEvent(e);
    const code = e.keyCode || e.which;
    if (code == 10 || code == 13) {
        // return key or enter key
        fHandleSend(e);
    }
}

function fHandleMouse(e) {
    logEvent(e);
}

function fHandleSend(e) {
    e.preventDefault();
    logEvent(e);
    console.log("Form Submited");
}
