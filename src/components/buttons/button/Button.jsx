import React from "react";
import classNames from "classnames";
import * as classes from "./button.css";

const Button = ({ text, variant = "primary", className, size = "md" }) => {
  return (
    <div
      className={classNames(
        classes.root,
        classes.sizeVariants[size],
        {
          // [classes.disabled]: disabled,
          // [classes.colorVariants[color]]: !disabled,
          // [classes.neutralDisabled]: disabled && color === "neutral",
        },
        className
      )}
    >
      {text}
    </div>
  );
};

export default Button;
