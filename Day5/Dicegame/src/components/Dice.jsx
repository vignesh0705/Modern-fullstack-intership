import React from "react";

const Dice = ({ diceNumber }) => {
  return diceNumber ? (
    <img
      src={`/image/dice ${diceNumber}.jpg`}  
      alt={`Dice ${diceNumber}`}
      className="dice"
    />
  ) : null;
};

export default Dice;
