import React from "react";
import classNames from "classnames";
import Icon from "../../icons/icon/Icon";
import { buttonVariants } from "../button/button.css";
import * as classes from "./shoppingButton.css";

const ShoppingButton = ({
  variant = "default",
  className,
  size = "md",
  disabled = false,
  loading = false,
  value,
}) => {
  return (
    <div
      className={classNames(
        classes.root,
        // classes.root,
        buttonVariants({ size, variant, disabled, loading }),
        // classes.sizeVariants[size],
        className
      )}
    >
      <Icon
        size="xs"
        src="/icons/minus-green.svg"
        ariaLebel="Retirer un produit"
      />
      <span>{value}</span>
      <Icon
        size="xs"
        src="/icons/plus-green.svg"
        ariaLebel="Ajouter un produit"
      />
      {/* <button
        className={classNames(
          // classes.root,
          buttonVariants({ size, variant, disabled, loading }),
          // classes.sizeVariants[size],
          className
        )}
      >
        {loading
          ? (
            <img alt="" src="/icons/loading.svg" />
          ) : (
            <>
              {text}
              {rightIcon}
            </>
          )
        }
      </> */}
    </div>
  );
};

export default ShoppingButton;
