import React from "react";
import classNames from "classnames";
import * as classes from "./progressBarButton.css";

const ProgressBarButton = ({
  text,
  className,
  disabled = false,
  loading = false,
  value = 0,
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
      <div className={classes.progressBarContainer}>
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
      </div>
    </div>
  );
};

export default ProgressBarButton;
