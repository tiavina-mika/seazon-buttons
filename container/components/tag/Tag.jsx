import React from "react";
import classNames from "classnames";
import * as classes from "./tag.css";

const Tag = ({
  // left icon
  icon,
  // left icon in disabled state
  iconDisabled,
  // right icon
  closeIcon,
  onClose,
  label,
  className,
  disabled = false,
  color = "primary",
}) => {
  const handleClose = () => {
    if (disabled) return;
    onClose && onClose();
  };

  const renderIcon = () => {
    if (closeIcon) return closeIcon;
    if (disabled) return <img src="pictures/icons/close-disabled.svg" alt="" />;
    // Render different icons based on the variant
    switch (color) {
      case "primary":
      case "secondary":
        return <img src="pictures/icons/close-white.svg" alt="" />;
      default:
        return <img src="pictures/icons/close-grey.svg" alt="" />;
    }
  };

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
      {/* left icon */}
      {icon && (
        <span className={classes.icon}>
          {disabled && iconDisabled ? iconDisabled : icon}
        </span>
      )}
      {/* text */}
      {label}
      {/* close icon */}
      {onClose && (
        <button className={classes.closeButton} onClick={handleClose}>
          {renderIcon()}
        </button>
      )}
    </div>
  );
};

export default Tag;
