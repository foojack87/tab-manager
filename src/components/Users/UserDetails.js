import Modal from "../UI/Modal";
import classes from "./UserDetails.module.css";

const UserDetails = (props) => {
  return (
    <Modal>
      <header>Net Amount: $2000</header>
      <main>
        <div>
          <h1>Owed</h1>
        </div>
        <div>
          <h1>Owed To You</h1>
        </div>
      </main>
    </Modal>
  );
};

export default UserDetails;
