import React from "react";
import classNames from "classnames";
import * as classes from "./tag.css";

const Button = ({ text, className, color = "primary" }) => {
  return (
    <div
      className={classNames(
        classes.root,
        {
          [classes.disabled]: disabled,
          [classes.colorVariants[color]]: !disabled,
          [classes.neutralDisabled]: disabled && color === "neutral",
        },
        className
      )}
    >
      {text}
    </div>
  );
};

export default Button;
