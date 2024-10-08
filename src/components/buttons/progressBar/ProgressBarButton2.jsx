import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import * as classes from "./progressBarButton.css";
import { buttonText } from "../buttonBase.css";

const ProgressBarButton = ({
  text,
  loading = false,
  value = 0,
  onClick,
  className,
}) => {
  const isActive = value >= 100;

  return (
    <div className={classNames(classes.buttonContainer, className)}>
      <button
        className={classNames(classes.button, buttonText, {
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

ProgressBarButton.propTypes = {
  text: PropTypes.string,
  loading: PropTypes.bool,
  value: PropTypes.number,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
export default ProgressBarButton;
