import Card from "../UI/Card";
import classes from "./User.module.css";
const User = (props) => {
  return (
    <li className={classes.user}>
      <Card>
        <p>
          <h1>Jackie</h1>
        </p>
      </Card>
    </li>
  );
};

export default User;
