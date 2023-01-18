import Tab from "./Tab";
import classes from "./TabList.module.css";

const DUMMY_TABS = [
  {
    id: "p1",
    user: "Jackie",
    payer: "Silvia",
    amount: "300",
    description: "Prize money owed from fantasy f1.",
    date: "12/12/2022",
    paymethod: "Pay By Cash",
  },
  {
    id: "p2",
    user: "Jackie",
    payer: "Alex",
    amount: "1200",
    description: "stabs and switches",
    date: "12/24/2022",
    paymethod: "Pay By Cash",
  },
  {
    id: "p3",
    user: "Andy",
    payer: "Jackie",
    amount: "780",
    description: "antipodean",
    date: "03/21/2022",
    paymethod: "Pay By Wire Transfer, 玉山銀行（808）0510979180307 戶名 邱意捷",
  },
  {
    id: "p4",
    user: "Mike",
    payer: "Jackie",
    amount: "360",
    description: "food and drinks",
    date: "07/03/2022",
    paymethod: "Pay By Cash",
  },
];

const TabList = (props) => {
  return (
    <ul className={classes.tablist}>
      {DUMMY_TABS.map((tab) => (
        <Tab
          key={tab.id}
          id={tab.id}
          user={tab.user}
          payer={tab.payer}
          amount={tab.amount}
          description={tab.description}
          date={tab.date}
          paymethod={tab.paymethod}
        />
      ))}
    </ul>
  );
};

export default TabList;
