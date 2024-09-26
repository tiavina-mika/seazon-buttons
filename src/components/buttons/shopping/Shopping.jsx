import React from "react";
import classNames from "classnames";
import { buttonVariants } from "../button.css";
import { buttonVariants } from "./shopping.css";

const Shopping = ({
  variant = "default",
  className,
  size = "md",
  disabled = false,
  loading = false,
  value
}) => {
  return (
    <div className={classNames(
      // classes.root,
      buttonVariants({ size, variant, disabled, loading }),
      // classes.sizeVariants[size],
      className
    )}
    >
      <Icon
        size={size}
        src="/icons/minus-green.svg"
        ariaLebel="Retirer un produit"
      />
      {value}
      <Icon
        size={size}
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

export default Shopping;
