const rock = document.querySelector('.rock-btn');
const paper = document.querySelector('.paper-btn');
const scissors = document.querySelector('.scissors-btn');
const game = document.querySelector('.game');
const result = document.querySelector('.result');

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

function rockPaperScissors(playerChoice) {
    if (!playerChoice) return; // If playerChoice is null, do nothing
    console.log('Game started');
    console.log('Player choice:', playerChoice);
    const computer = computerChoice();
    console.log(`Player: ${playerChoice}, Computer: ${computer}`);
    if (playerChoice === computer) {
        result.textContent = "It's a tie!";
    } else if (
        (playerChoice === 'Rock' && computer === 'Scissors') ||
        (playerChoice === 'Paper' && computer === 'Rock') ||
        (playerChoice === 'Scissors' && computer === 'Paper')
    ) {
        result.innerHTML = `<h2>You choose ${playerChoice} and Computer choose ${computer}, ${playerChoice} beats ${computer}. You Win!</h2>`;
    } else {
        result.textContent = 'Computer wins!';
    }
    
}

game.addEventListener('click', (e) => {
    const playerChoice = getPlayerChoice(e);
    rockPaperScissors(playerChoice);
});