let humanScore = 0;
let computerScore = 0;

// Function to generate the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Function to play a single round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    const roundResult = document.getElementById("round-result");
    const scoreDisplay = document.getElementById("score");

    if (humanChoice === computerChoice) {
        roundResult.textContent = `It's a tie! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        roundResult.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        roundResult.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }

    scoreDisplay.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;

    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

// Function to announce the winner
function announceWinner() {
    const roundResult = document.getElementById("round-result");

    if (humanScore === 5) {
        roundResult.textContent = "Congratulations! You won the game!";
    } else if (computerScore === 5) {
        roundResult.textContent = "Sorry, you lost the game. Better luck next time!";
    }

    // Disable buttons after the game ends
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
