import React, { useState } from "react";
import "./Form.css";

export default function FormComp() {
  const [userInput, setUserInput] = useState({
    name: "",
    detail: "",
    amount: "",
  });

  const nameChange = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };

  const detailChange = (e) => {
    setUserInput((prevState) => {
        return { ...prevState, detail: e.target.value };
      });
  };

  const amountChange = (e) => {
    setUserInput((prevState) => {
        return { ...prevState, amount: e.target.value };
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stops page from reload after submit
    alert(`Entered value is ${userInput.name}`);
    setUserInput({
      name: "",
      detail: "",
      amount: "",
    });
  };

  return (
    <>
      <h2 className="formHeading">Make a card:</h2>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div className="formItem">
            <label>Name of item </label>
            <input
              type="text"
              value={userInput.name}
              onChange={nameChange}
            ></input>
          </div>
          <div className="formItem">
            <label>Details </label>
            <input
              type="text"
              value={userInput.detail}
              onChange={detailChange}
            ></input>
          </div>
          <div className="formItem">
            <label>Enter price </label>
            <input
              type="text"
              value={userInput.amount}
              onChange={amountChange}
            ></input>
          </div>
        </div>
        <button
          type="submit"
          className="submitBtn"
          disabled={
            !(
              userInput.name.trim() &&
              userInput.detail.trim() &&
              userInput.amount.trim()
            )
          }
        >
          Submit
        </button>
      </form>
    </>
  );
}
/* shift + option + A */
