import classes from "./TabButton.module.css";

const TabButton = (props) => {
  return (
    <button className={classes.button}>
      <span>Create Tab</span>
    </button>
  );
};

export default TabButton;
