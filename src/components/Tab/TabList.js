import Tab from "./Tab";
import classes from "./TabList.module.css";
const TabList = (props) => {
  return (
    <ul className={classes.tablist}>
      <Tab />
    </ul>
  );
};

export default TabList;
