import ProgressBarButton from "../components/buttons/progressBar/ProgressBarButton2";
import Title from "../components/title/Title";
import * as classes from "./section.css";

const loading = true;
const value = 100;

const ProgressBarButtons = () => {
  return (
    <div className={classes.root}>
      {/* 25% */}
      <div className={classes.section}>
        <Title>In progress (25%):</Title>
        <div className={classes.buttons}>
          <ProgressBarButton
            text="Label"
            value={25}
            onClick={() => console.log("clicked")}
          />
        </div>
      </div>

      {/* 50% */}
      <div className={classes.section}>
        <Title>In progress (50%):</Title>
        <div className={classes.buttons}>
          <ProgressBarButton
            text="Label"
            value={50}
            onClick={() => console.log("clicked")}
          />
        </div>
      </div>

      {/* 75% */}
      <div className={classes.section}>
        <Title>In progress (75%):</Title>
        <div className={classes.buttons}>
          <ProgressBarButton
            text="Label"
            value={70}
            onClick={() => console.log("clicked")}
          />
        </div>
      </div>

      {/* 100% */}
      <div className={classes.section}>
        <Title>Complete (100%):</Title>
        <div className={classes.buttons}>
          <ProgressBarButton
            text="Label"
            value={100}
            onClick={() => console.log("clicked")}
          />
        </div>
      </div>

      {/* loading */}
      <div className={classes.section}>
        <Title>Complete (100%):</Title>
        <div className={classes.buttons}>
          <ProgressBarButton
            text="Label"
            value={100}
            loading
            onClick={() => console.log("clicked")}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBarButtons;
