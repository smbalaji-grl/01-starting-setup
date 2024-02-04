import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const chartDataPointsValue = props.dataPoints.map((x) => x.value);
  const chartDataPointsMaxValue = Math.max(...chartDataPointsValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={chartDataPointsMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
