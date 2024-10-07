import React from 'react';
import PropTypes from 'prop-types';
import * as classes from "./palette.css";
import { palette } from '../../styles/seazontheme.css';

const Icon = ({ variant = 'neutral', color = "default" }) => {
  const backgroundColor = palette.icon[variant][color];

  return (
    <div className={classes.root}>
      <div
        className={classes.content}
        style={{ backgroundColor }}
      />
      <span className={classes.text}>
        {backgroundColor}
      </span>
    </div>
  )
}

Icon.propTypes = {
  variant: PropTypes.oneOf(Object.keys(palette.icon)),
  color: PropTypes.oneOf(["default", "light", "dark"]),
}

export default Icon;