import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import * as classes from "./buttonGroup.css";
import Button from "../button/Button";

const ButtonGroup = ({
  direction = "row",
  spacing = "justify",
  onSecondaryClick,
  text,
  secondaryText,
  onClick,
}) => {
  return (
    <div
      className={classNames(
        classes.directionVariant[direction],
        classes.spacingVariant[spacing]
      )}
    >
      {onSecondaryClick && (
        <Button
          text={secondaryText}
          variant="text"
          onClick={onSecondaryClick}
        />
      )}
      <Button
        text={text}
        variant="default"
        onClick={onClick}
        className={classNames({
          [classes.activeButton]: direction === "column",
          [classes.buttonInColumn]: direction === "column",
        })}
      />
    </div>
  );
};

ButtonGroup.propTypes = {
  direction: PropTypes.oneOf(["row", "column"]),
  spacing: PropTypes.oneOf(["justify", "center"]),
  onSecondaryClick: PropTypes.func,
  onClick: PropTypes.func,
  text: PropTypes.string,
  secondaryText: PropTypes.string,
};

export default ButtonGroup;
