import { useState } from "react";
import Card from "./card/Card";
import { CARD_DETAILS } from "./details/Details";
import FormComp from "./form/Form";
import "../App.css";
import ShowForm from "./showFormBTN/ShowForm";
import PlusCircle from '@dtsl/icons/dist/icons/react/PlusCircle';

function Main() {
  const [details, setDetails] = useState(CARD_DETAILS);

  const [showFrom, setShowFrom] = useState(false);

  return (
    <>
    {/* <PlusCircle /> */}
    <div className="sib-typo_heading-xl" >hello world!</div>
      {!showFrom ? (
        <ShowForm setShowFrom={setShowFrom} />
      ) : (
        <FormComp setDetails={setDetails} details={details} setShowFrom={setShowFrom} />
      )}

      <div className="cards-container">
        {details.map((child, idx) => (
          <Card
            key={child.id}
            title={child.title}
            amount={child.amount}
            info={child.info}
            setDetails={setDetails}
            id={child.id}
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
