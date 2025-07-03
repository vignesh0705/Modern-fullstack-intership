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

let scores, currentScore, activePlayer, playing;

const init = () => {
    scores = [0, 0]; // Total scores
    currentScore = 0;
    activePlayer = 0; // 0 = Player 1, 1 = Player 2
    playing = true;

    score1El.textContent = 0;
    score2El.textContent = 0;
    current1El.textContent = 0;
    current2El.textContent = 0;

    diceEl.style.display = 'none';

    player1El.classList.add('playeractive');
    player2El.classList.remove('playeractive');
    player1El.classList.remove('winner');
    player2El.classList.remove('winner');
};
init();

const switchPlayer = () => {
    document.querySelectorAll('.currentscore')[activePlayer].textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1El.classList.toggle('playeractive');
    player2El.classList.toggle('playeractive');
};

btnRoll.addEventListener('click', function () {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.style.display = 'block';
        diceEl.src = `image/dice ${dice}.jpg`;

        if (dice !== 1) {
            currentScore += dice;
            document.querySelectorAll('.currentscore')[activePlayer].textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score${activePlayer + 1}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl.style.display = 'none';
            document.querySelector(`.player${activePlayer + 1}`).classList.add('winner');
            document.querySelector(`.player${activePlayer + 1}`).classList.remove('playeractive');
        } else {
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init);
