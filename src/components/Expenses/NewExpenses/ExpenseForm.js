import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //The useState hook should be called at the top level of your functional component and not inside the event handler functions.
  // below are using individal state
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enterAmount, setEnteredAmount] = useState("");
  const [enterDate, setEnteredDate] = useState("");

  // const [userInput_, setUserInput_] = useState({
  //   enteredTitle: "",
  //   enterAmount: "",
  //   enterDate: "",
  // });

  const titleChangeHandler = (event) => {
    //below is updating state but before taking or saving old state screenshot and updating or overide value
    //setUserInput_({ ...userInput_, enteredTitle: event.target.value });

    // this method is alternative. since react update state by scheulding. pass function to state function
    //it will first return previous sate and update new one with instant (reacts gaurted
    // setUserInput_((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });

    setEnteredTitle(event.target.value);
    //console.log(event.target.value);
  };

  const amountChangeHandler = (event) => {
    //setUserInput_({ ...userInput_, enterAmount: event.target.value });
    setEnteredAmount(event.target.value);

    // setUserInput_((prevState) => {
    //   return { ...prevState, enterAmount: event.target.value };
    // });
    // console.log(event.target.value);
  };
  const dateChangeHandler = (event) => {
    // setUserInput_({ ...userInput_, enterDate: event.target.value });
    setEnteredDate(event.target.value);

    // setUserInput_((prevState) => {
    //   return { ...prevState, enterDate: event.target.value };
    // });
    // console.log(event.target.value);
  };

  // const inputChangeHandler = (Identifier, value) => {
  //   if ((Identifier === "title", value)) setEnteredTitle(value);
  //   else if (Identifier === "amount") setEnteredAmount(value);
  //   else setEnteredDate(value);
  // };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    props.onSaveExpenseData(expenseData);
    //console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            //onChange={(event)=>inputChangeHandler("title",event.target.value)} />
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>amount</label>
          <input
            type="number"
            value={enterAmount}
            min={0.01}
            step={0.01}
            // onChange={(event)=> inputChangeHandler("amount",event.target.value)}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            value={enterDate}
            min={"2021-01-01"}
            max={"2024-12-03"}
            // onChange={(event)=> inputChangeHandler("date",event.target.value)}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
