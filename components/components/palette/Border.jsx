import React from 'react';
import PropTypes from 'prop-types';
import * as classes from "./palette.css";
import { palette } from '../../styles/seazontheme.css';

const Border = ({ variant = 'neutral', color = "default" }) => {
  const backgroundColor = palette.border[variant][color];

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

Border.propTypes = {
  variant: PropTypes.oneOf(Object.keys(palette.border)),
  color: PropTypes.oneOf(["default", "light", "dark"]),
}

export default Border;