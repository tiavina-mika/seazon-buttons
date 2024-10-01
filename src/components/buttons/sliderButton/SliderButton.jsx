import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
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
        <Icon name="chevron-left-green" alt="left" size="xs" />
      </IconButton>
      {/* dots */}
      <DotsButton
        length={length}
        onChange={handleChange}
        currentIndex={currentIndex}
      />
      {/* right icon */}
      <IconButton onClick={handleNext} disabled={currentIndex === length - 1}>
        <Icon name="chevron-right-green" alt="right" size="xs" />
      </IconButton>
    </div>
  );
};

SliderButton.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  length: PropTypes.number,
};
export default SliderButton;
