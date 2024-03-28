import { Bar } from "react-chartjs-2";
import {
  Chart,
  LinearScale,
  BarElement,
  Title,
  Legend,
  CategoryScale,
  registerables,
  Tooltip as ChartTooltip,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartTooltip,
  Legend
);

const BarChart = ({ yAxisData, xAxisData, dataLabels, colorsList }) => {
  const dataLength = yAxisData ? yAxisData.length : 0;
  const data = {
    labels: dataLength ? xAxisData : [],
    datasets:
      dataLabels.length > 0
        ? dataLabels.map((name, i) => {
            return {
              label: name,
              data: yAxisData[i],
              backgroundColor: colorsList,
              categoryPercentage: 0.5,
              borderWidth: 1,
              borderRadius: 4,
            };
          })
        : [],
  };
  return (
    <div style={{ height: "13rem" }}>
      <Bar
        data={data}
        options={{
          scales: {
            x: {
              categorySpacing: 1,
              grid: {
                display: false,
                color: "white",
              },
              ticks: {
                color: "white",
              },
            },
            y: {
              ticks: {
                color: "white",
              },
              categorySpacing: 1,
              grid: {
                display: false,
              },
            },
          },
          maintainAspectRatio: false,
          // aspectRatio: 2,
          animation: true,
          responsive: true,
        }}
      />
    </div>
  );
};
export default BarChart;
