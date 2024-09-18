let input = document.getElementById("userInput");
let result = document.getElementById("gameResult");
let randomNumber = Math.ceil(Math.random() * 100);
let count = 0;

function checkGuess() {
    let guessedNumber = parseInt(input.value);

    if (isNaN(guessedNumber)) {
        result.textContent = "Invalid Input, Please Try Again";
        result.style.backgroundColor = "#1e217c";
    } else if (guessedNumber > randomNumber) {
        result.textContent = "Too High! Try again";
        result.style.backgroundColor = "#1e217c";
        count++;
    } else if (guessedNumber < randomNumber) {
        result.textContent = "Too Low! Try again";
        result.style.backgroundColor = "#1e217c";
        count++;
    } else if (guessedNumber === randomNumber) {
        result.textContent = "Congratulations! You Entered Correct";
        result.style.backgroundColor = "green";
        document.getElementById("game").style.backgroundColor = "#1e217c";
        document.getElementById("game").textContent = "You won at " + count + " Time(s)";
    }
}
