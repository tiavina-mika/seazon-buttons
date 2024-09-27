import IconButton from "../components/buttons/IconButton/IconButton";
import Title from "../components/title/Title";
import * as classes from "./section.css";

const variants = ["default", "neutral"];

const IconButtons = () => {
  return (
    <div className={classes.root}>
      {/* 25% */}
      <div className={classes.section}>
        <Title>Neutral</Title>
        <div className={classes.buttons}>
          {variants.map((variant, index) => (
            <IconButton variant={variant} key={index}>
              <Preferences size="md" />
            </IconButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconButtons;
