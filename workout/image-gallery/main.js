const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

init();

function init() {
    setThumbImages();
    setEventListeners();
}

function setThumbImages() {
    for (let i = 1; i <= 5; i++) {
        const newImage = document.createElement("img");
        newImage.setAttribute("src", `./images/pic${i}.jpg`);
        thumbBar.appendChild(newImage);
    }
}

function setEventListeners() {
    thumbBar.addEventListener("click", setMainImage);
    btn.addEventListener("click", handleOverlay);
}

function setMainImage(e) {
    displayedImage.src = e.target.src;
}

function handleOverlay(e) {
    if (e.target.classList.contains("dark")) {
        e.target.classList.remove("dark");
        e.target.classList.add("light");
        e.target.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
        e.target.classList.remove("light");
        e.target.classList.add("dark");
        e.target.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}
