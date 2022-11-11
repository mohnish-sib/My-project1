import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="cardContainer">
      <h3 className="itemName">{props.title}</h3>
      <p className="subHeading" contentEditable="true" spellCheck="true">
        {props.info}
      </p>
      <h4 className="price">Rs.{props.amount}</h4>
    </div>
  );
}
