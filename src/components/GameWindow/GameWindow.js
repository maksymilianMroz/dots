import React, { useState, useEffect } from "react";
import "./GameWindow.css";
import MagicCard from "../MagicCard/MagicCard";
import Modal from "../Modal/Modal";
import EndingLetter from "../EndingLetter/EndingLetter";

import marcinMainImage from "./game_images/marcin/marcin.png";
import marcinImages from "./game_images/marcin";
import maxMainImage from "./game_images/max/max.png";
import maxImages from "./game_images/max";
import beanMainImage from "./game_images/bean/bean.png";
import beanImages from "./game_images/bean";
import elonMainImage from "./game_images/elon/elon.png";
import elonImages from "./game_images/elon";
import feloMainImage from "./game_images/felo/felo.png";
import feloImages from "./game_images/felo";
import jarekMainImage from "./game_images/jarek/jarek.png";
import jarekImages from "./game_images/jarek";
import lukMainImage from "./game_images/luk/luk.png";
import lukImages from "./game_images/luk";
import matiMainImage from "./game_images/mati/mati.png";
import matiImages from "./game_images/mati";
import michalMainImage from "./game_images/michal/michal.png";
import michalImages from "./game_images/michal";
import mieszkoMainImage from "./game_images/mieszko/mieszko.png";
import mieszkoImages from "./game_images/mieszko";
import ryanMainImage from "./game_images/ryan/ryan.png";
import ryanImages from "./game_images/ryan";

const boys = [
  { name: "Marcin", id: 1, mainImage: marcinMainImage, images: marcinImages },
  { name: "Max", id: 2, mainImage: maxMainImage, images: maxImages },
  { name: "Bean", id: 10, mainImage: beanMainImage, images: beanImages },
  { name: "Elon", id: 9, mainImage: elonMainImage, images: elonImages },
  { name: "Felo", id: 8, mainImage: feloMainImage, images: feloImages },
  { name: "Jarek", id: 3, mainImage: jarekMainImage, images: jarekImages },
  { name: "Luk", id: 6, mainImage: lukMainImage, images: lukImages },
  { name: "Mati", id: 7, mainImage: matiMainImage, images: matiImages },
  { name: "Michał", id: 4, mainImage: michalMainImage, images: michalImages },
  {
    name: "Mieszko",
    id: 5,
    mainImage: mieszkoMainImage,
    images: mieszkoImages,
  },
  { name: "Ryan", id: 11, mainImage: ryanMainImage, images: ryanImages },
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

const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

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
  const [shuffledBoys, setShuffledBoys] = useState([]);
  const [showCards, setShowCards] = useState(true);
  const [gameEnded, setGameEnded] = useState(false); // Nowy stan do kontrolowania końca gry

  useEffect(() => {
    setShuffledBoys(shuffle([...boys]));
  }, []);

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
        setFlippedCards([...flippedCards, ...boys.map((b) => b.id)]);
        setDisabledCards(boys.map((b) => b.id));
        setCorrectCard(selectedCard.id);
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
    if (currentRound >= bodyParts.length) {
      setGameEnded(true); // Ustawienie stanu końca gry
    } else {
      setShowCards(false);
      setTimeout(() => {
        setShuffledBoys(shuffle([...boys]));
        setCurrentRound(currentRound + 1);
        setAttempts(0);
        setSelectedCard(null);
        setFlippedCards([]);
        setDisabledCards([]);
        setCorrectCard(null);
        setRoundCompleted(false);
        setShowCards(true);
      }, 2000);
    }
  };

  if (gameEnded) {
    return <EndingLetter score={score} />;
  }

  return (
    <div className="game-window">
      <div className="score-board">
        <div>Punkty: {score}</div>
        <div>Runda: {currentRound}</div>
      </div>
      <div className="cards-container">
        {showCards &&
          shuffledBoys.map((boy) =>
            boy.images[`./${boy.id}_${currentRound}.jpg`] ? (
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
            ) : null
          )}
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
    </div>
  );
};

export default GameWindow;
