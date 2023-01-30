import Tab from "./Tab";
import { useSelector } from "react-redux";
import classes from "./TabList.module.css";

const TabList = (props) => {
  const tabItems = useSelector((state) => state.tabDetails.tab);

  return (
    <ul className={classes.tablist}>
      {tabItems.map((tab) => (
        <Tab
          key={tab.id}
          tab={{
            id: tab.id,
            user: tab.user,
            payer: tab.payer,
            amount: tab.amount,
            description: tab.description,
            date: tab.date,
            paymethod: tab.paymethod,
          }}
        />
      ))}
    </ul>
  );
};

export default TabList;
