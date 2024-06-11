import React from "react";
import Character from "./xter";

function XterList({ xters, filter }) {
  const filterArray = xters.filter((xter) =>
    xter.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {filterArray.map((xter) => (
        <Character key={xter.id} title={xter.title} image={xter.image} />
      ))}
    </div>
  );
}

export default XterList;
