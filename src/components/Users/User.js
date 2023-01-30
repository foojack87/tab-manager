import Card from "../UI/Card";
import classes from "./User.module.css";
const User = (props) => {
  return (
    <li className={classes.user}>
      <Card>
        <h1>Jackie</h1>
      </Card>
      <Card>
        <h1>Silvia</h1>
      </Card>
      <Card>
        <h1>Alex</h1>
      </Card>
    </li>
  );
};

export default User;
