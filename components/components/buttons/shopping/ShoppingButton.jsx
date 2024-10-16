import React, { useEffect, useState } from "react";
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
  onAdd,
  onRemove,
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const handleAdd = () => {
    setCurrentValue(currentValue + 1);
    onAdd();
  };

  const handleRemove = () => {
    if (currentValue === 0) return;
    setCurrentValue(currentValue - 1);
    onRemove();
  };

  return (
    <div
      className={classNames(
        classes.buttonVariants({ size, variant, disabled, loading }),
        classes.root,
        className
      )}
    >
      {/* minus icon */}
      {currentValue !== 0 && (
        <Icon
          size="xs"
          name={disabled ? "minus-green-disabled" : "minus-green"}
          ariaLabel="Retirer un produit"
          className={classes.icon}
          onClick={handleRemove}
        />
      )}
      {/* text */}
      {currentValue !== 0 && !loading && (
        <span className={classes.value}>{currentValue}</span>
      )}
      {loading && (
        <div className={classes.loading}>
          <img alt="" src="/icons/loading.svg" ariaLabel="Loading" />
        </div>
      )}
      {/* plus icon */}
      {!(currentValue === 0 && loading) && (
        <Icon
          size="xs"
          name={disabled ? "plus-green-disabled" : "plus-green"}
          ariaLabel="Ajouter un produit"
          className={classes.icon}
          onClick={handleAdd}
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
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
};
export default ShoppingButton;
