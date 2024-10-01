import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import * as classes from "./buttonWithContact.css";

const ContactButton = ({ className }) => {
  return (
    <button className={classNames(classes.contactButton, className)}>
      <img alt="" src="/icons/contact-button.svg" />
    </button>
  );
};

ContactButton.propTypes = {
  className: PropTypes.string,
};
export default ContactButton;
