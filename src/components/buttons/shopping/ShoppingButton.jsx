import React from "react";
import classNames from "classnames";
import Icon from "../../icons/icon/Icon";
// import { buttonVariants } from "../button/button.css";
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
      {value !== 0 && (
        <>
          <Icon
            size="xs"
            src="/icons/minus-green.svg"
            ariaLebel="Retirer un produit"
          />
          <span>{value}</span>
        </>
      )}
      <Icon
        size="xs"
        src="/icons/plus-green.svg"
        ariaLebel="Ajouter un produit"
      />
    </div>
  );
};

export default ShoppingButton;
