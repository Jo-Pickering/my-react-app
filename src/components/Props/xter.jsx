import React from "react";

function Character({ title, image }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h1>{title}</h1>
    </div>
  );
}

export default Character;
