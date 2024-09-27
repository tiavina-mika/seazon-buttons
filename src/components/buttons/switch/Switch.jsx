import React, { useState } from "react";
import classNames from "classnames";
import * as classes from "./switch.css";

const Switch = () => {
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
      />
    </label>
  );
};

export default Switch;
