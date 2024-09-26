import Button from "../../components/buttons/button/Button";
import Title from "../../components/title/Title";
import * as classes from "./buttons.css";

const variants = ["default", "neutral", "text"];
const sizes = ["sm", "md", "lg"];

const Buttons = () => {
  return (
    <div className={classes.root}>
      {/* normal */}
      <div className={classes.section}>
        <Title>Variants:</Title>
        <div className={classes.buttons}>
          {variants.map((variant, index) => (
            <Button text="Label" variant={variant} key={index} />
          ))}
        </div>
      </div>

      {/* disabled */}
      <div className={classes.section}>
        <Title>Disabled:</Title>
        <div className={classes.buttons}>
          {variants.map((variant, index) => (
            <Button text="Label" variant={variant} key={index} disabled />
          ))}
        </div>
      </div>

      {/* right icon */}
      <div className={classes.section}>
        <Title>With right icon:</Title>
        <div className={classes.buttons}>
          {variants.map((variant, index) => (
            <Button
              text="Label"
              variant={variant}
              key={index}
              rightIcon={<img alt="" src="/icons/delete.svg" />}
            />
          ))}
        </div>
      </div>

      {/* sizes */}
      <div className={classes.section}>
        <Title>Sizes:</Title>
        <div className={classes.buttons}>
          {sizes.map((size, index) => (
            <Button
              text="Label"
              variant="default"
              key={index}
              rightIcon={<img alt="" src="/icons/delete.svg" />}
              size={size}
            />
          ))}
        </div>
      </div>

      {/* sizes with loading */}
      <div className={classes.section}>
        <Title>Loading with sizes:</Title>
        <div className={classes.buttons}>
          {sizes.map((size, index) => (
            <Button
              text="Label"
              variant="default"
              key={index}
              // rightIcon={<img alt="" src="/icons/delete.svg" />}
              loading
              size={size}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Buttons;
