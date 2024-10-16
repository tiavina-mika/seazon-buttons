import ShoppingButton from "../components/buttons/shopping/ShoppingButton";
import Title from "../components/title/Title";
import * as classes from "./section.css";

const variants = ["default", "neutral"];
const sizes = ["sm", "md", "lg"];
const loading = false;
const value = 1;

const ShoppingButtons = () => {
  return (
    <div className={classes.root}>
      {/* normal */}
      <div className={classes.section}>
        <Title>No product:</Title>
        <div className={classes.buttons}>
          {variants.map((variant, index) => (
            <ShoppingButton
              value={0}
              variant={variant}
              key={index}
              loading={loading}
            />
          ))}
          <ShoppingButton value={0} loading={loading} size="sm" />
          <ShoppingButton value={0} loading={loading} size="lg" />
        </div>
      </div>
      {/* normal */}
      <div className={classes.section}>
        <Title>Variants:</Title>
        <div className={classes.buttons}>
          {variants.map((variant, index) => (
            <ShoppingButton
              value={value}
              variant={variant}
              key={index}
              loading={loading}
            />
          ))}
        </div>
      </div>

      {/* disabled */}
      <div className={classes.section}>
        <Title>Disabled:</Title>
        <div className={classes.buttons}>
          {variants.map((variant, index) => (
            <ShoppingButton
              variant={variant}
              key={index}
              disabled
              value={value}
            />
          ))}
        </div>
      </div>

      {/* sizes */}
      <div className={classes.section}>
        <Title>Sizes:</Title>
        <div className={classes.buttons}>
          {sizes.map((size, index) => (
            <ShoppingButton
              value={value}
              variant="default"
              key={index}
              size={size}
              loading={loading}
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
              value={value}
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

export default ShoppingButtons;
