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
        classes.root,
        classes.buttonVariants({ size, variant, disabled, loading }),
        className
      )}
    >
      {/* minus icon */}
      {value !== 0 && (
        <Icon
          size="xs"
          src={`/icons/minus-green${disabled ? "-disabled" : ""}.svg`}
          ariaLebel="Retirer un produit"
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
          src={`/icons/plus-green${disabled ? "-disabled" : ""}.svg`}
          ariaLebel="Ajouter un produit"
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
