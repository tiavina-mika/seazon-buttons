import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import * as classes from "./switch.css";

const Switch = ({ ariaLabel }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <label className={classes.switchWrapper}>
      <input
        type="checkbox"
        className={classes.checkbox}
        checked={isChecked}
        onChange={handleToggle}
      />
      <span
        className={classNames(classes.slider, {
          [classes.sliderChecked]: isChecked,
        })}
        ariaLabel={ariaLabel}
        role="button"
      />
    </label>
  );
};

Switch.propTypes = {
  ariaLabel: PropTypes.string,
};
export default Switch;
