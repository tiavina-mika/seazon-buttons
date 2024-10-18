import ButtonWithContact from "../components/buttons/buttonsWithContact/ButtonWithContact";
import ProgressBarButtonWithContact from "../components/buttons/buttonsWithContact/ProgressBarButtonWithContact";
import ShoppingButtonWithContact from "../components/buttons/buttonsWithContact/ShoppingButtonWithContact";
import * as classes from "./section.css";

const ButtonsWithContact = () => {
  return (
    <div className={classes.root}>
      <ButtonWithContact text="Button" onClick={() => console.log("clicked")} />
      <ShoppingButtonWithContact
        text="Button"
        onClick={() => console.log("clicked")}
      />
      <ProgressBarButtonWithContact text="Button" />
    </div>
  );
};

export default ButtonsWithContact;
