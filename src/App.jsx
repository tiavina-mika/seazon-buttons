import Button from "./components/buttons/button/Button";
import Title from "./components/title/Title";
import { seazonTheme } from "./styles/seazontheme.css";
import * as classes from "./app.css";
import './index.css';

const variants = ["default", "neutral", "text"];
const sizes = ["sm", "md", "lg"];

function App() {
  return (
    <div className={seazonTheme}>
      <div className={classes.root}>
        {/* normal */}
        {/* <div>
          <Title>Normal</Title>
          <div className={classes.row}>
            {variants.map((variant, index) => (
              <Button text="label" variant={variant} key={index} />
            ))}
          </div>
        </div> */}

        {/* disabled */}
        <div>
          <Title>Disabled</Title>
          <div className={classes.row}>
            {variants.map((variant, index) => (
              <Button text="label" variant={variant} key={index} disabled />
            ))}
          </div>
        </div>

        {/* right icon */}
        <div>
          <Title>With right icon</Title>
          <div className={classes.row}>
            {variants.map((variant, index) => (
              <Button
                text="label"
                variant={variant}
                key={index}
                rightIcon={<img alt="" src="/icons/delete.svg" />}
              />
            ))}
          </div>
        </div>

        {/* sizes */}
        <div>
          <Title>Sizes</Title>
          <div className={classes.row}>
            {sizes.map((size, index) => (
              <Button
                text="label"
                variant="default"
                key={index}
                rightIcon={<img alt="" src="/icons/delete.svg" />}
                size={size}
              />
            ))}
          </div>
        </div>

        {/* sizes */}
        <div>
          <Title>Loading with sizes</Title>
          <div className={classes.row}>
            {sizes.map((size, index) => (
              <Button
                text="label"
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
    </div>
  );
}

export default App;
