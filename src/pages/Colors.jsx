import { useState } from "react";
import classNames from "classnames";
import * as classes from "../app.css";
import Background from "../components/palette/Background";
import DefaultColors from "../components/palette/Colors";
import Border from "../components/palette/Border";
import Icon from "../components/palette/Icon";
import Text from "../components/palette/Text";

const tabs = ["colors", "background", "border", "icon", "text"];

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
        {selectedTab === 0 && <DefaultColors />}
        {selectedTab === 1 && <Background />}
        {selectedTab === 2 && <Border />}
        {selectedTab === 3 && <Icon />}
        {selectedTab === 4 && <Text />}
      </div>
    </div>
  );
};

export default Colors;
