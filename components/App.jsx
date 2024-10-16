import { useState } from "react";
import classNames from "classnames";
import { seazonTheme } from "./styles/seazontheme.css";
import * as classes from "./app.css";

import "./index.css";
import Buttons from "./pages/Buttons.jsx";
import Colors from "./pages/Colors.jsx";

const tabs = ["buttons", "colors"];

const App = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabChange = (index) => setSelectedTab(index);

  return (
    <div className={seazonTheme}>
      <div>
        <div className={classes.tabs}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={classNames(
                classes.tab,
                selectedTab === index ? classes.activeTab : null
              )}
              onClick={() => handleTabChange(index)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {selectedTab === 0 && <Buttons />}
      {selectedTab === 1 && <Colors />}
    </div>
  );
};

export default App;
