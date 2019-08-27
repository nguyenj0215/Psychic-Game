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

}

document.onkeyup = function (event) {

    guesses = event.key;

    if (guesses === "a" || guesses === "b" || guesses === "c" || guesses === "d" || guesses === "e" || guesses === "f" || guesses === "g" || guesses === "h" || guesses === "i" || guesses === "j" || guesses === "k" || guesses === "l" || guesses === "m" || guesses === "n" || guesses === "o" || guesses === "p" || guesses === "q" || guesses === "r" || guesses === "s" || guesses === "t" || guesses === "u" || guesses === "v" || guesses === "w" || guesses === "x" || guesses === "y" || guesses === "z") {
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
    }
    else {
        alert("Enter a letter")
    }
    document.getElementById("guessLeft").innerHTML = guessesLeft;
    document.getElementById("winCount").innerHTML = wins;
    document.getElementById("lossCount").innerHTML = losses;
    document.getElementById("guessesSoFar").innerHTML = guessesArray;


}
psychicGame();



