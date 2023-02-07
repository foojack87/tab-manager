import Modal from "../UI/Modal";
import classes from "./UserDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userDataActions } from "../store/user";
import { useEffect } from "react";

const UserDetails = (props) => {
  const tabs = useSelector((state) => state.tabDetails.tab);
  const users = useSelector((state) => state.userDetails.userData);
  const dispatch = useDispatch();

  const usersOwedTabs = tabs.filter((tabs) => tabs.user === users);
  const usersPaidTabs = tabs.filter((tabs) => tabs.payer === users);

  const getLoanAmount = (user) => {
    return user.map((amount) => +amount.amount);
  };

  const getBorrowedAmount = (user) => {
    return user.map((amount) => +amount.amount);
  };

  const loanedArray = getLoanAmount(usersOwedTabs);
  const borrowedArray = getBorrowedAmount(usersPaidTabs);
  const totalLoaned = loanedArray.reduce((acc, curr) => acc + curr, 0);
  const totalBorrowed = borrowedArray.reduce((acc, curr) => acc + curr, 0);
  const netAmount = totalBorrowed - totalLoaned;
  const toCurrency = (value) =>
    value.toLocaleString("en-US", {
      style: "currency",
      currency: "TWD",
      maximumFractionDigits: 0,
    });

  const closeUserDataHandler = () => {
    dispatch(userDataActions.hideUserData());
  };

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        dispatch(userDataActions.hideUserData());
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [dispatch]);

  return (
    <Modal>
      <header className={classes.username}>{users}'s Profile</header>
      <h1 className={classes.totals}>
        Net Amount:
        <span
          className={`${netAmount >= 0 ? classes.positive : classes.negative}`}
        >
          {toCurrency(netAmount).replace("-", "")}
        </span>
      </h1>
      <main className={classes.usercontainer}>
        <div className={classes.amounts}>
          <h1>
            Loaned:
            <span className={classes.positive}>
              {toCurrency(totalBorrowed)}
            </span>
          </h1>
          <h1>
            Borrowed:
            <span className={classes.negative}>{toCurrency(totalLoaned)}</span>
          </h1>
        </div>
        <button className={classes.action} onClick={closeUserDataHandler}>
          Close
        </button>
      </main>
    </Modal>
  );
};

export default UserDetails;
