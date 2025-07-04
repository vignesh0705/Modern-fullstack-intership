const score1El = document.getElementById('score1');
const score2El = document.getElementById('score2');
const current1El = document.querySelectorAll('.currentscore')[0];
const current2El = document.querySelectorAll('.currentscore')[1];
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player1El = document.querySelector('.player1');
const player2El = document.querySelector('.player2');

let score1 = 0;
let score2 = 0;
let currentScore = 0;
let activePlayer = 0;
let playing = true;

function updateScoreDisplay() {
    score1El.textContent = score1;
    score2El.textContent = score2;
}

function addScore(player, amount) {
    if (player === 0) {
        score1 += amount;
        score1El.textContent = score1;
        return score1;
} else {
        score2 += amount;
        score2El.textContent = score2;
        return score2;
}
}

function declareWinner(player) {
    playing = false;
    diceEl.style.display = 'none';
    document.querySelector(`.player${player + 1}`).classList.add('winner');
    document.querySelector(`.player${player + 1}`).classList.remove('playeractive');
}

function resetGame() {
    score1 = 0;
    score2 = 0;
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    updateScoreDisplay();
    current1El.textContent = 0;
    current2El.textContent = 0;
    diceEl.style.display = 'none';

    player1El.classList.add('playeractive');
    player2El.classList.remove('playeractive');
    player1El.classList.remove('winner');
    player2El.classList.remove('winner');
}

function switchPlayer() {
    document.querySelectorAll('.currentscore')[activePlayer].textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0? 1: 0;
    player1El.classList.toggle('playeractive');
    player2El.classList.toggle('playeractive');
}

btnRoll.addEventListener('click', function () {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.style.display = 'block';
        diceEl.src = `image/dice ${dice}.jpg`;

        if (dice!== 1) {
            currentScore += dice;
            document.querySelectorAll('.currentscore')[activePlayer].textContent = currentScore;
} else {
            switchPlayer();
}
}
});

btnHold.addEventListener('click', function () {
    if (playing) {
        const finalScore = addScore(activePlayer, currentScore);
        if (finalScore>= 100) {
            declareWinner(activePlayer);
} else {
            switchPlayer();
}
}
});

btnNew.addEventListener('click', resetGame);
