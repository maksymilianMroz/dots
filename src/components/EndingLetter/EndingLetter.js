import React from "react";
import "./EndingLetter.css";
import logo from "./logo.png";

const EndingLetter = ({ score }) => {
  const message =
    score <= 12
      ? `Księżnej poszło całkiem nieźle, ale chyba jednak powinna trochę dokładniej poznać ciało swojego księcia Marcina. Choć nie udało się zdobyć najwyższego wyniku, to i tak jej starania są godne pochwały. Może podczas nocy poślubnej będzie okazja, aby nadrobić te braki i jeszcze lepiej poznać swojego wybranka?`
      : `Księżna zna swojego wybranka świetnie! Zdobyła imponującą liczbę punktów, co świadczy o jej doskonałej znajomości ciała księcia Marcina. Choć wynik jest znakomity, zawsze warto poznać swojego ukochanego jeszcze dokładniej. Może w przyszłości będzie okazja, aby kontynuować tę grę i odkrywać nowe tajemnice? Na przykład poczas nocy poślubnej? ;)`;

  return (
    <div className="ending-letter">
      <div className="header">
        <img src={logo} alt="Lady Whistledown Logo" />
        <div className="title">Lady Whistledown’s</div>
        <div className="subtitle top-border">Broszura Towarzyska</div>
        <div className="subtitle bottom-border">Podsumowanie gry!</div>
      </div>
      <div className="content">
        <p>Zacni czytelnicy,</p>
        <p>{message}</p>
        <p>
          Wasza oddana, <br />
          Lady Whistledown
        </p>
      </div>
    </div>
  );
};

export default EndingLetter;
