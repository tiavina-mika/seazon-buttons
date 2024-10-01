import React, { useState } from "react";
import classNames from "classnames";
import * as classes from "./DotsButton.css";

const DotsButton = ({ className, onChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (index) => {
    setActiveIndex(index);
    onChange?.(index);
  };

  return (
    <div className={classNames(classes.root, className)}>
      {[0, 1, 2].map((_, index) => (
        <div
          className={classNames(
            classes.button,
            index === activeIndex
              ? classes.activeButton
              : classes.inactiveButton
          )}
          key={index}
          role="button"
          tabIndex="0"
          onClick={() => handleChange(index)}
        />
      ))}
    </div>
  );
};

export default DotsButton;
