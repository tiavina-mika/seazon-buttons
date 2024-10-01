import React from "react";
import classNames from "classnames";
import Icon from "../../icons/icon/Icon";
import * as classes from "./connectionButton.css";
import { base, buttonText } from "../buttonBase.css";

const ConnectionButton = ({
  variant = "default",
  className,
  disabled = false,
  loading = false,
}) => {
  return (
    <button
      className={classNames(
        base,
        classes.root,
        buttonText,
        {
          [classes.disabled]: disabled,
        },
        // classes.buttonVariants({ size, variant, disabled, loading }),
        className
      )}
    >
      {/* <img alt="" src="/icons/google.svg" /> */}
      <Icon src="/icons/google.svg" />
      <div className={classes.content}>
        {loading ? (
          <img alt="" src="/icons/loading.svg" className={classes.loading} />
        ) : (
          // </div>
          <span>Se connecter avec Google</span>
        )}
      </div>
    </button>
  );
};

export default ConnectionButton;