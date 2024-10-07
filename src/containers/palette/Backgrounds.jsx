import Background from "../../components/palette/Background";
import Title from "../../components/title/Title";
import { palette } from "../../styles/seazontheme.css";
import * as classes from "./palette.css";

const Backgrounds = () => {
  return (
    <div className={classes.cols}>
      {["default", "light", "dark"].map((key, index) => (
        <div key={key + index} className={classes.col}>
          <Title>{key}</Title>
          {Object.keys(palette.background).map((variantKey, subIndex) => (
            <div key={variantKey + subIndex}>
              <span>{variantKey}</span>
              <Background variant={variantKey} color={key} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Backgrounds;
