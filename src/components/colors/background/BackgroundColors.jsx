import React from "react";
import classNames from "classnames";
import * as classes from "./backgroundColors.css";
import { theme } from "../../../styles/theme.css";

const BackgroundColors = () => {
  console.log("theme", theme);
  return <div className={classNames(classes.root)}>x</div>;
};

export default BackgroundColors;
