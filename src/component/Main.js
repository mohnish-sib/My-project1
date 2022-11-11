import { useState } from "react";
import Card from "./card/Card";
import { CARD_DETAILS } from "./details/Details";
import FormComp from "./form/Form";
import "../App.css";

function Main() {
  const [details, setDetails] = useState(CARD_DETAILS);

  return (
    <>
      <FormComp setDetails={setDetails} />
      <div className="cards-container">
        {details.map((child) => (
          <Card
            key={child.id}
            title={child.title}
            amount={child.amount}
            info={child.info}
          />
        ))}
      </div>
      <img
        width="25%"
        src="https://www.oyorooms.com/blog/wp-content/uploads/2019/06/7-Major-Mountain-Ranges-in-India-that-are-worth-seeing.jpg"
        loading="lazy"
        alt="my img"
      ></img>
    </>
  );
}

export default Main;
