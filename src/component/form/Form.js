import React, { useState } from "react";
import { Button, Form, Inputbox } from "@dtsl/react";
import styles from "./Form.module.css";

const digitRegex = /^\d+$/;

export default function FormComp(props) {
  const [userInput, setUserInput] = useState({
    title: "",
    brand: "",
    amount: "",
  });

  const [errors, setErrors] = useState({
    titleError: false,
    brandError: false,
    amountError: false,
  });

  const titleChange = (e) => {
    if (e.target.value.trim() !== "") {
      setErrors({
        ...errors,
        titleError: false,
      });
    }
    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const brandChange = (e) => {
    if (e.target.value.trim() !== "") {
      setErrors({
        ...errors,
        brandError: false,
      });
    }
    setUserInput((prevState) => {
      return { ...prevState, brand: e.target.value };
    });
  };

  const amountChange = (e) => {
    if (digitRegex.test(e.target.value) || !e.target.value) {
      if (e.target.value.trim() !== "") {
        setErrors({
          ...errors,
          amountError: false,
        });
      }
      setUserInput((prevState) => {
        return { ...prevState, amount: e.target.value };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stops page from reload after submit
    props.setItemId((prevState) => prevState + 1);

    props.setDetails((prevState) => {
      return [{ id: props.itemId, ...userInput }, ...prevState];
    });

    setUserInput({
      title: "",
      brand: "",
      amount: "",
    });
  };

  const handleCancel = () => {
    props.setShowFrom((prevState) => !prevState);
  };

  return (
    <>
      <h2 className={`${styles.formHeading} sib-typo_text-interactive`}>
        Add New Items
      </h2>
      <Form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <div className={styles.formItem}>
            <Inputbox
              labelText="Name of item"
              requiredLabel
              placeholder="Enter item name"
              onChange={titleChange}
              value={userInput.title}
              inputType="text"
              className={styles.inputbox}
              isError={errors.titleError}
              specificationText={errors.titleError && "Can't be blank!" }
              onBlur={() => {
                if (userInput.title.trim() === "") {
                  setErrors({
                    ...errors,
                    titleError: true,
                  });
                }
              }}
            />
          </div>
          <div className={styles.formItem}>
            <Inputbox
              labelText="Details"
              requiredLabel
              placeholder="Enter details"
              onChange={brandChange}
              value={userInput.brand}
              inputType="text"
              className={styles.inputbox}
              isError={errors.brandError}
              specificationText={errors.brandError && "Can't be blank!" }
              onBlur={() => {
                if (userInput.title.trim() === "") {
                  setErrors({
                    ...errors,
                    brandError: true,
                  });
                }
              }}
            />
          </div>
          <div className={styles.formItem}>
            <Inputbox
              labelText="Price"
              requiredLabel
              placeholder="Enter price"
              onChange={amountChange}
              value={userInput.amount}
              inputType="text"
              className={styles.inputbox}
              isError={errors.amountError}
              specificationText={errors.amountError && "Can't be blank!" }
              onBlur={() => {
                if (userInput.title.trim() === "") {
                  setErrors({
                    ...errors,
                    amountError: true,
                  });
                }
              }}
            />
          </div>
        </div>
        <div className={styles.btnRow}>
          <Button
            onClick={handleCancel}
            className={styles.btnClass}
            label="Cancel"
            variant="tertiary"
          />
          <Button
            type="submit"
            label="Submit"
            className={styles.btnClass}
            disabled={
              !(
                userInput.title.trim() &&
                userInput.brand.trim() &&
                userInput.amount.trim()
              )
            }
          />
        </div>
      </Form>
    </>
  );
}
/* shift + option + A */

