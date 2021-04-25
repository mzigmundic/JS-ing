const subBtn = document.getElementById("submit-number");
const inputNumber = document.getElementById("number");
const prevGuesses = document.getElementById("prev-guesses");
const message = document.getElementById("message");

let randomNumber = Math.floor(Math.random() * 1000) + 1;
let numberOfGuesses = 0;

subBtn.disabled = true;
subBtn.addEventListener("click", makeAGuess);
inputNumber.addEventListener("input", checkInput);

function checkInput(e) {
    if (e.target.value == "") {
        subBtn.disabled = true;
    } else {
        subBtn.disabled = false;
    }
}

function makeAGuess() {
    const aGuess = Number(inputNumber.value);
    numberOfGuesses++;
    inputNumber.value = "";
    prevGuesses.textContent += " " + aGuess;
    subBtn.disabled = true;

    if (aGuess === randomNumber) {
        message.textContent = "You Win!!!";
        message.style.backgroundColor = "green";
        gameOver();
    } else if (numberOfGuesses === 10) {
        message.textContent = "Game over!!!";
        gameOver();
    } else {
        checkHowMuchWrong(aGuess);
        inputNumber.focus();
    }
}

function checkHowMuchWrong(guess) {
    if (guess < randomNumber) {
        if (randomNumber - guess > 250) {
            message.textContent = "Cold as fuck, low!";
            message.style.backgroundColor = "blue";
        } else if (randomNumber - guess > 100) {
            message.textContent = "Cold, low";
            message.style.backgroundColor = "cyan";
        } else if (randomNumber - guess > 50) {
            message.textContent = "Warmish, low";
            message.style.backgroundColor = "yellow";
        } else if (randomNumber - guess > 20) {
            message.textContent = "Warm, low";
            message.style.backgroundColor = "orange";
        } else if (randomNumber - guess > 5) {
            message.textContent = "Hot, low";
            message.style.backgroundColor = "orangered";
        } else {
            message.textContent = "Hot as fuck, low";
            message.style.backgroundColor = "red";
        }
    }
    if (guess > randomNumber) {
        if (guess - randomNumber > 250) {
            message.textContent = "Cold as fuck, high!";
            message.style.backgroundColor = "blue";
        } else if (guess - randomNumber > 100) {
            message.textContent = "Cold, high";
            message.style.backgroundColor = "cyan";
        } else if (guess - randomNumber > 50) {
            message.textContent = "Warmish, high";
            message.style.backgroundColor = "yellow";
        } else if (guess - randomNumber > 20) {
            message.textContent = "Warm, high";
            message.style.backgroundColor = "orange";
        } else if (guess - randomNumber > 5) {
            message.textContent = "Hot, high";
            message.style.backgroundColor = "orangered";
        } else {
            message.textContent = "Hot as fuck, high";
            message.style.backgroundColor = "red";
        }
    }
}

function gameOver() {
    inputNumber.disabled = true;
    subBtn.disabled = true;
    addResetButton();
}

function addResetButton() {
    const resetBtn = document.createElement("button");
    resetBtn.id = "reset-btn";
    resetBtn.textContent = "Restart Game";
    document.body.appendChild(resetBtn);
    resetBtn.addEventListener("click", resetGame);
}

function resetGame() {
    numberOfGuesses = 0;
    inputNumber.textContent = "";
    prevGuesses.textContent = "Previous Guesses:";
    message.textContent = "";

    message.style.backgroundColor = "white";
    randomNumber = Math.floor(Math.random() * 100) + 1;

    document.getElementById("reset-btn").remove();
    inputNumber.disabled = false;
}
