import React from 'react';
import classNames from 'classnames';
import * as classes from "./icon.css";

const Icon = ({
  /**
   * full path of the icon
   * if src is provided then name is not required
   */
  src,
  /**
   * Name of the icon
   * if name is provided then src is not required
   * name is used to get the icon from the /pictures/icons folder
   * so the name should be the name of the svg file without the extension
   */
  name,
  alt = "",
  ariaLabel,
  onClick,
  /**
   * size of the icon (xs, sm, md)
   */
  size = 'md'
}) => {

  const props = ariaLabel
    ? { 'aria-label': ariaLabel, role: 'button', 'aria-pressed' :false }
    : { 'aria-hidden': true };

  return (
    <img
      src={name ? `/pictures/icons/${name}.svg` : src}
      alt={alt}
      className={classNames(
        classes.icon,
        { [classes.iconButton]: !!onClick && !!ariaLabel },
        classes.sizeVariants[size],
      )}
      onClick={onClick}
      {...props}
    />
  );
};

export default Icon;