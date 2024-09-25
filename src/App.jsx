import Tag from "./components/tag/Tag";
import { seazonTheme } from "./styles/seazontheme.css";

function App() {
  return (
    <div className={seazonTheme}>
      <Tag label="label" color="secondary" />
    </div>
  );
}

export default App;
