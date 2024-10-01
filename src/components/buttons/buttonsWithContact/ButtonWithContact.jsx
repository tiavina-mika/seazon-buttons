import React from "react";
import PropTypes from "prop-types";
import * as classes from "./buttonWithContact.css";
import Button from "../button/Button";
import ContactButton from "./ContactButton";

const ButtonWithContact = ({ onClick, text, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <ContactButton />
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
