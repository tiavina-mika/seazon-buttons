import Button from "./components/buttons/button/Button";
import { seazonTheme } from "./styles/seazontheme.css";

function App() {
  return (
    <div className={seazonTheme}>
      {/* <Tag label="label" color="secondary" /> */}
      <Button text="label" variant="default" />
      <Button text="label" variant="neutral" />
      <Button text="label" variant="text" />

      <Button text="label" variant="text" size="sm" />
      <Button text="label" variant="text" size="md" />
      <Button text="label" variant="text" size="lg" />

      <Button text="label" variant="default" disabled />
      <Button text="label" variant="neutral" disabled />
      <Button text="label" variant="text" disabled />
    </div>
  );
}

export default App;
