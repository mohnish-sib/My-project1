import React from "react";
import "./Card.css";

export default function Card(props) {

  const deleteItem = () => {
    props.setDetails(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== props.id);
      return updatedGoals;
    });
    console.log('delete', props.id);
  }

  return (
    <div className="cardContainer" onClick={deleteItem}>
      <h3 className="itemName">{props.title}</h3>
      <p
        className="subHeading"
        //   contentEditable="true" spellCheck="true"
      >
        {props.info}
      </p>
      <h4 className="price">Rs.{props.amount}</h4>
    </div>
  );
}
