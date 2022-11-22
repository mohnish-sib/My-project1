import React from "react";
import Card from "../card";
import styles from "./CardList.module.css";

export default function CardList(props) {
  const { isLoading, searchedData, setDetails } = props;

  return (
    <>
      <div
        className={`sib-typo_heading-xs`}
        style={{ alignSelf: "flex-end", paddingRight: "2rem" }}
      >
        No. of items: {searchedData.length}
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.cardsContainer}>
          {searchedData.map((child) => (
            <Card
              key={child.id}
              title={child.title}
              amount={child.amount}
              brand={child.brand}
              setDetails={setDetails}
              id={child.id}
              img={child.img}
            />
          ))}
        </div>
      )}
    </>
  );
}
