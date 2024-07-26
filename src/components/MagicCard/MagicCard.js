import React from "react";
import "./MagicCard.css";

const MagicCard = ({
  boy,
  bodyPart,
  currentRound,
  onClick,
  isFlipped,
  isDisabled,
  isCorrect,
  isMarcin,
}) => {
  const handleClick = () => {
    if (!isFlipped && !isDisabled) {
      onClick(boy);
    }
  };

  const imagePath = isFlipped
    ? boy.mainImage
    : boy.images[`./${boy.id}_${currentRound}.jpg`];

  return (
    <div
      className={`magic-card ${isFlipped ? "flipped" : ""} ${
        isDisabled ? "disabled" : ""
      } ${isCorrect ? "correct" : ""} ${isMarcin ? "pulse" : ""}`}
      onClick={handleClick}
    >
      <img src={imagePath} alt={`${bodyPart} ${boy.name}`} />
    </div>
  );
};

export default MagicCard;
