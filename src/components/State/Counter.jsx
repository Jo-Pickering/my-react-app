import React, { useState } from "react";

function Counter() {
  const [currentCounter, setCounter] = useState(0);

  const raiseCounter = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const lowerCounter = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  const resetCounter = () => {
    setCounter((prevCount) => (prevCount = 0));
  };

  const randomCount = () => {
    setCounter((prevCount) => (prevCount = Math.floor(Math.random() * 100)));
  };

  return (
    <div>
      <h1>Orc Kill Counter</h1>
      <h2>{currentCounter}</h2>
      <button onClick={raiseCounter}>Higher</button>
      <button onClick={lowerCounter}>Lower</button>
      <button onClick={resetCounter}>Start Again</button>
      <button onClick={randomCount}>Randomise</button>
    </div>
  );
}

export default Counter;
