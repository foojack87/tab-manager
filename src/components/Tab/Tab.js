import classes from "./Tab.module.css";
import TabCard from "./TabCard";

const Tab = (props) => {
  return (
    <li>
      <TabCard>
        <ul className={classes.tabdetails}>
          <li>Jackie Owes Silvia</li>
          <li>300$</li>
          <li>Prize money owed from fantasy f1.</li>
          <li>12/12/2022</li>
          <li>Pay by Cash</li>
        </ul>
        <div className={classes.tabactions}>
          <button>Paid</button>
          <button>Remind</button>
        </div>
      </TabCard>
    </li>
  );
};

export default Tab;
