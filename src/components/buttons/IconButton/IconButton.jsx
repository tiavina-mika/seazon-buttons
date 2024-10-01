import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import * as classes from "./iconButton.css";

const IconButton = ({
  variant = "default",
  className,
  disabled = false,
  children,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        classes.iconButtonVariants({ variant, disabled }),
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  variant: PropTypes.oneOf(["default", "neutral"]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
export default IconButton;
