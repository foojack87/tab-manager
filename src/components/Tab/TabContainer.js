import classes from "./TabContainer.module.css";
import TabList from "./TabList";

const TabContainer = (props) => {
  return (
    <div className={classes.tabContainer}>
      <TabList />
    </div>
  );
};

export default TabContainer;
