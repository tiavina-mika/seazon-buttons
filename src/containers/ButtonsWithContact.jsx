import ButtonWithContact from "../components/buttons/buttonsWithContact/ButtonWithContact";
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
    </div>
  );
};

export default ButtonsWithContact;
