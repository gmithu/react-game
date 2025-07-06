import React, { useState } from "react";

export default function WocAmol() {
  const [box, setBox] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [position, setPosition] = useState(null);
  const [play, setPlay] = useState(true);
  const [score, setScore] = useState(0);
  const [gameover, setGameover] = useState("");
  const [timer, setTimer] = useState(15);
  const img = process.env.PUBLIC_URL + "/monk.webp";


  const playGame = () => {
    let interval;

    if (play) {
      interval = setInterval(() => {
        const newposition = Math.floor(Math.random() * 9);
        setPosition(newposition);
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    setTimeout(() => {
      clearInterval(interval);
      setPosition(null);
      setGameover("game over");
    }, 15000);

    setGameover("lets go");
  };

  const updateScore = (currendposi) => {
    if (currendposi === position) {
      setScore((prev) => prev + 1);
    }
  };

  function resetbtn() {
    setScore(0);
    setGameover(null);
    setPlay(true);
    setTimer(15);
  }

  return (
    <div className="flex justify-center items-center h-screen  border  flex-col gap-5">
      <div className="flex gap-24">
        {" "}
        <h1 className="border w-24 flex justify-center bg-gray-300 border-green-300 rounded-2xl">
          Score: {score}
        </h1>
        <h1 className="border w-24 flex justify-center rounded-2xl border-blue-300">
          {" "}
          Time : {timer}
        </h1>
      </div>
      <h1>{gameover}</h1>

      <div
        className={
          "flex justify-center items-center w-3/12 h-2/4 gap-11 flex-wrap"
        }
      >
        {box.map((value, index) => (
          <div
            key={index}
            className={`flex items-center justify-center border border-black w-24 h-24 ${
              value === position ? "bg-amber-300 " : ""
            }`}
            onClick={() => updateScore(value)}
          >
            {" "}
            {value === position ? (

              <img  src={img} className=" w-24 h-24" />
            ) 
            : (
              ""
            )}{" "}
          </div>
        ))}
      </div>
      <div className="flex gap-5 justify-center items-center">
        <button
          className="border p-2 w-28 rounded-3xl bg-yellow-300 border-green-500"
          onClick={playGame}
        >
          play
        </button>
        <button
          className="border w-16 h-10 rounded-xl text-green-400 border-green-400"
          onClick={resetbtn}
        >
          reset
        </button>
      </div>
    </div>
  );
}
