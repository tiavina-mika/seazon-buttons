import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Icon from "../../icons/icon/Icon";
import * as classes from "./connectionButton.css";
import { base, buttonText } from "../buttonBase.css";

const ConnectionButton = ({ className, disabled = false, loading = false }) => {
  return (
    <button
      className={classNames(
        base,
        classes.root,
        buttonText,
        {
          [classes.disabled]: disabled,
        },
        className
      )}
    >
      <Icon src="/icons/google.svg" />
      <div className={classes.content}>
        {loading ? (
          <img alt="" src="/icons/loading.svg" className={classes.loading} />
        ) : (
          <span>Se connecter avec Google</span>
        )}
      </div>
    </button>
  );
};

ConnectionButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};
export default ConnectionButton;
