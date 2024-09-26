import ShoppingButton from "../components/buttons/shopping/ShoppingButton";
import Title from "../components/title/Title";
import * as classes from "./section.css";

const variants = ["default", "neutral"];
const sizes = ["sm", "md", "lg"];

const ShoppingShoppingButtons = () => {
  return (
    <div className={classes.root}>
      {/* normal */}
      <div className={classes.section}>
        <Title>Variants:</Title>
        <div className={classes.buttons}>
          {variants.map((variant, index) => (
            <ShoppingButton value={1} variant={variant} key={index} />
          ))}
        </div>
      </div>

      {/* disabled */}
      <div className={classes.section}>
        <Title>Disabled:</Title>
        <div className={classes.buttons}>
          {variants.map((variant, index) => (
            <ShoppingButton variant={variant} key={index} disabled value={1} />
          ))}
        </div>
      </div>

      {/* sizes */}
      <div className={classes.section}>
        <Title>Sizes:</Title>
        <div className={classes.buttons}>
          {sizes.map((size, index) => (
            <ShoppingButton
              value={1}
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
            <ShoppingButton
              value={1}
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
};

export default ShoppingShoppingButtons;
