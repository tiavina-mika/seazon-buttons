import React from "react";
import classNames from "classnames";
import * as classes from "./DotsButton.css";

const DotsButton = ({ className, onChange }) => {
  return (
    <div className={classNames(classes.root, className)}>
      {[0, 1, 2].map((_, index) => (
        <div
          className={classes.button}
          key={index}
          role="button"
          tabIndex="0"
          onClick={() => onChange?.(index)}
        />
      ))}
    </div>
  );
};

export default DotsButton;
