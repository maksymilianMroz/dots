import React from "react";
import "./EndingLetter.css";
import logo from "./logo.png";

const EndingLetter = ({ score }) => {
  const message =
    score <= 12
      ? `Księżnej poszło całkiem nieźle, ale chyba jednak powinna trochę dokładniej poznać ciało swojego księcia Marcina - może podczas nocy poślubnej, no bo wcześniej to chyba damie nie przystoi (ale tak z żarcikiem).`
      : `Księżna zna swojego wybranka świetnie, ale nie zaszkodzi poznać jeszcze dokładniej (też jakiś żarcik - to gra na wieczór panieński).`;

  return (
    <div className="ending-letter">
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
