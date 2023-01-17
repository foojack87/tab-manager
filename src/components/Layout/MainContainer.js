import { Fragment } from "react";
import classes from "./MainContainer.module.css";

const MainContainer = (props) => {
  return (
    <Fragment>
      <div className={classes.mainContainer}>{props.children}</div>
    </Fragment>
  );
};

export default MainContainer;
