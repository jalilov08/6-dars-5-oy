const againBtn = document.querySelector('#again-btn');
const result = document.querySelector('#result');
const form = document.querySelector("form");
const statusGame = document.querySelector("#status-game");
const attemps = document.querySelector("#attemps");
const rekord = document.querySelector("#rekord");

let attemCounter = 5;
let rekordCounter = 0;

const randomNumber = Math.floor((Math.random * 20) + 1);
console.log(randomNumber);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userNumber = +form["guess-number"].value;

    if (attemCounter > rekordCounter) {
        rekordCounter = attemCounter;
        rekord.textContent = rekordCounter;
    }

    if (randomNumber === userNumber) {
        result.textContent = userNumber;
        statusGame.textContent = "YOU ARE WINNER 🎉🎉🎉";
        form["guess-number"].disabled = true;
    } else {
        if (randomNumber > userNumber) {
            statusGame.textContent = "too loow 🙁";
        } else {
            statusGame.textContent = "too high 😗";
        }
        attemCounter--;
        attemps.textContent = attemCounter;
    }
});