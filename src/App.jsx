import { useState } from "react";
import classNames from "classnames";
import Buttons from "./containers/buttons/Buttons";
import { seazonTheme } from "./styles/seazontheme.css";
import * as classes from "./app.css";
import ShoppingButtons from "./containers/ShoppingButtons";
import ProgressBarButtons from "./containers/ProgressBarButtons";
import "./index.css";

const tabs = ["buttons", "shopping", "progress bar"];

const App = () => {
  const [selectedTab, setSelectedTab] = useState(2);

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
      <div>
        {selectedTab === 0 && <Buttons />}
        {selectedTab === 1 && <ShoppingButtons />}
        {selectedTab === 2 && <ProgressBarButtons />}
      </div>
    </div>
  );
};

export default App;
