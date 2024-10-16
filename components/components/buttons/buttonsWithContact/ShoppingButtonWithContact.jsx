import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import * as classes from "./buttonWithContact.css";
import ShoppingButton from "../shopping/ShoppingButton";
import ContactButton from "./ContactButton";

const ShoppingButtonWithContact = ({ onClick, text, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <ContactButton />
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

ShoppingButtonWithContact.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
};
export default ShoppingButtonWithContact;
