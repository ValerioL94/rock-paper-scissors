let roundResult = document.getElementById("roundResult");
let playerScore = 0;
let computerScore = 0;
let gameResult = document.getElementById("gameResult");
const buttons = document.querySelectorAll("#options button");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
        roundResult.textContent = (`You win! ${playerSelection} beats ${computerSelection}`);
        (playerScore++);
    } else if (playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock") {
        roundResult.textContent = (`You Lose! ${computerSelection} beats ${playerSelection}`);
        (computerScore++);
    } else {
        roundResult.textContent = "It's a draw!";
    }
    document.getElementById("playerScore").textContent = `Player score: ${playerScore}`;
    document.getElementById("computerScore").textContent = `Computer score: ${computerScore}`;

    endGame();
}
function endGame() {
    if (playerScore === 5) {
        gameResult.textContent = "YOU WON THE GAME! Reload to play again!";
        gameResult.style.color = "Green";
        buttonsOff();
    } else if (computerScore === 5) {
        gameResult.textContent = "YOU LOST THE GAME! Reload to play again!";
        gameResult.style.color = "Red";
        buttonsOff();
    } else {
        gameResult.textContent = "";
    }
}

function buttonsOff() {
    buttons.forEach((button) => {
        button.disabled = true
    })
}

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        playRound(button.id)
    })
})



