import React from "react";
import { Button, Inputbox } from "@dtsl/react";
import styles from "./ShowForm.module.css";

export default function ShowForm(props) {
  const { setShowFrom, searchInput, setSearchInput } = props;

  const showForm = () => {
    setShowFrom((prevState) => !prevState);
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className={styles.showForm}>
      <Inputbox
        placeholder="Search"
        inputType="search"
        className={styles.searchInput}
        value={searchInput}
        onChange={handleSearch}
        onReset={() => {
          setSearchInput("");
        }}
        autoFocus
      />
      <Button onClick={showForm} label="Show Form" />
    </div>
  );
}
