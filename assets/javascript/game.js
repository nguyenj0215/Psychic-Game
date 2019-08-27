var letterList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessesArray = [];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var randomLetter;
var guesses;

function psychicGame() {

    randomLetter = letterList[Math.floor(Math.random() * letterList.length)];

    guessesArray = [];
    guessesLeft = 9;

    console.log(randomLetter)
}

document.onkeydown = function (event) {

    guesses = event.key;

    console.log(guesses)

    if (guessesLeft > 0 && guesses == randomLetter) {
        wins++;
        psychicGame();
    }
    else if (guessesLeft > 0 && guesses != randomLetter) {
        guessesArray.push(guesses);
        guessesLeft--;
    }
    else {
        losses++;
        psychicGame();
    }

    document.getElementById("guessLeft").innerHTML = guessesLeft;
    document.getElementById("winCount").innerHTML = wins;
    document.getElementById("lossCount").innerHTML = losses;
    document.getElementById("guessesSoFar").innerHTML = guessesArray;

    console.log(wins)
}

psychicGame();



