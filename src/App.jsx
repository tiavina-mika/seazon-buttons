import Button from "./components/buttons/button/Button";
import { seazonTheme } from "./styles/seazontheme.css";

function App() {
  return (
    <div className={seazonTheme}>
      {/* <Tag label="label" color="secondary" /> */}
      <Button text="label" variant="default" />
      <Button text="label" variant="neutral" />
    </div>
  );
}

export default App;
