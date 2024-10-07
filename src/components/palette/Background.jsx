import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as classes from "./palette.css";
import { palette } from '../../styles/seazontheme.css';

const Background = ({ variant = 'neutral', color = "default" }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  }

  const handleMouseLeave = () => {
    setHovered(false);
  }

  const backgroundColor = hovered ? palette.backgroundHover[variant][color] : palette.background[variant][color];

  return (
    <div className={classes.root}>
      <div
        className={classes.content}
        style={{ backgroundColor }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <span className={classes.text}>
        {backgroundColor}
      </span>
    </div>
  )
}

Background.propTypes = {
  variant: PropTypes.oneOf(Object.keys(palette.background)),
  color: PropTypes.oneOf(["default", "light", "dark"]),
}

export default Background;