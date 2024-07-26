// src/components/WelcomeLetter/WelcomeLetter.js
import React from "react";
import "./WelcomeLetter.css";
import logo from "./logo.png"; // Upewnij się, że ścieżka do obrazka jest poprawna

const WelcomeLetter = ({ onStartGame }) => {
  return (
    <div className="welcome-letter">
      <div className="header">
        <img src={logo} alt="Lady Whistledown Logo" />
        <div className="title">Lady Whistledown’s</div>
        <div className="subtitle top-border">Broszura Towarzyska</div>
        <div className="subtitle bottom-border">
          Wydanie Wirtualne - czas na małą zabawę
        </div>
      </div>
      <div className="content">
        <p>Zacni czytelnicy,</p>
        <p>
          Czy Księżna Mads aby na pewno zna swojego księcia od stóp do głów w
          100%? To pytanie wzbudza nie lada sensację wśród naszych wyższych
          sfer. Choć para prezentuje się jako idealne połączenie, plotki krążące
          w najbardziej prestiżowych kręgach społeczeństwa sugerują, że mogą
          istnieć pewne tajemnice, które wciąż nie ujrzały światła dziennego.
        </p>
        <p>
          Książę, znany ze swojego nieodpartego uroku i szlachetnego
          pochodzenia, może skrywać sekrety, które nie zostały jeszcze ujawnione
          Księżnej Mads. Czy jest to tylko kwestia czasu, zanim te sekrety
          wypłyną na powierzchnię, czy może para czeka, aż odpowiedni moment
          nadejdzie, aby odkryć przed sobą wszystkie karty?
        </p>
        <p>
          W ramach konkursu, którego tematyką jest zgłębianie tajemnic
          książęcych i księżnych, pragniemy przypomnieć, że udział mogą brać
          jedynie osoby pełnoletnie. Tylko dorośli mają przywilej zgłębiać
          tajniki, które mogą wstrząsnąć fundamentami naszego społeczeństwa.
          Niech każdy z Was zastanowi się dwa razy, zanim zdecyduje się wziąć
          udział w tej intrygującej zabawie, bo kto wie, jakie tajemnice mogą
          wyjść na jaw?
        </p>
        <p>
          Wasza oddana, <br />
          Lady Whistledown
        </p>
        <button className="start-button" onClick={onStartGame}>
          Zaczynamy
        </button>
      </div>
    </div>
  );
};

export default WelcomeLetter;
