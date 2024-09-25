import React from "react";
// import { createUseStyles } from "react-jss";
import classNames from "classnames";
import * as classes from "./tag.css";

// const useStyles = createUseStyles((theme) => ({
//   tag: {
//     display: "flex",
//     height: 32,
//     padding: "8px 16px",
//     alignItems: "center",
//     gap: 4,
//     flexShrink: 0,
//     borderRadius: 999999,

//     // text
//     overflow: "hidden",
//     color: "#fff",
//     textOverflow: "ellipsis",
//     fontSize: 14,
//     fontStyle: "normal",
//     fontWeight: 500,
//     lineHeight: 1,
//     letterSpacing: 0.3,
//   },
//   center: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   closeButton: {
//     composes: "$center",
//     backgroundColor: "transparent",
//     border: "none",
//     padding: 0,
//     marginLeft: 2,
//     cursor: "pointer",
//   },
//   icon: {
//     composes: "$center",
//     marginRight: 4,
//   },
//   primary: {
//     backgroundColor: theme.palette.background.neutral.dark,
//     color: theme.palette.text.neutral.white,
//     "&:focus, &:focus-within, &:focus-visible": {
//       border: "2px solid " + theme.palette.border.primary.default,
//     },
//     "&:hover": {
//       backgroundColor: theme.palette.backgroundHover.success.default,
//     },
//   },
// }));

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
