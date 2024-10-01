import React, { useEffect, useState } from "react";
import classNames from "classnames";
import * as classes from "./DotsButton.css";

const DotsButton = ({ className, onChange, currentIndex = 0, length = 3 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(currentIndex);
  }, []);

  const handleChange = (index) => {
    setActiveIndex(index);
    onChange?.(index);
  };

  return (
    <div className={classNames(classes.root, className)}>
      {new Array(length).fill(0).map((_, index) => (
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
