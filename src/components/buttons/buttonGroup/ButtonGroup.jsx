import React from "react";
import * as classes from "./buttonGroup.css";
import Button from "../button/Button";
import classNames from "classnames";

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

export default ButtonGroup;
