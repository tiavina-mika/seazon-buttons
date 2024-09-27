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
        // classes.root,
        classes.iconButtonVariants({ variant, disabled }),
        // classes.sizeVariants[size],
        className
      )}
    >
      {children}
    </button>
  );
};

export default IconButton;
