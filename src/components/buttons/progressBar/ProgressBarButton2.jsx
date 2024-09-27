import React from "react";
import classNames from "classnames";
import * as classes from "./progressBarButton.css";

const ProgressBarButton = ({
  text,
  className,
  disabled = false,
  loading = false,
  value = 0,
  onClick,
}) => {
  return (
    // <button
    //   className={classNames(
    //     classes.root,
    //     // buttonVariants({ size, variant, disabled, loading }),
    //     // classes.sizeVariants[size],
    //     className
    //   )}
    // >
    //   {loading ? <img alt="" src="/icons/loading.svg" /> : <>{text}</>}
    // </button>
    <div className={classes.buttonContainer}>
      {/* <button
        className={classes.button}
        // onClick={handleClick}
        // disabled={loading}
      >
        {loading ? "Loading..." : "Click Me"}
      </button> */}
      {/* xxx */}
      <button
        className={classNames(
          classes.button,
          { [classes.buttonEnabled]: value >= 100 }
        )}
        onClick={onClick}
      >
        <div
          className={classes.progressBar}
          // style={{ width: `${progress}%` }}
          style={{ width: `${value}%` }}
        />
        <div
          className={classNames(classes.text, {
            [classes.textEnabled]: value >= 100,
            [classes.textDisabled]: value < 100,
          })}
        >
          <span>{text}</span>
        </div>
      </button>
    </div>
  );
};

export default ProgressBarButton;
