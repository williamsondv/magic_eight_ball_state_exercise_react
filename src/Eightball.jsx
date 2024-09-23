import React from "react";
import { useState } from "react";
import "./Eightball.css";

function randomChoice(arr) {
  const randNum = Math.floor(Math.random() * 20);
  const result = { msg: arr[randNum].msg, color: arr[randNum].color };

  return result;
}

const Eightball = (props) => {
  const [answer, setAnswer] = useState({
    msg: "Think of a question",
    color: "black",
  });

  return (
    <>
      <div
        style={{ backgroundColor: answer.color }}
        className="eightball"
        onClick={() => setAnswer(randomChoice(props.props))}
      >
        <p>{answer.msg}</p>
      </div>
      <div>
        <button
          className="button"
          onClick={() =>
            setAnswer({ msg: "Think of a question", color: "black" })
          }
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Eightball;
