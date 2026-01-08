import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  const suits = [
    { symbol: "♠", color: "black" },
    { symbol: "♥", color: "red" },
    { symbol: "♣", color: "black" },
    { symbol: "♦", color: "red" }
  ];

  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  document.getElementById("topSuit").innerHTML = randomSuit.symbol;
  document.getElementById("bottomSuit").innerHTML = randomSuit.symbol;
  document.getElementById("number").innerHTML = randomValue;

  document.getElementById("topSuit").style.color = randomSuit.color;
  document.getElementById("bottomSuit").style.color = randomSuit.color;
  document.getElementById("number").style.color = randomSuit.color;
};
