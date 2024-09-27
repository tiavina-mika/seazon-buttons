import React from "react";
import Icon from "./Icon";
import PropTypes from "prop-types";

const Preferences = ({ onClick, size, isNotification = false }) => {
  return (
    <Icon
      name={`preferences${isNotification ? "-notification" : ""}`}
      ariaLabel="Filtrer"
      onClick={onClick}
      size={size}
    />
  );
};

Preferences.propTypes = {
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  isNotification: PropTypes.bool,
};

export default Preferences;
