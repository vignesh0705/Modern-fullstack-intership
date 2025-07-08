import React from 'react';

const Controls = ({ onNewGame, onRoll, onHold }) => {
  return (
    <>
      <button className="btn btn--new" onClick={onNewGame}>New Game</button>
      <button className="btn btn--roll" onClick={onRoll}>Roll Dice</button>
      <button className="btn btn--hold" onClick={onHold}>Hold</button>
    </>
  );
};

export default Controls;
