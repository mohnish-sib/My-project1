import React from "react";
import { Button } from "@dtsl/react";
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
      <input
        className="searchInput"
        value={searchInput}
        onChange={handleSearch}
        placeholder="Search"
        autoFocus
      />
      <Button onClick={showForm} label="Show Form" />
    </div>
  );
}
