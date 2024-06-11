import React, { useState } from "react";
import styles from "./Form.module.css";

function Form() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleReasonChange(event) {
    setReason(event.target.value);
  }

  const resetForm = () => {
    setName((PrevName) => PrevName = "")
    setReason((PrevReason) => PrevReason = "")
  }


  return (
    <form>
      <h1>Apply for a Hobbit Hole:</h1>
      <label for="name">Name</label>
      <input type="text" id="name" onChange={handleNameChange}></input>
      <label for="reason">Why do you want a hobbit hole?</label>
      <input type="text" id="reason" onChange={handleReasonChange}></input>
      <button onClick={resetForm}>Reset Form</button>
      <h2>View your form:</h2>
      <p>{name}</p>
      <p>{reason}</p>
    </form>
  );
}

export default Form;
