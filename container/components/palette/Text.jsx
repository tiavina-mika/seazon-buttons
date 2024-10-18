import React from 'react';
import PropTypes from 'prop-types';
import * as classes from "./palette.css";
import { palette } from '../../styles/seazontheme.css';

const Text = ({ variant = 'neutral', color = "default" }) => {
  const backgroundColor = palette.text[variant][color];

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

Text.propTypes = {
  variant: PropTypes.oneOf(Object.keys(palette.text)),
  color: PropTypes.oneOf(["default", "light", "dark"]),
}

export default Text;