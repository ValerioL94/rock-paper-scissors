
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;

}

function getPlayerChoice() {
    let yourChoice = prompt("rock, paper or scissors?");
    if (yourChoice.toLowerCase() === "rock" ||
        yourChoice.toLowerCase() === "paper" ||
        yourChoice.toLowerCase() === "scissors") {
        return yourChoice.toLowerCase();
    } else {
        alert("wrong input!");
        getPlayerChoice();
    }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundResult = "It's a draw!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        roundResult = ("You win! Rock beats Scissors " + "-PlayerScore: " + (++playerScore));
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        roundResult = ("You Lose! Paper beats Rock " + "-ComputerScore: " + (++computerScore));
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        roundResult = ("You win! Paper beats Rock " + "-PlayerScore: " + (++playerScore));
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        roundResult = ("You Lose! Scissors beats Paper " + "-ComputerScore: " + (++computerScore));
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        roundResult = ("You win! Scissors beats Paper " + "-PlayerScore: " + (++playerScore));
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        roundResult = ("You lose! Rock beats Scissors " + "-ComputerScore: " + (++computerScore));
    }
    return roundResult
}

function game() {
    //for (let round = 0; round < 5; round++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log("-YOU: " + playerSelection + " vs " + "-COMPUTER: " + computerSelection);
    console.log(roundResult);
}
if (playerScore > computerScore) {
    gameResult = "YOU WON THE GAME!";
} else if (playerScore < computerScore) {
    gameResult = "YOU LOST THE GAME!";
} else {
    gameResult = "THE GAME ENDED IN A DRAW!";
} return gameResult
//   }

console.log(game());