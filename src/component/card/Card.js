import React from "react";
import styles from "./Card.module.css";
import Xcircle from "@dtsl/icons/dist/icons/react/Xcircle";

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
      style={{
        background: `linear-gradient(0deg, rgba(244, 215, 39, 0.3), rgba(189, 216, 230, 0.3)), url(${props.img})`,
        backgroundSize: "cover",
      }}
    >
      <div className={`${styles.itemName}`} style={{ position: "relative" }}>
        <div className="sib-typo_heading-sm">{props.title}</div>
        <div className={styles.crossIcon} onClick={deleteItem}>
          <Xcircle className={styles.iconStyle} />
        </div>
      </div>
      <div
        className={`${styles.subHeading} sib-typo_heading-xs`}
        //   contentEditable="true" spellCheck="true"
      >
        {props.brand}
      </div>
      <div className={`${styles.price} sib-typo_heading-sm`}>
        Rs.{props.amount}
      </div>
    </div>
  );
}
