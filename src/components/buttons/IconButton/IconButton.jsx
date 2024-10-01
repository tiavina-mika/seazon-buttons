import React from "react";
import classNames from "classnames";
import * as classes from "./iconButton2.css";

const IconButton = ({
  variant = "default",
  className,
  disabled = false,
  children,
}) => {
  return (
    <button
      className={classNames(
        classes.iconButtonVariants({ variant, disabled }),
        className
      )}
    >
      {children}
    </button>
  );
};

export default IconButton;
