import React from "react";
import classNames from "classnames";
import { buttonVariants } from "./button.css";
// import * as classes from "./button.css";

const Button = ({
  text,
  variant = "default",
  className,
  size = "md",
  disabled = false,
  rightIcon
}) => {
  return (
    <button
      className={classNames(
        // classes.root,
        buttonVariants({ size, variant, disabled }),
        // classes.sizeVariants[size],
        className
      )}
    >
      {text}
      {rightIcon}
    </button>
  );
};

export default Button;
