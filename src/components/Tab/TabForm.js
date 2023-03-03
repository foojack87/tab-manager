import Modal from '../UI/Modal';
import { useDispatch } from 'react-redux';
import { useRef, useEffect } from 'react';
import { myTabFormActions } from '../store/tab';
import { tabActions } from '../store/tabDetails';
import classes from './TabForm.module.css';

const isEmpty = (value) => value.trim() === '';

const TabForm = (props) => {
  const dispatch = useDispatch();
  const usernameInputRef = useRef();
  const payerInputRef = useRef();
  const amountInputRef = useRef();
  const descriptionInputRef = useRef();
  const paymethodInputRef = useRef();
  const dateInputRef = useRef();

  const closeFormHandler = (props) => {
    dispatch(myTabFormActions.hideTabForm());
  };

  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        dispatch(myTabFormActions.hideTabForm());
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPayer = payerInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredPaymethod = paymethodInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    const validUsername = !isEmpty(enteredUsername);
    const validPayer = !isEmpty(enteredPayer);
    const validAmount = !isEmpty(enteredAmount);
    const validDescription = !isEmpty(enteredDescription);
    const validPaymethod = !isEmpty(enteredPaymethod);
    const validDate = !isEmpty(enteredDate);

    const formIsValid =
      validUsername &&
      validPayer &&
      validAmount &&
      validDescription &&
      validDate &&
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
        date: enteredDate,
      })
    );

    dispatch(myTabFormActions.hideTabForm());
  };

  return (
    <section>
      <Modal onHideTabForm={props.onHideTabForm}>
        <div className={classes.header}>
          <h2>Create Your Tab</h2>
        </div>
        <form
          onSubmit={submitHandler}
          className={classes.input}
          autoComplete="off"
        >
          <div className={classes.formInput}>
            <div className={classes.basics}>
              <label htmlFor="your-name">Debtor</label>
              <input type="text" id="your-name" ref={usernameInputRef} />
              <label htmlFor="their-name">Creditor</label>
              <input type="text" id="their-name" ref={payerInputRef} />
              <label htmlFor="amount">Amount Owed</label>
              <input type="number" id="amount" ref={amountInputRef} />
              <label htmlFor="date">Date</label>
              <input type="date" id="date" ref={dateInputRef} />
            </div>
            <div className={classes.details}>
              <label htmlFor="description">What's the payment for</label>
              <textarea id="description" ref={descriptionInputRef} rows="5" />
              {/* <input type="text" id="description" ref={descriptionInputRef} /> */}
              <label htmlFor="how-to-pay">Payment Method</label>
              <textarea
                id="how-to-pay"
                ref={paymethodInputRef}
                placeholder="Cash or wire transfer? Please leave your bank information if you prefer wire transfer"
                rows="5"
              />
            </div>
          </div>
          <div className={classes.actions}>
            <button>Submit</button>
            <button onClick={closeFormHandler}>Close</button>
          </div>
        </form>
      </Modal>
    </section>
  );
};

export default TabForm;
