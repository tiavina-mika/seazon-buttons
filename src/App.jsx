import Button from "./components/buttons/button/Button";
import { seazonTheme } from "./styles/seazontheme.css";
import * as classes from "./app.css";

function App() {
  return (
    <div className={seazonTheme}>
      <div className={classes.root}>
        <div className={classes.row}>
          <Button text="label" variant="default" />
          <Button text="label" variant="neutral" />
          <Button text="label" variant="text" />
        </div>

        <div className={classes.row}>
          <Button text="label" variant="text" size="sm" />
          <Button text="label" variant="text" size="md" />
          <Button text="label" variant="text" size="lg" />
        </div>

        <div className={classes.row}>
          <Button text="label" variant="default" disabled />
          <Button text="label" variant="neutral" disabled />
          <Button text="label" variant="text" disabled />
        </div>
      </div>
    </div>
  );
}

export default App;
