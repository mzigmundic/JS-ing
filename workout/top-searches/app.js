const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.getElementById("list");

const searches = [];
init();

function init() {
    input.addEventListener("input", checkInput);
    submit.disabled = true;
    submit.addEventListener("click", addItem);
}

function checkInput() {
    if (input.value === "") {
        submit.disabled = true;
    } else {
        submit.disabled = false;
    }
}

function addItem() {
    searches.push(input.value);
    if (searches.length > 5) {
        searches.shift();
    }
    updateUI();
}

function updateUI() {
    list.innerHTML = "";
    input.value = "";
    for (let i = 0; i < searches.length; i++) {
        const item = document.createElement("li");
        item.textContent = searches[i];
        list.appendChild(item);
    }
    submit.disabled = true;
    input.focus();
}
