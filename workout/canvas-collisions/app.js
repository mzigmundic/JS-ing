function randomNumBetween(min, max) {
    return min + Math.random() * (max - min);
}

function distance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static add(vector1, vector2) {
        return new Vector(vector1.x + vector2.x, vector1.y + vector2.y);
    }
    static mult(vector, scalar) {
        return new Vector(vector.x * scalar, vector.y * scalar);
    }
    static div(vector, scalar) {
        return new Vector(vector.x / scalar, vector.y / scalar);
    }
    static sub(vector1, vector2) {
        return new Vector(vector1.x - vector2.x, vector1.y - vector2.y);
    }
    dot(vector) {
        return this.x * vector.x + this.y * vector.y;
    }
    getTangent() {
        return new Vector(-this.y, this.x);
    }
    mag() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    copy() {
        return new Vector(this.x, this.y);
    }
    static random(minX, maxX, minY, maxY) {
        return new Vector(
            randomNumBetween(minX, maxX),
            randomNumBetween(minY, maxY)
        );
    }
}

class Particle {
    constructor(x, y, radius) {
        this.position = new Vector(x, y);
        this.velocity = Vector.random(-2, 2, -2, 2);
        this.acceleration = new Vector(0, 0);
        this.radius = radius;
        this.mass = radius ** 2;
    }
    update() {
        this.position = Vector.add(this.position, this.velocity);
        this.velocity = Vector.add(this.velocity, this.acceleration);
        this.acceleration = Vector.mult(this.acceleration, 0);
    }
    handleEdges(width, height) {
        if (
            this.position.x <= this.radius ||
            this.position.x >= width - this.radius
        ) {
            this.velocity.x = -this.velocity.x;
        } else if (
            this.position.y <= this.radius ||
            this.position.y >= height - this.radius
        ) {
            this.velocity.y = -this.velocity.y;
        }
    }
    checkCollision(particle) {
        const v = Vector.sub(this.position, particle.position);
        const distance = v.mag();
        if (distance <= this.radius + particle.radius) {
            const unitNormal = Vector.div(v, v.mag());
            const unitTangent = unitNormal.getTangent();

            const correction = Vector.mult(
                unitNormal,
                this.radius + particle.radius
            );
            const newV = Vector.add(particle.position, correction);
            this.position = newV;

            const a = this.velocity;
            const b = particle.velocity;

            const a_n = a.dot(unitNormal);
            const b_n = b.dot(unitNormal);
            const a_t = a.dot(unitTangent);
            const b_t = b.dot(unitTangent);

            const a_n_final =
                (a_n * (this.mass - particle.mass) + 2 * particle.mass * b_n) /
                (this.mass + particle.mass);
            const b_n_final =
                (b_n * (particle.mass - this.mass) + 2 * this.mass * a_n) /
                (this.mass + particle.mass);

            const a_n_after = Vector.mult(unitNormal, a_n_final);
            const b_n_after = Vector.mult(unitNormal, b_n_final);
            const a_t_after = Vector.mult(unitTangent, a_t);
            const b_t_after = Vector.mult(unitTangent, b_t);

            const a_after = Vector.add(a_n_after, a_t_after);
            const b_after = Vector.add(b_n_after, b_t_after);

            this.velocity = a_after;
            particle.velocity = b_after;
        }
    }
}

class Canvas {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.setup();

        requestAnimationFrame(() => this.update());
    }
    setup() {
        const NUM_PARTICLES = 20;
        this.particles = [];

        // for (let i = 0; i < NUM_PARTICLES; i++) {
        //     let radius = 10;
        //     this.particles.push(
        //         new Particle(
        //             randomNumBetween(radius, this.canvas.width - radius),
        //             randomNumBetween(radius, this.canvas.height - radius),
        //             radius
        //         )
        //     );
        // }

        for (let i = 0; i < NUM_PARTICLES; i++) {
            const radius = randomNumBetween(5, 50);
            let x = randomNumBetween(radius, this.canvas.width - radius);
            let y = randomNumBetween(radius, this.canvas.height - radius);

            if (i !== 0) {
                for (let j = 0; j < this.particles.length; j++) {
                    if (
                        distance(
                            x,
                            y,
                            this.particles[j].x,
                            this.particles[j].y
                        ) -
                            radius * 2 <
                        0
                    ) {
                        x = randomIntFromRange(
                            radius,
                            this.canvas.width - radius
                        );
                        y = randomIntFromRange(
                            radius,
                            this.canvas.height - radius
                        );
                        j = -1;
                    }
                }
            }

            this.particles.push(
                new Particle(
                    randomNumBetween(radius, this.canvas.width - radius),
                    randomNumBetween(radius, this.canvas.height - radius),
                    radius
                )
            );
        }
    }
    update() {
        this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.height);

        for (let i = 0; i < this.particles.length; i++) {
            const current = this.particles[i];
            const rest = this.particles.slice(i + 1);

            for (let p of rest) {
                p.checkCollision(current);
            }
        }

        for (let particle of this.particles) {
            particle.update();
            particle.handleEdges(this.canvas.width, this.canvas.height);

            this.ctx.fillStyle = `rgba(255, 255, 255, 1)`;
            this.ctx.beginPath();
            this.ctx.arc(
                particle.position.x,
                particle.position.y,
                particle.radius,
                0,
                2 * Math.PI
            );
            this.ctx.fill();
        }

        requestAnimationFrame(() => this.update());
    }
}

new Canvas();
