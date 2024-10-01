import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Icon from "../../icons/icon/Icon";
import * as classes from "./shoppingButton.css";

const ShoppingButton = ({
  variant = "default",
  className,
  size = "md",
  disabled = false,
  loading = false,
  value = 0,
}) => {
  return (
    <div
      className={classNames(
        classes.buttonVariants({ size, variant, disabled, loading }),
        classes.root,
        className
      )}
    >
      {/* minus icon */}
      {value !== 0 && (
        <Icon
          size="xs"
          name={disabled ? "minus-green-disabled" : "minus-green"}
          ariaLabel="Retirer un produit"
          className={classes.icon}
        />
      )}
      {/* text */}
      {value !== 0 && !loading && (
        <span className={classes.value}>{value}</span>
      )}
      {loading && (
        <div className={classes.loading}>
          <img alt="" src="/icons/loading.svg" />
        </div>
      )}
      {/* plus icon */}
      {!(value === 0 && loading) && (
        <Icon
          size="xs"
          name={disabled ? "plus-green-disabled" : "plus-green"}
          ariaLabel="Ajouter un produit"
          className={classes.icon}
        />
      )}
    </div>
  );
};

ShoppingButton.propTypes = {
  variant: PropTypes.oneOf(["default", "neutral"]),
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  value: PropTypes.number,
};
export default ShoppingButton;
