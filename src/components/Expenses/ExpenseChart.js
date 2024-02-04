import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const ChartDataPoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "march", value: 0 },
    { label: "april", value: 0 },
    { label: "may", value: 0 },
    { label: "june", value: 0 },
    { label: "july", value: 0 },
    { label: "aug", value: 0 },
    { label: "sept", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];
  for (const expense of props.expense) {
    const month = expense.date.getMonth(); // return 0 for jan
    ChartDataPoints[month].value += expense.amount;
  }
  return <Chart dataPoints={ChartDataPoints} />;
};
export default ExpenseChart;
