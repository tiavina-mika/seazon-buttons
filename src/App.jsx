import { useState } from "react";
import classNames from "classnames";
import Buttons from "./containers/buttons/Buttons";
import { seazonTheme } from "./styles/seazontheme.css";
import * as classes from "./app.css";
import './index.css';

const tabs = ['buttons', 'icons'];

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  console.log('selectedTab', selectedTab)

  const handleTabChange = (index) => setSelectedTab(index);

  return (
    <div className={seazonTheme}>
      <div>
        <div className={classes.tabs}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={classNames(classes.tab, selectedTab === index ? classes.activeTab: null)}
              onClick={() => handleTabChange(index)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div>
        <Buttons />
      </div>
    </div>
  );
}

export default App;
