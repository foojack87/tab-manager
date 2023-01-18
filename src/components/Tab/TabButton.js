import classes from "./TabButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { myTabFormActions } from "../store/tab";

const TabButton = (props) => {
  const dispatch = useDispatch();
  const tabState = useSelector((state) => state.tabDetails.tab);

  const showTabFormHandler = (props) => {
    dispatch(myTabFormActions.showTabForm());
    console.log(tabState);
  };

  return (
    <button className={classes.button} onClick={showTabFormHandler}>
      <span>Create Tab</span>
    </button>
  );
};

export default TabButton;
