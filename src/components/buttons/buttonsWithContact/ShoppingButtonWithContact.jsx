import React from "react";
import * as classes from "./buttonWithContact.css";
import ShoppingButton from "../shopping/ShoppingButton";

const ShoppingButtonWithContact = ({ onClick, text }) => {
  return (
    <div className={classes.root}>
      <button className={classes.contactButton}>
        <img alt="" src="/icons/contact-button.svg" />
      </button>
      <ShoppingButton
        text={text}
        variant="default"
        onClick={onClick}
        className={classes.shoppingButton}
        size="lg"
        value={1}
        // className={classNames({
        //   [classes.activeButton]: direction === "column",
        //   [classes.buttonInColumn]: direction === "column",
        // })}
      />
    </div>
  );
};

export default ShoppingButtonWithContact;
