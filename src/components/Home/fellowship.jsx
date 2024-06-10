import React, { useState } from "react";
import styles from "./Home.module.css";

function Fellowship({ lotr }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextXter = () => {
    setCurrentIndex((prevXter) =>
      prevXter === lotr.length - 1 ? 0 : prevXter + 1
    );
  };

  const previousXter = () => {
    setCurrentIndex((prevXter) =>
      prevXter === 0 ? lotr.length - 1 : prevXter - 1
    );
  };

  return (
    <div>
      <img src={lotr[currentIndex].image} alt={lotr[currentIndex].name} />
      <p>{lotr[currentIndex].title}</p>
      <div>
        <button onClick={previousXter}>Previous</button>
        <button onClick={nextXter}>Next</button>
      </div>
    </div>
  );
}

export default Fellowship;
