import React from "react";
import "./LineChart.css";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  registerables,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart({
  xAxisData,
  yAxisData,
  dataLabels,
  chartName,
  colorsList,
  yAxisDisplay = true,
  maintainAspectRatio = false,
}) {
  const dataLength = yAxisData ? yAxisData.length : 0;
  const data = {
    labels: dataLength ? xAxisData : [],
    datasets:
      dataLength && dataLabels.length > 0
        ? dataLabels.map((name, i) => {
            return {
              label: name,
              data: yAxisData[i],
              backgroundColor: "#022005",
              borderColor: colorsList,
            };
          })
        : [],
  };
  return (
    <div className="linechart-container">
      <Line
        data={data}
        options={{
          animation: true,
          maintainAspectRatio: maintainAspectRatio,
          //   aspectRatio: 2,
          responsive: true,
          scales: {
            x: {
              type: "category",
              categorySpacing: 1,
              grid: {
                display: false,
              },
              ticks: {
                color: "white",
              },
            },
            y: {
              categorySpacing: 1,
              ticks: {
                color: "white",
              },
              borderDash: [4, 4],
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
                tickColor: "white",
                tickBorderDash: [2, 3],
                tickLength: 10,
                tickWidth: 2,
                offset: true,
                drawTicks: true,
                drawOnChartArea: true,
                display: yAxisDisplay,
              },
            },
          },
        }}
      />
    </div>
  );
}
export default LineChart;
