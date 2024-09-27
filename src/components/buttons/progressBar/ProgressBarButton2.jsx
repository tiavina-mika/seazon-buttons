import React from "react";
import classNames from "classnames";
import * as classes from "./progressBarButton.css";

const ProgressBarButton = ({ text, loading = false, value = 0, onClick }) => {
  const isActive = value >= 100;

  return (
    <div className={classes.buttonContainer}>
      <button
        className={classNames(classes.button, {
          [classes.buttonEnabled]: isActive,
        })}
        onClick={!(loading && isActive) ? onClick : undefined}
      >
        <div className={classes.progressBar} style={{ width: `${value}%` }} />
        <div
          className={classNames(classes.text, {
            [classes.textEnabled]: isActive,
            [classes.textDisabled]: value < 100,
          })}
        >
          {loading && isActive ? (
            <img
              alt=""
              src="/icons/loading.svg"
              role="button"
              aria-label="Loading"
            />
          ) : (
            <span>{text}</span>
          )}
        </div>
      </button>
    </div>
  );
};

export default ProgressBarButton;
