import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  let filterInfoText = "2022,2023 & 2024";
  if (filterYear === "2022") {
    filterInfoText = "2021, 2023 & 2024";
  } else if (filterYear === "2023") {
    filterInfoText = "2021, 2022 & 2024";
  } else {
    filterInfoText = "2021, 2022 & 2023";
  }
  const filterYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterYearHandler}
        />
        <p>data for years {filterInfoText}is hidden.</p>
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={new Date(expense.date)}
          />
          // date: new Date(2023, 5, 12),
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
