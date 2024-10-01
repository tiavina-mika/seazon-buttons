import React, { useState } from "react";
import classNames from "classnames";
import * as classes from "./sliderButton.css";
import IconButton from "../IconButton/IconButton";
import Icon from "../../icons/icon/Icon";
import DotsButton from "../dots/DotsButton";

const SliderButton = ({ className, onChange, length = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (index) => {
    setCurrentIndex(index);
    onChange?.(index);
  };

  const handleNext = () => {
    if (currentIndex < length - 1) {
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
      {/* left icon */}
      <IconButton onClick={handlePrev} disabled={currentIndex === 0}>
        <Icon src="/icons/chevron-left-green.svg" alt="left" size="xs" />
      </IconButton>
      {/* dots */}
      <DotsButton
        length={length}
        onChange={handleChange}
        currentIndex={currentIndex}
      />
      {/* right icon */}
      <IconButton onClick={handleNext} disabled={currentIndex === length - 1}>
        <Icon src="/icons/chevron-right-green.svg" alt="right" size="xs" />
      </IconButton>
    </div>
  );
};

export default SliderButton;
