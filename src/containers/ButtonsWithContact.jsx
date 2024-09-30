import ButtonWithContact from "../components/buttons/buttonsWithContact/ButtonWithContact";
import Title from "../components/title/Title";
import * as classes from "./section.css";

const ButtonsWithContact = () => {
  return (
    <div className={classes.root}>
      {/* 25% */}
      <div className={classes.section}>
        <div className={classes.buttons}>
          <ButtonWithContact
            text="Button"
            onClick={() => console.log("clicked")}
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonsWithContact;
