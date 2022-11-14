import React from "react";
import { Button } from "@dtsl/react";
import "./ShowForm.css";

export default function ShowForm(props) {
  const handleClick = () => {
    props.setShowFrom((prevState) => !prevState);
  };

  return (
    <div className="showForm">
      <Button onClick={handleClick} label="Show Form" />
    </div>
  );
}
