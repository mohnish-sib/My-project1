import React from "react";
import styles from "./Card.module.css";

export default function Card(props) {
  const deleteItem = () => {
    props.setDetails((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== props.id);
      return updatedGoals;
    });
    console.log("delete", props.id);
  };

  return (
    <div
      className={`${styles.cardContainer}`}
      onClick={deleteItem}
      style={{background:`linear-gradient(0deg, rgba(244, 215, 39, 0.3), rgba(189, 216, 230, 0.3)), url(${props.img})`, backgroundSize: "cover" }}
    >
      <div className={`${styles.itemName} sib-typo_heading-sm`}>{props.title}</div>
      <p
        className={`${styles.subHeading} sib-typo_heading-xs`}
        //   contentEditable="true" spellCheck="true"
      >
        {props.brand}
      </p>
      <h4 className={`${styles.price} sib-typo_heading-sm`}>Rs.{props.amount}</h4>
    </div>
  );
}
