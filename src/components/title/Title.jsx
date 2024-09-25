import * as classes from "./title.css";

const Title = ({ children }) => {
  return <h2 className={classes.root}>{children}</h2>;
};

export default Title;
