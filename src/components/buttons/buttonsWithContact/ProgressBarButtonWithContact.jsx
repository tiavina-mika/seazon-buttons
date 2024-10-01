import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import ProgressBarButton from "../progressBar/ProgressBarButton2";
import * as classes from "./buttonWithContact.css";

const ProgressBarButtonWithContact = ({ onClick, text, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <button className={classes.contactButton}>
        <img alt="" src="/icons/contact-button.svg" />
      </button>
      <ProgressBarButton
        text={text}
        onClick={onClick}
        className={classes.progressBarButton}
        size="lg"
        value={50}
      />
    </div>
  );
};

ProgressBarButtonWithContact.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
};
export default ProgressBarButtonWithContact;
