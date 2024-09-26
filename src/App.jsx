import Buttons from "./containers/buttons/Buttons";
import { seazonTheme } from "./styles/seazontheme.css";
import * as classes from "./app.css";
import './index.css';

const variants = ["default", "neutral", "text"];
const sizes = ["sm", "md", "lg"];

const App = () => {
  return (
    <div className={seazonTheme}>
      <Buttons />
    </div>
  );
}

export default App;
