import React, { useState } from "react";

export default function TrialTwo() {
  const [box, setBox] = useState(null);
  const [ran, setRan] = useState(true);
  const [score, setScore] = useState(0);
  const [massage, setMassage] = useState("");

  function playGame() {
    setBox(0);
    let interval;
    if (ran) {
      interval = setInterval(() => {
        const random = Math.floor(Math.random() * 9);
        setBox(random);
      }, 900);
    }

    setTimeout(() => {
      clearInterval(interval);
      setBox(null);
      setMassage("Game over");
      setRan(true);
    }, 5000);
    setRan(false);
    setMassage("let's go");
  }

  function updateScore(increse) {
    if (!ran && increse === box) {
      setScore((prev) => prev + 1);
    }
  }
  function reset() {
    setScore(0);
    setBox(null);
    setMassage("");
  }
  return (
    <div className="flex h-screen justify-center items-center  flex-col gap-10">
      <h1>score:{score}</h1>
      <h1>{massage}</h1>
      <div className="flex w-2/10 border h-2/4 justify-center items-center flex-wrap gap-16">
        <div
          className="border w-16 h-16 flex items-center justify-center"
          onClick={() => {
            updateScore(1);
          }}
        >
          {box === 1 ? "@" : ""}
        </div>
        <div
          className="border w-16 h-16 flex items-center justify-center"
          onClick={() => {
            updateScore(2);
          }}
        >
          {box === 2 ? "@" : ""}
        </div>
        <div
          className="border w-16 h-16 flex items-center justify-center"
          onClick={() => {
            updateScore(3);
          }}
        >
          {box === 3 ? "@" : ""}
        </div>
        <div
          className="border w-16 h-16 flex items-center justify-center"
          onClick={() => {
            updateScore(4);
          }}
        >
          {box === 4 ? "@" : ""}
        </div>
        <div
          className="border w-16 h-16 flex items-center justify-center"
          onClick={() => {
            updateScore(5);
          }}
        >
          {box === 5 ? "@" : ""}
        </div>
        <div
          className="border w-16 h-16 flex items-center justify-center"
          onClick={() => {
            updateScore(6);
          }}
        >
          {box === 6 ? "@" : ""}
        </div>
        <div
          className="border w-16 h-16 flex items-center justify-center"
          onClick={() => {
            updateScore(7);
          }}
        >
          {box === 7 ? "@" : ""}
        </div>
        <div
          className="border w-16 h-16 flex items-center justify-center"
          onClick={() => {
            updateScore(8);
          }}
        >
          {box === 8 ? "@" : ""}
        </div>
        <div
          className="border w-16 h-16 flex items-center justify-center"
          onClick={() => {
            updateScore(9);
          }}
        >
          {box === 9 ? "@" : ""}
        </div>
      </div>
      <div className="flex gap-5">
        <button
          className="bg-yellow-200 p-2 rounded-2xl font-bold text-green-400"
          onClick={playGame}
        >
          Game Start
        </button>
        {box === null && (
          <button
            onClick={reset}
            className="border p-1 rounded-2xl text-green-400"
          >
            reset game
          </button>
        )}
      </div>
    </div>
  );
}
