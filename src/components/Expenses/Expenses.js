import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  // let filterInfoText = "2022,2023 & 2024";
  // if (filterYear === "2022") {
  //   filterInfoText = "2021, 2023 & 2024";
  // } else if (filterYear === "2023") {
  //   filterInfoText = "2021, 2022 & 2024";
  // } else {
  //   filterInfoText = "2021, 2022 & 2023";
  // }
  const filterYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    // console.log("exppp", expense);
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterYearHandler}
        />
        <ExpenseChart expense={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
