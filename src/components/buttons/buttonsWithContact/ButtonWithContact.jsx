import React from "react";
import PropTypes from "prop-types";
import * as classes from "./buttonWithContact.css";
import Button from "../button/Button";

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

ButtonWithContact.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default ButtonWithContact;
