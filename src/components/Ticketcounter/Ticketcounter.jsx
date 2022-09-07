import React from "react";
import { useState } from "react";
import "./Ticketcounter.scss";

const counterDisplay = document.querySelector(".counter__count");

const Ticketcounter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((count) => count + 1);
  };
  console.log(handleIncrement);

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="counter">
      <h3 className="counter__title">Counter</h3>
      <p className="counter__count">{counter}</p>
      <section className="counter__buttons">
        <button className="counter__buttons-plus" onClick={handleIncrement}>
          +
        </button>

        <button className="counter__buttons-minus" onClick={handleDecrement}>
          -
        </button>
      </section>
    </div>
  );
};

export default Ticketcounter;
