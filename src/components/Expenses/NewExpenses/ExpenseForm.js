import "./ExpenseForm.css";

const titleChangeHandler = (event) => {
  console.log(event.target.value);
};

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>amount</label>
          <input type="number" min={0.01} step={0.01} />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" min={"2023-01-01"} max={"2024-01-26"} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
