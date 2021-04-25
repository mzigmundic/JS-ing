const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

const defaultHero = "Bob";
const actors = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const places = ["the soup kitchen", "Disneyland", "the White House"];
const actions = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

let hero = defaultHero;
let temperature = "300 fahrenheit";
let weight = "100 pounds";
let actor = undefined;
let place = undefined;
let action = undefined;
let text = undefined;

randomize.addEventListener("click", result);

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

function result() {
    if (customName.value !== "") {
        hero = customName.value;
    } else {
        hero = defaultHero;
    }

    actor = randomValueFromArray(actors);
    place = randomValueFromArray(places);
    action = randomValueFromArray(actions);

    if (document.getElementById("uk").checked) {
        temperature = "80 celsius";
        weight = "45 kilos";
    }

    text = `It was ${temperature} outside, so ${actor} went for a walk. When they got to ${place}, they stared in horror for a few moments, then ${action}. ${hero} saw the whole thing, but was not surprised — ${actor} weighs ${weight}, and it was a hot day.`;

    story.textContent = text;
    story.style.visibility = "visible";
}
