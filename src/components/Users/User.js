import classes from "./User.module.css";

const User = (props) => {
  const { name } = props.users;

  return (
    <>
      <li className={classes.user}>
        <h1>
          <button onClick={props.onClick}>{name}</button>
        </h1>
      </li>
    </>
  );
};

export default User;
