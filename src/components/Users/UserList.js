import classes from "./UserList.module.css";
import User from "./User";
const UsersList = (props) => {
  return (
    <section>
      <ul className={classes.userslist}>
        <User />
        <User />
        <User />
        <User />
        <User />
      </ul>
    </section>
  );
};

export default UsersList;
