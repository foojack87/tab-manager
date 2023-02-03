import classes from "./TabCard.module.css";

const TabCard = (props) => {
  return (
    <div
      className={`${classes.tabcard} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </div>
  );
};

export default TabCard;
