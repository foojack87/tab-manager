import classes from "./TabCard.module.css";

const TabCard = (props) => {
  return (
    <section
      className={`${classes.tabcard} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </section>
  );
};

export default TabCard;
