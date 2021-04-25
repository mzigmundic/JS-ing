const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

function random(min, max) {
    return Math.random() * (max - min + 1) + min;
}

function Human(x, y, vX, vY, color, size, infected = false) {
    this.x = x;
    this.y = y;
    this.vX = vX;
    this.vY = vY;
    this.color = color;
    this.size = size;
    this.infected = infected;
}

Human.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
};

Human.prototype.update = function () {
    if (this.x + this.size >= width) {
        this.vX = -this.vX;
    }
    if (this.x - this.size <= 0) {
        this.vX = -this.vX;
    }
    if (this.y + this.size >= height) {
        this.vY = -this.vY;
    }
    if (this.y - this.size <= 0) {
        this.vY = -this.vY;
    }
    this.x += this.vX;
    this.y += this.vY;
};

Human.prototype.detectEncounter = function () {
    for (let i = 0; i < population.length; i++) {
        if (!(this === population[i])) {
            const dx = this.x - population[i].x;
            const dy = this.y - population[i].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + population[i].size) {
                if (this.infected || population[i].infected) {
                    population[i].color = this.color = "red";
                    population[i].infected = this.infected = true;
                }
            }
        }
    }
};

let population = [];

while (population.length < 1000) {
    let size = 2;
    let x = random(0 + size, width - size);
    let y = random(0 + size, height - size);
    let vX = random(-0.5, 0.5);
    let vY = random(-0.5, 0.5);
    let human = new Human(x, y, vX, vY, "blue", size);
    population.push(human);
}

for (let i = 0; i < 1; i++) {
    let size = 2;
    let x = 100;
    let y = 100;
    let vX = 0.5;
    let vY = 0.5;
    let human = new Human(x, y, vX, vY, "red", size, true);
    population.push(human);
}

function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < population.length; i++) {
        population[i].draw();
        population[i].update();
        population[i].detectEncounter();
    }
    requestAnimationFrame(loop);
}

loop();
