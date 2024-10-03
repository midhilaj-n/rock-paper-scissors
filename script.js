const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');

const resultTab = document.querySelector('.result-tab');
const scoreTab = document.querySelector('.score-tab');

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;  // Set to 5 rounds

// Function to get computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);  // Random number between 0 and 2
    return choices[randomIndex];
}

// Function to play a round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultTab.textContent = `It's a Tie.`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissor') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissor' && computerChoice === 'paper')
    ) {
        humanScore++;
        resultTab.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultTab.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}.`;
    }

    scoreTab.textContent = `You: ${humanScore}  Computer: ${computerScore}`;

    roundsPlayed++;
    if (roundsPlayed >= maxRounds) {
        endGame();
    }
}

// Function to handle the end of the game
function endGame() {
    if (humanScore > computerScore) {
        resultTab.textContent = `Game Over! You win the game!`;
    } else if (computerScore > humanScore) {
        resultTab.textContent = `Game Over! Computer wins the game!`;
    } else {
        resultTab.textContent = `Game Over! It's a tie!`;
    }

    // Disable buttons after the game ends
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

// Function to start the game
function startGame() {
    rockBtn.addEventListener("click", () => {
        playRound('rock', getComputerChoice());
    });

    paperBtn.addEventListener("click", () => {
        playRound('paper', getComputerChoice());
    });

    scissorsBtn.addEventListener("click", () => {
        playRound('scissor', getComputerChoice());
    });
}

// Start the game
startGame();
