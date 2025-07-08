import React from "react";

const Player = ({ name, score, current, isActive, isWinner }) => (
  <div className={`player ${isActive ? "playeractive" : ""} ${isWinner ? "player--winner" : ""}`}>
    <h2 className="name">{name}</h2>
    <p className="score">{score}</p>
    <div className="current">
      <p className="currentlabel">Current</p>
      <p className="currentscore">{current}</p>
    </div>
  </div>
);

export default Player;
