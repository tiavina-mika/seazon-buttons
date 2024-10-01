import React, { useState } from "react";
import classNames from "classnames";
import * as classes from "./sliderButton.css";
import IconButton from "../IconButton/IconButton";
import Icon from "../../icons/icon/Icon";
import DotsButton from "../dots/DotsButton";

const SliderButton = ({ className, onChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (index) => {
    setCurrentIndex(index);
    onChange?.(index);
  };

  const handleNext = () => {
    if (currentIndex < 3) {
      handleChange(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      handleChange(currentIndex - 1);
    }
  };

  return (
    <div className={classNames(classes.root, className)}>
      <IconButton onClick={handlePrev}>
        <Icon src="/icons/chevron-left-green.svg" alt="left" size="xs" />
      </IconButton>
      <DotsButton
        length={4}
        onChange={handleChange}
        currentIndex={currentIndex}
      />
      <IconButton onClick={handleNext}>
        <Icon src="/icons/chevron-right-green.svg" alt="right" size="xs" />
      </IconButton>
    </div>
  );
};

export default SliderButton;
