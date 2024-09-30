import React from "react";
import * as classes from "./buttonWithContact.css";
import Button from "../button/Button";

const ButtonWithContact = ({ onClick, text }) => {
  return (
    <div className={classes.root}>
      <button className={classes.contactButton}>
        <img alt="" src="/icons/contact-button.svg" />
      </button>
      <Button
        text={text}
        variant="default"
        onClick={onClick}
        className={classes.button}
        size="lg"
        // className={classNames({
        //   [classes.activeButton]: direction === "column",
        //   [classes.buttonInColumn]: direction === "column",
        // })}
      />
    </div>
  );
};

export default ButtonWithContact;
