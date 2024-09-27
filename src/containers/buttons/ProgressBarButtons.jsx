import ProgressBarButton from "../components/buttons/shopping/ProgressBarButton";
import Title from "../components/title/Title";
import * as classes from "./section.css";

const variants = ["default", "neutral"];
const loading = false;
const value = 1;

const ProgressBarButtons = () => {
  return (
    <div className={classes.root}>
      <div className={classes.section}>
        <Title>No product:</Title>
        <div className={classes.buttons}>
          {variants.map((variant, index) => (
            <ProgressBarButton
              value={0}
              variant={variant}
              key={index}
              loading={loading}
            />
          ))}
        </div>
      </div>
      {/* <div className={classes.section}>
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
      </div> */}
    </div>
  );
};

export default ProgressBarButtons;
