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

export default Button;
