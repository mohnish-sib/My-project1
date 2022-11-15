import React from "react";
import { Button, Inputbox } from "@dtsl/react";
import "./ShowForm.css";

export default function ShowForm(props) {
  const { setShowFrom, searchInput, setSearchInput } = props;

  const showForm = () => {
    setShowFrom((prevState) => !prevState);
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="showForm">
      <Inputbox 
        placeholder="Search"
        inputType="search"  
        className="searchInput"
        value={searchInput}
        onChange={handleSearch}
        autoFocus
      />
      <Button onClick={showForm} label="Show Form" />
    </div>
  );
}
