import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { buttonVariants } from "./button.css";

const Button = ({
  text,
  variant = "default",
  className,
  size = "md",
  disabled = false,
  loading = false,
  rightIcon,
}) => {
  return (
    <button
      className={classNames(
        buttonVariants({ size, variant, disabled, loading }),
        className
      )}
    >
      {loading ? (
        <img alt="" src="/icons/loading.svg" />
      ) : (
        <>
          {text}
          {rightIcon}
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["default", "neutral", "text"]),
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  rightIcon: PropTypes.node,
};

export default Button;
