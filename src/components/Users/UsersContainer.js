import UsersList from "./UserList";
import classes from "./UsersContainer.module.css";

const UsersContainer = (props) => {
  return (
    <div className={classes.usersContainer}>
      <UsersList></UsersList>
    </div>
  );
};

export default UsersContainer;
