/**
 * გამოიცანი რიცხვი (თამაში)
 * მომხარებელს შემოაქვს ჯერ 1 მნიშვნელობა, თუ რამდენი ცდის საშუალება აქვს.
 * კოდმა უნდა დააგენერიროს შემთხვევითი რიცხვი, რომელიც იქნება 1-დან 1000-მდე ინტერვალში მოთავსებული.
 * მომხარებელს აქვს უფლება იმდენჯერ შემოიტანს, რიცხვი რა რიცხვსაც მიუთითებს პირველ ინპუტზე.
 * თუ ინპუტი იყო 0 ან NaN მაშინ მცდელობის რაოდენობა უნდა იყოს 10-ს ტოლი.
 * როცა შემოიტანს მნიშვნელობას (მცდელობის ფარგლებში) კოდმა უნდა დალოგოს: უფრო დაბალი, უფრო მაღალი ან სწორი გამოცნობა.
 */

let tries = getNumOfTries();
const randomNumber = getRandomNumber();
let userInput;
let userWon = false;


while (!isGameFinished()) {
    --tries;
    userInput = getNumber();
    if (userInput === randomNumber) {
        alert(`YOU WON! the number was ${randomNumber}`);
        userWon = true;
        break;
    } else if (userInput < randomNumber && !isGameFinished()) {
        alert(`Wrong! Enter higher number. You have ${tries} tries left`);
    } else if (userInput > randomNumber && !isGameFinished()) {
        alert(`Wrong! Enter lower number. You have ${tries} tries left`);
    }
}

if (!userWon) {
    alert(`YOU LOST. You Couldn't guess the number and you have 0 tries left. Random number was ${randomNumber}`);
}


// Utils
function getNumOfTries() {
    const input = +prompt("Please enter number of tries: ");
    if (isNaN(input) || Number(input) <= 0) {
        return 10;
    }
    return Number(input);
}

function getRandomNumber() {
    return Math.floor(Math.random() * 1000 + 1);
}

function getNumber() {
    let input;
    while (true) {
        input = prompt("Please enter a number: ");
        if (isNaN(input)) {
            alert("You must enter a valid number! ");
            continue;
        }
        return Number(input);
    }
}

function isGameFinished() {
    return userWon || tries <= 0;
}
