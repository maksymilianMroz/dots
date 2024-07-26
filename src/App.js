// src/components/App/App.js
import React, { useState } from "react";
import Curtains from "./components/Curtains/Curtains";
import WelcomeLetter from "./components/WelcomeLetter/WelcomeLetter";
import GameWindow from "./components/GameWindow/GameWindow"; // Upewnij się, że masz ten komponent

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <Curtains>
      {gameStarted ? <GameWindow /> : <WelcomeLetter onStartGame={startGame} />}
    </Curtains>
  );
};

export default App;
