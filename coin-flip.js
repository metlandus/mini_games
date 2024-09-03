const headsBtn = document.querySelector('.heads_btn');
const tailsBtn = document.querySelector('.tails_btn');
const result = document.querySelector('.result');

const coinFlip = () => {
    const coin = Math.random();
    if (coin < 0.5) {
        return "Heads";
    } else {
        return "Tails";
    }
}

const coinFlipResult = (e) => {
    const resultOfFlip = coinFlip();
    // console.log(`Coin flip result: ${resultOfFlip}`); // Debugging statement
    // console.log(`Clicked button class: ${e.target.classList}`); // Debugging statement

    if ((resultOfFlip === "Heads" && (e.target.classList.contains('heads_btn') || e.target.classList.contains('heads_img'))) || 
        (resultOfFlip === "Tails" && (e.target.classList.contains('tails_btn') || e.target.classList.contains('tails_img')))) {
        result.innerHTML = `<h2>You Win! It's ${resultOfFlip}</h2>`;
    } else {
        result.innerHTML = `<h2>You Lose! It's ${resultOfFlip}</h2>`;
    }
}

headsBtn.addEventListener('click', coinFlipResult);
tailsBtn.addEventListener('click', coinFlipResult);