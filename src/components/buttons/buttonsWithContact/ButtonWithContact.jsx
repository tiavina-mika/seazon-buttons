import React from "react";
import * as classes from "./buttonWithContact.css";
import Button from "../button/Button";
import classNames from "classnames";

const ButtonWithContact = ({ onClick, text, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <button className={classes.contactButton}>
        <img alt="" src="/icons/contact-button.svg" />
      </button>
      <Button
        text={text}
        variant="default"
        onClick={onClick}
        className={classes.button}
        size="lg"
      />
    </div>
  );
};

export default ButtonWithContact;
