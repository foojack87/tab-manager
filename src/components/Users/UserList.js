import classes from "./UserList.module.css";
import User from "./User";
const UsersList = (props) => {
  const DUMMY_USERS = [
    {
      id: "n1",
      name: "Silvia",
    },
    {
      id: "n2",
      name: "Jackie",
    },
    {
      id: "n3",
      name: "Alex",
    },
    {
      id: "n4",
      name: "Andy",
    },
  ];

  return (
    <section>
      <ul className={classes.userslist}>
        {DUMMY_USERS.map((users) => (
          <User
            key={users.id}
            users={{
              id: users.id,
              name: users.name,
            }}
          />
        ))}
      </ul>
    </section>
  );
};

export default UsersList;
