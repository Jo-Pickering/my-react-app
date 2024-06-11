import React, { useState, useEffect } from "react";

function Countdown() {
  const [timeNow, setTimeNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Time now</h1>
      <p>{timeNow.toLocaleTimeString()}</p>
    </div>
  );
}

export default Countdown;
