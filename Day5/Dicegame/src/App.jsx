import React, { useState } from 'react';
import Player from './components/Player.jsx';
import Dice from './components/Dice.jsx';
import Controls from './components/Center.jsx';
import './App.css';

const App = () => {
  const [scores, setScores] = useState([0, 0]);
  const [currentScore, setCurrentScore] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [diceNumber, setDiceNumber] = useState(null);

  const switchPlayer = () => {
    setCurrentScore(0);
    setActivePlayer(activePlayer === 0 ? 1 : 0);
  };

  const handleRoll = () => {
    if (!playing) return;
    const dice = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(dice);
    dice !== 1 ? setCurrentScore(c => c + dice) : switchPlayer();
  };

  const handleHold = () => {
    if (!playing) return;
    const newScores = [...scores];
    newScores[activePlayer] += currentScore;
    setScores(newScores);
    if (newScores[activePlayer] >= 100) {
      setPlaying(false);
      setDiceNumber(null);
    } else {
      switchPlayer();
    }
  };

  const handleNewGame = () => {
    setScores([0, 0]);
    setCurrentScore(0);
    setActivePlayer(0);
    setPlaying(true);
    setDiceNumber(null);
  };

  return (
    <main>
      <Player name="Player 1" score={scores[0]} current={activePlayer === 0 ? currentScore : 0} isActive={activePlayer === 0} isWinner={!playing && activePlayer === 0} />
      <Player name="Player 2" score={scores[1]} current={activePlayer === 1 ? currentScore : 0} isActive={activePlayer === 1} isWinner={!playing && activePlayer === 1} />
      <Dice diceNumber={diceNumber} />
      <Controls onNewGame={handleNewGame} onRoll={handleRoll} onHold={handleHold} />
    </main>
  );
};

export default App;
