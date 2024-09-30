import React from "react";
import * as classes from "./buttonWithContact.css";
import ShoppingButton from "../shopping/ShoppingButton";

const ShoppingButtonWithContact = ({ onClick, text, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
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
      />
    </div>
  );
};

export default ShoppingButtonWithContact;
