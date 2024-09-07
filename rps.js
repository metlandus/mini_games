const rock = document.querySelector('.rock-btn');
const paper = document.querySelector('.paper-btn');
const scissors = document.querySelector('.scissors-btn');
const game = document.querySelector('.game');
const result = document.querySelector('.result');
let compScore = 0;
let playerScore = 0;

function getPlayerChoice(e) {
    if (e.target.classList.contains('rock-img')) {
        return 'Rock';
    } else if (e.target.classList.contains('paper-img')) {
        return 'Paper';
    } else if (e.target.classList.contains('scissors-img')) {
        return 'Scissors';
    }
    return null;
}

function computerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function restartGame() {
    playerScore = 0;
    compScore = 0;
    result.innerHTML = "";
}

window.restartGame = restartGame;

function rockPaperScissors(playerChoice) {
    if (!playerChoice) return; // If playerChoice is null, do nothing
    const computer = computerChoice();
    if (playerChoice === computer) {
        result.innerHTML = `<h2>You and computer both choose ${playerChoice}.<span class="result-text">It's a Tie!</span></h2>
        <div class="score">
            <h3>Player: ${playerScore}</h3>
            <h3>Computer: ${compScore}</h3>`;

    } else if (
        (playerChoice === 'Rock' && computer === 'Scissors') ||
        (playerChoice === 'Paper' && computer === 'Rock') ||
        (playerChoice === 'Scissors' && computer === 'Paper')
    ) {
        playerScore++;
        result.innerHTML = `<h2>You choose ${playerChoice} and Computer choose ${computer}, ${playerChoice} beats ${computer}.<span class="result-text">You Win!</span></h2>
        <div class="score">
            <h3>Player: ${playerScore}</h3>
            <h3>Computer: ${compScore}</h3>`;
    } else {
        compScore++;
        result.innerHTML = `<h2>You choose ${playerChoice} and Computer choose ${computer}, ${playerChoice} beats ${computer}.<span class="result-text">Computer Wins!</span></h2>
        <div class="score">
            <h3>Player: ${playerScore}</h3>
            <h3>Computer: ${compScore}</h3>`;
    }

}

game.addEventListener('click', (e) => {
    const playerChoice = getPlayerChoice(e);
    rockPaperScissors(playerChoice);
});