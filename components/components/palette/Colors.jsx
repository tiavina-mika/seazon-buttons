import React from "react";
import * as classes from "./palette.css";
import { colors } from "../../styles/seazontheme.css";
import Title from "../title/Title";

const Colors = () => {
  return (
    <div className={classes.colorsRoot}>
      {Object.keys(colors).map((colorKey) => (
        <div key={colorKey} className={classes.colorsRow}>
          <Title>
            {colorKey}
          </Title>
          <div className={classes.colorsValue}>
            {Object.keys(colors[colorKey]).map((shadeKey) => (
              <div>
                <div
                  key={shadeKey}
                  className={classes.color}
                  style={{ backgroundColor: colors[colorKey][shadeKey] }}
                />
                <span className={classes.text}>{shadeKey}</span>
                <span className={classes.text}>
                  {colors[colorKey][shadeKey]}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Colors;
