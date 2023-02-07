import classes from "./MainHeader.module.css";
import TabButton from "../Tab/TabButton";

const MainHeader = (props) => {
  return (
    <section className={classes.nav}>
      <header className={classes.header}>
        <h1>
          TABIFY
          <span className={classes.subtitle}>
            &mdash; Find your tabs here 💲💲💲
          </span>
        </h1>
        <nav>
          <ul>
            <li>
              <TabButton />
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default MainHeader;
