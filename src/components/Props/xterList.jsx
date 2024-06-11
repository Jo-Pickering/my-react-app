import React from "react";
import Character from "./xter";

function XterList({ xters }) {
  return (
    <div>
      {xters.map((xter) => (
        <Character key={xter.id} title={xter.title} image={xter.image} />
      ))}
    </div>
  );
}

export default XterList;
