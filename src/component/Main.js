import { useState } from "react";
import Card from "./card/Card";
import { CARD_DETAILS } from "./details/Details";
import FormComp from "./form/Form";
import "../App.css";

function Main() {
  const [details, setDetails] = useState(CARD_DETAILS);

  

  return (
    <>
      <FormComp />
      <div className="cards-container">
        {details.map((child) => (
          <Card
            title={child.title}
            amount={child.amount}
            info={child.info}
          />
        ))}
      </div>
    </>
  );
}

export default Main;
