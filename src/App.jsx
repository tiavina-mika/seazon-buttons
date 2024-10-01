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
import ButtonsWithContact from "./containers/ButtonsWithContact";
import DotsButton from "./components/buttons/dots/DotsButton";
import SliderButton from "./components/buttons/sliderButton/SliderButton";

const tabs = [
  "buttons",
  "shopping",
  "progress bar",
  "icon button",
  "switch",
  "connexion",
  "store",
  "group",
  "line",
  "dots",
  "slider",
];

const App = () => {
  const [selectedTab, setSelectedTab] = useState(10);

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
              <ButtonGroup
                spacing="justify"
                text="Button"
                secondaryText="Button"
                onSecondaryClick={() => {}}
              />
              <ButtonGroup
                spacing="center"
                text="Button"
                secondaryText="Button"
                onSecondaryClick={() => {}}
              />
              <ButtonGroup
                text="Button"
                secondaryText="Button"
                onSecondaryClick={() => {}}
              />
              <ButtonGroup
                text="Button"
                secondaryText="Button"
                direction="column"
              />
            </div>
          )}

          {selectedTab === 8 && <ButtonsWithContact />}
          {selectedTab === 9 && <DotsButton />}
          {selectedTab === 10 && <SliderButton />}
        </div>
      </div>
    </div>
  );
};

export default App;
