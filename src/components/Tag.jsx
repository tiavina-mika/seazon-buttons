// import * as classes from "tag.css";

import * as classes from "./tag.css";

const Tag = ({ label }) => {
  return <div className={classes.root}>{label}</div>;
};

export default Tag;
