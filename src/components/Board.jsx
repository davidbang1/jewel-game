import React, { useState } from "react";
import Cell from "./Cell.jsx";
import gold from "../assets/gold.png";
import black from "../assets/black.png";
import blue from "../assets/blue.jpeg";
import red from "../assets/red.png";
import green from "../assets/green.jpeg";
import pearl from "../assets/pearl.jpeg";
import white from "../assets/white.png";

function Board() {
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  const bag = [
    gold,
    gold,
    gold,
    pearl,
    pearl,
    black,
    black,
    black,
    black,
    blue,
    blue,
    blue,
    blue,
    red,
    red,
    red,
    red,
    green,
    green,
    green,
    green,
    white,
    white,
    white,
    white,
  ];
  shuffle(bag);
  let rows = [];
  for (let y = 0, i = 0; y < 5; y++) {
    const cells = [];
    for (let x = 0; x < 5; x++) {
      cells.push(<Cell jewel={bag[i]} />);
      i++;
    }
    rows.push(<tr>{cells}</tr>);
  }

  return (
    <table className="board">
      <tbody>{rows}</tbody>
    </table>
  );
}

export default Board;
