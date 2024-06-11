import React, { useState, useEffect } from "react";

function Countdown() {
  const [time, setTime] = useState(new Date());

  //useEffect sets and updates current time for clock
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  //sets release date for Rings of Power S2 - Aug = 7 as Jan = 0
  const releaseDate = new Date(time.getFullYear(), 7, 29);

  //Calculations for time left
  const days = 1000 * 60 * 60 * 24;
  const minutes = 1000 * 60 * 60;
  const seconds = 1000 * 60;

  const remainingTime = releaseDate - time;
  const remainingDays = Math.floor(remainingTime / days);
  const remainingHours = Math.floor((remainingTime % days) / minutes);
  const remainingMinutes = Math.floor((remainingTime % minutes) / seconds);
  const remainingSeconds = Math.floor((remainingTime % seconds) / 1000);

  //To be rendered on browser
  return (
    <div>
      <h1>Time now</h1>
      <p>{time.toLocaleTimeString()}</p>
      <h1>Until Rings of Power Season 2 release:</h1>
      <p>Days: {remainingDays}</p>
      <p>Hours: {remainingHours}</p>
      <p>Minutes: {remainingMinutes}</p>
      <p>Seconds: {remainingSeconds}</p>
    </div>
  );
}

export default Countdown;
