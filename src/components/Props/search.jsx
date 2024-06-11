import React from "react";

function Search({ input, setInput }) {
  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search me..."
      ></input>
    </div>
  );
}

export default Search;
