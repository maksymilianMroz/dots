import React from "react";
import "./MagicCard.css";

const MagicCard = ({ boy, bodyPart, currentRound, onClick, isFlipped }) => {
  const handleClick = () => {
    if (!isFlipped) {
      onClick(boy);
    }
  };

  const imagePath = isFlipped
    ? boy.mainImage
    : boy.images[`./${boy.id}_${currentRound}.jpg`];

  return (
    <div
      className={`magic-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <img src={imagePath} alt={`${bodyPart} ${boy.name}`} />
    </div>
  );
};

export default MagicCard;
