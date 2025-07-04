let scores, currentScore, activePlayer, playing, autoRollInterval;

const score1El = document.getElementById("score1");
const score2El = document.getElementById("score2");
const current1El = document.getElementById("current1");
const current2El = document.getElementById("current 0");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player1El = document.querySelector(".player1");
const player2El = document.querySelector(".player2");

function init() {
  clearInterval(autoRollInterval);
  autoRollInterval = null;

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score1El.textContent = 0;
  score2El.textContent = 0;
  current1El.textContent = 0;
  current2El.textContent = 0;

  diceEl.style.display = "none";

  player1El.classList.add("playeractive");
  player2El.classList.remove("playeractive");
  player1El.classList.remove("winner");
  player2El.classList.remove("winner");
}

function switchPlayer() {
  if (activePlayer === 0) {
    current1El.textContent = 0;
  } else {
    current2El.textContent = 0;
  }
  currentScore = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;
  player1El.classList.toggle("playeractive");
  player2El.classList.toggle("playeractive");
}

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.style.display = "inline";
    diceEl.src = `image/dice ${dice}.jpg`;

    if (dice !== 1) {
      currentScore += dice;
      if (activePlayer === 0) {
        current1El.textContent = currentScore;
      } else {
        current2El.textContent = currentScore;
      }
    } else {

      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    if (activePlayer === 0) {
      score1El.textContent = scores[activePlayer];
    } else {
      score2El.textContent = scores[activePlayer];
    }
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.style.display = "none";
      if (activePlayer === 0) {
        player1El.classList.add("winner");
      } else {
        player2El.classList.add("winner");
      }
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);

init();