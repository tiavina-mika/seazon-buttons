import { useState } from "react";
import classNames from "classnames";
import BackgroundColors from "../components/colors/background/BackgroundColors";
// import BackgroundColors from "../components/colors/background/BackgroundColors";
import * as classes from "../app.css";

const tabs = ["buttons"];

const Colors = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => setSelectedTab(index);

  return (
    <div className={classes.container}>
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
      <div className={classes.panel}>
        {selectedTab === 0 && <BackgroundColors />}
      </div>
    </div>
  );
};

export default Colors;
