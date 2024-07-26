import React, { useState } from "react";
import "./GameWindow.css";
import MagicCard from "../MagicCard/MagicCard";
import Modal from "../Modal/Modal";
import marcinMainImage from "./game_images/marcin/marcin.png"; // Upewnij się, że nazwa pliku jest poprawna
import marcinImages from "./game_images/marcin";
import maxMainImage from "./game_images/max/max.png"; // Upewnij się, że nazwa pliku jest poprawna
import maxImages from "./game_images/max";

const boys = [
  { name: "Marcin", id: 1, mainImage: marcinMainImage, images: marcinImages },
  { name: "Max", id: 2, mainImage: maxMainImage, images: maxImages },
  // Add more boys as necessary
];

const bodyParts = [
  "kark",
  "łokieć",
  "pępek",
  "kolano",
  "duży palec u nogi",
  "ucho",
  "nos",
  "szczęka",
];

const GameWindow = () => {
  const [score, setScore] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [selectedCard, setSelectedCard] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalType, setModalType] = useState("confirm");
  const [flippedCards, setFlippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);
  const [correctCard, setCorrectCard] = useState(null);
  const [roundCompleted, setRoundCompleted] = useState(false);

  const handleCardClick = (boy) => {
    setSelectedCard(boy);
    setModalType("confirm");
    setModalContent("Czy jesteś pewna, że to ten gentleman?");
    setShowModal(true);
  };

  const handleModalResponse = (response) => {
    setShowModal(false);
    if (modalType === "confirm" && response === "yes") {
      if (selectedCard.name === "Marcin") {
        setScore(score + (3 - attempts));
        setRoundCompleted(true);
        setFlippedCards([...flippedCards, selectedCard.id]);
        setDisabledCards(boys.map((b) => b.id)); // Disable all cards
        setCorrectCard(selectedCard.id); // Set correct card to Marcin's ID
      } else {
        setAttempts(attempts + 1);
        setModalType("error");
        setModalContent("No chyba jednak musisz spróbować jeszcze raz");
        setFlippedCards([...flippedCards, selectedCard.id]);
        setDisabledCards([...disabledCards, selectedCard.id]);
        setShowModal(true);
      }
    } else if (modalType === "error") {
      // Do nothing for 'OK' button
    }
  };

  const nextRound = () => {
    setCurrentRound(currentRound + 1);
    setAttempts(0);
    setSelectedCard(null);
    setFlippedCards([]);
    setDisabledCards([]);
    setCorrectCard(null);
    setRoundCompleted(false);
  };

  return (
    <div className="game-window">
      <div className="score-board">
        <div>Punkty: {score}</div>
        <div>Runda: {currentRound}</div>
      </div>
      <div className="cards-container">
        {boys.map((boy) => (
          <MagicCard
            key={boy.id}
            boy={boy}
            bodyPart={bodyParts[currentRound - 1]}
            currentRound={currentRound}
            onClick={handleCardClick}
            isFlipped={flippedCards.includes(boy.id)}
            isDisabled={disabledCards.includes(boy.id) || roundCompleted}
            isCorrect={correctCard === boy.id}
          />
        ))}
      </div>
      {showModal && (
        <Modal
          content={modalContent}
          modalType={modalType}
          onResponse={handleModalResponse}
        />
      )}
      {roundCompleted && (
        <button className="next-round-button" onClick={nextRound}>
          Przejdź do kolejnej rundy
        </button>
      )}
      {currentRound > bodyParts.length && (
        <div className="game-over">
          Gra zakończona! Zdobyłeś {score} punktów.
        </div>
      )}
    </div>
  );
};

export default GameWindow;
