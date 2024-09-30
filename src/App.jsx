import { useState } from "react";
import classNames from "classnames";
import Buttons from "./containers/buttons/Buttons";
import { seazonTheme } from "./styles/seazontheme.css";
import * as classes from "./app.css";
import ShoppingButtons from "./containers/ShoppingButtons";
import ProgressBarButtons from "./containers/ProgressBarButtons";
import IconButtons from "./containers/IconButtons";
import Switch from "./components/buttons/switch/Switch";
import ConnectionButton from "./components/buttons/connection/ConnectionButton";
import ApplastoreButton from "./components/buttons/store/ApplastoreButton";
import GoogleplayButton from "./components/buttons/store/GoogleplayButton";
import ButtonGroup from "./components/buttons/buttonGroup/ButtonGroup";
import "./index.css";

const tabs = [
  "buttons",
  "shopping",
  "progress bar",
  "icon button",
  "switch",
  "connexion",
  "store",
  "group",
];

const App = () => {
  const [selectedTab, setSelectedTab] = useState(7);

  const handleTabChange = (index) => setSelectedTab(index);

  return (
    <div className={seazonTheme}>
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
          {selectedTab === 0 && <Buttons />}
          {selectedTab === 1 && <ShoppingButtons />}
          {selectedTab === 2 && <ProgressBarButtons />}
          {selectedTab === 3 && <IconButtons />}
          {selectedTab === 4 && <Switch />}
          {selectedTab === 5 && (
            <div className={classes.connection}>
              <ConnectionButton />
              <ConnectionButton loading />
              <ConnectionButton disabled />
            </div>
          )}
          {selectedTab === 6 && (
            <div className={classes.connection}>
              <ApplastoreButton />
              <GoogleplayButton />
            </div>
          )}
          {selectedTab === 7 && (
            <div className={classes.connection}>
              <ButtonGroup spacing="justify" onSecondaryClick={() => {}} />
              <ButtonGroup spacing="center" onSecondaryClick={() => {}} />
              <ButtonGroup onSecondaryClick={() => {}} />
              <ButtonGroup direction="column" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
