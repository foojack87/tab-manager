import classes from "./UserCard.module.css";

const UserCard = (props) => {
  return (
    <div
      className={`${classes.card} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </div>
  );
};

export default UserCard;
