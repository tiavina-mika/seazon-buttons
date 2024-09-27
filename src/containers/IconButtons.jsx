import IconButton from "../components/buttons/IconButton/IconButton";
import Preferences from "../components/icons/Preferences";
import Title from "../components/title/Title";
import * as classes from "./section.css";

const variants = ["default", "neutral"];
const sizes = ["sm", "md"];

const IconButtons = () => {
  return (
    <div className={classes.root}>
      {/* variants */}
      <div className={classes.section}>
        <Title>Variants</Title>
        <div className={classes.buttons}>
          {variants.map((variant, index) => (
            <IconButton variant={variant} key={index}>
              <Preferences size="md" />
            </IconButton>
          ))}
        </div>
      </div>

      {/* sizes */}
      <div className={classes.section}>
        <Title>Sizes</Title>
        <div className={classes.buttons}>
          {sizes.map((size, index) => (
            <IconButton variant="default" key={index}>
              <Preferences size={size} />
            </IconButton>
          ))}
        </div>
      </div>

      {/* disabled */}
      <div className={classes.section}>
        <Title>Disabled</Title>
        <div className={classes.buttons}>
          <IconButton variant="default" disabled>
            <Preferences size="md" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default IconButtons;
