import Modal from "../UI/Modal";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { myTabFormActions } from "../store/tab";
import { tabActions } from "../store/tabDetails";
import classes from "./TabForm.module.css";

const isEmpty = (value) => value.trim() === "";

const TabForm = (props) => {
  const dispatch = useDispatch();
  const usernameInputRef = useRef();
  const payerInputRef = useRef();
  const amountInputRef = useRef();
  const descriptionInputRef = useRef();
  const paymethodInputRef = useRef();

  const closeFormHandler = (props) => {
    dispatch(myTabFormActions.hideTabForm());
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPayer = payerInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredPaymethod = paymethodInputRef.current.value;

    const validUsername = !isEmpty(enteredUsername);
    const validPayer = !isEmpty(enteredPayer);
    const validAmount = !isEmpty(enteredAmount);
    const validDescription = !isEmpty(enteredDescription);
    const validPaymethod = !isEmpty(enteredPaymethod);

    const formIsValid =
      validUsername &&
      validPayer &&
      validAmount &&
      validDescription &&
      validPaymethod;

    if (!formIsValid) {
      return;
    }

    // submit form data to firebase
    dispatch(
      tabActions.createNewTab({
        id: Math.random(),
        user: enteredUsername,
        payer: enteredPayer,
        amount: enteredAmount,
        description: enteredDescription,
        paymethod: enteredPaymethod,
      })
    );

    dispatch(myTabFormActions.hideTabForm());
  };

  return (
    <section>
      <Modal onHideTabForm={props.onHideTabForm}>
        <h2>Create Your Tab</h2>
        <form onSubmit={submitHandler} className={classes.input}>
          <div className={classes.formInput}>
            <div className={classes.basics}>
              <label htmlFor="your-name">Your Name</label>
              <input type="text" id="your-name" ref={usernameInputRef} />
              <label htmlFor="their-name">Their Name</label>
              <input type="text" id="their-name" ref={payerInputRef} />
              <label htmlFor="amount">Amount Owed</label>
              <input type="number" id="amount" ref={amountInputRef} />
            </div>
            <div className={classes.details}>
              <label htmlFor="description">What's the payment for</label>
              <input type="text" id="description" ref={descriptionInputRef} />
              <label htmlFor="how-to-pay">Payment Method</label>
              <input
                type="text"
                id="how-to-pay"
                ref={paymethodInputRef}
                placeholder="Cash or wire transfer? Please leave your bank information if you prefer wire transfer"
              />
            </div>
          </div>
          <div className={classes.actions}>
            <button onClick={closeFormHandler}>Close</button>
            <button>Submit</button>
          </div>
        </form>
      </Modal>
    </section>
  );
};

export default TabForm;
