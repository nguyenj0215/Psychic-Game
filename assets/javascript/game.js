//Variable declarations
var letterList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessesArray = [];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var randomLetter;
var guesses;

//Starting/Restarting point
function psychicGame() {

    var randomLetter = letterList[Math.floor(Math.random() * letterList.length)];

    guessesArray = [];
    guessesLeft = 9;

console.log(randomLetter)
}

//Actual game 
document.onkeydown = function (event) {

    guesses = event.key;

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

//HTML
document.getElementById("guessLeft").innerHTML = guessesLeft;
document.getElementById("winCount").innerHTML = wins;
document.getElementById("lossCount").innerHTML = losses;
document.getElementById("guessesSoFar").innerHTML = guessesArray;

console.log(wins)
}

//Game start first time
psychicGame();



