function Person(first, last, age, gender, interests) {
    this.name = {
        first: first,
        last: last,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        return (
            "I am " +
            this.name.first +
            " " +
            this.name.last +
            " and I am " +
            this.age +
            " years old. By the way, I am a " +
            this.gender +
            ". I also like" +
            this.interests.map((i) => " " + i) +
            "."
        );
    };
}

Person.mojaMetoda = function () {
    return "moja staticka metoda";
};

Person.prototype.metoda = function () {
    return "Custom metoda from " + this.name.first;
};

function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.metoda = function () {
    return "Metoda from teacher " + this.name.first + ", the " + this.subject + " teacher";
};

const p2 = new Person("Jasenka", "Arafatovic", 28, "female", ["hiking", "swiming", "dancing"]);
//console.log(p2);
//console.log(p2.metoda());
//console.log(Person.mojaMetoda());

const p5 = new Teacher("Jon", "Snow", 22, "male", ["acting", "rowing"], "math");
//console.log(p5);
//console.log(p5.metoda());
//console.log(p5.__proto__);

function doSomething() {}
const doSomethingElse = function () {};
const dooo = () => {};
//console.log(doSomething.prototype);
//console.log(doSomethingElse.prototype);
//console.log(dooo.prototype);

const ob = { a: 1 };
console.log(ob);

function Graph() {
    this.x = [];
    this.y = [];
}
Graph.prototype.met = function () {};
const ob1 = new Graph();
console.log(ob1);

const ob2 = Object.create(Object.prototype);
console.log(ob2);
