import React, { useState } from "react";
import classNames from "classnames";
import * as classes from "./DotsButton.css";

const SliderButton = ({ className, onChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (index) => {
    setCurrentIndex(index);
    onChange?.(index);
  };

  return (
    <div className={classNames(classes.root, className)}>
      <DotsButton
        length={4}
        onChange={handleChange}
        currentIndex={currentIndex}
      />
    </div>
  );
};

export default SliderButton;
