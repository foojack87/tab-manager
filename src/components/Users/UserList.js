import classes from "./UserList.module.css";
import User from "./User";
import { useSelector, useDispatch } from "react-redux";
import { userDetailsAction } from "../store/userDetails";
import { userDataActions } from "../store/user";

const UsersList = (props) => {
  const tabs = useSelector((state) => state.tabDetails.tab);
  const users = [...new Set(tabs.map((tab) => tab.user))];
  const payers = [...new Set(tabs.map((tab) => tab.payer))];
  const allUsers = [...users, ...payers];
  const uniqueUsers = [...new Set(allUsers)];

  const dispatch = useDispatch();

  return (
    <>
      <section>
        <ul className={classes.userslist}>
          {uniqueUsers.map((users) => (
            <User
              key={users}
              users={{
                name: users,
                id: users.id,
                amount: users.amount,
              }}
              onClick={() =>
                dispatch(userDetailsAction.replaceUserData(users)) &&
                dispatch(userDataActions.showUserData())
              }
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default UsersList;
