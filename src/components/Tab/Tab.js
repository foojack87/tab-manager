import classes from './Tab.module.css';
import TabCard from './TabCard';
import { useDispatch } from 'react-redux';
import { tabActions } from '../store/tabDetails';

const Tab = (props) => {
  const { id, user, payer, amount, description, date, paymethod } = props.tab;
  const dispatch = useDispatch();

  const removeTabHandler = () => {
    const proceed = window.confirm('Are you sure? This will delete the tab.');

    if (proceed) {
      dispatch(tabActions.deleteTab(id));
    }
  };

  return (
    <li>
      <TabCard>
        <ul className={classes.tabdetails}>
          <li>
            {user} Owes {payer}
          </li>
          <li>NTD${amount}</li>
          <li>{description}</li>
          <li>{date}</li>
          <li>{paymethod}</li>
        </ul>
        <div className={classes.tabactions}>
          <button onClick={removeTabHandler}>Paid</button>
          <button>Remind</button>
        </div>
      </TabCard>
    </li>
  );
};

export default Tab;
