import React from "react";
import classNames from "classnames";
import Icon from "../../icons/icon/Icon";
import * as classes from "./connectionButton.css";

const ConnectionButton = ({
  variant = "default",
  className,
  disabled = false,
  loading = false,
}) => {
  return (
    <button
      className={classNames(
        classes.root,
        // classes.buttonVariants({ size, variant, disabled, loading }),
        className
      )}
    >
      {/* <img alt="" src="/icons/google.svg" /> */}
      <Icon src="/icons/google.svg" />
      <div className={classes.content}>
        {loading ? (
          // <div className={classes.loading}>
          <img alt="" src="/icons/loading.svg" />
        ) : (
          // </div>
          <span>Se connecter avec Google</span>
        )}
      </div>
    </button>
  );
};

export default ConnectionButton;
