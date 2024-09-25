import Button from "./components/buttons/button/Button";
import Title from "./components/title/Title";
import { seazonTheme } from "./styles/seazontheme.css";
import * as classes from "./app.css";

function App() {
  return (
    <div className={seazonTheme}>
      <div className={classes.root}>
        <div>
          <Title>Normal</Title>
          <div className={classes.row}>
            <Button text="label" variant="default" />
            <Button text="label" variant="neutral" />
            <Button text="label" variant="text" />
          </div>
        </div>

        <div>
          <Title>Disabled</Title>
          <div className={classes.row}>
            <Button text="label" variant="default" disabled />
            <Button text="label" variant="neutral" disabled />
            <Button text="label" variant="text" disabled />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
