import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import * as classes from "./buttonGroup.css";
import Button from "../button/Button";

const ButtonGroup = ({
  direction = "row",
  spacing = "justify",
  onSecondaryClick,
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
        <Button text="Button" variant="text" onClick={onSecondaryClick} />
      )}
      <Button
        text="Button"
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
};

export default ButtonGroup;
