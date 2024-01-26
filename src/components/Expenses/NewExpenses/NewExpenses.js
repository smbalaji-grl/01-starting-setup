import React from "react"; // JSX under hood use this library
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const Newexpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};
export default Newexpense;
