import React, { useState } from "react";
import "./Form.css";

const digitRegex =  /^\d+$/;

export default function FormComp(props) {
  const [userInput, setUserInput] = useState({
    title: "",
    info: "",
    amount: "",
  });

  const titleChange = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const infoChange = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, info: e.target.value };
    });
  };

  const amountChange = (e) => {
    if(!digitRegex.test(e.target.value)) return;
    setUserInput((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stops page from reload after submit

    props.setDetails((prevState) => {
        return [userInput , ...prevState];
    });

    setUserInput({
      title: "",
      info: "",
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
              value={userInput.title}
              onChange={titleChange}
              autoFocus
            ></input>
          </div>
          <div className="formItem">
            <label>Details </label>
            <input
              type="text"
              value={userInput.info}
              onChange={infoChange}
              inputMode="numeric"
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
              userInput.title.trim() &&
              userInput.info.trim() &&
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
