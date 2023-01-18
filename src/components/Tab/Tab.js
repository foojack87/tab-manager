import classes from "./Tab.module.css";
import TabCard from "./TabCard";

const Tab = (props) => {
  const { user, payer, amount, description, date, paymethod } = props;

  return (
    <li>
      <TabCard>
        <ul className={classes.tabdetails}>
          <li>
            {user} Owes {payer}
          </li>
          <li>{amount}$</li>
          <li>{description}</li>
          <li>{date}</li>
          <li>{paymethod}</li>
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
