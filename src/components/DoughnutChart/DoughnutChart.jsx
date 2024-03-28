import React from "react";
import "./DoughnutChart.css";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

function DoughnutChart({ doughnutData, colors }) {
  return (
    <div>
      <PieChart width={400} height={220}>
        <Pie
          data={doughnutData}
          dataKey="totalAmountSpent"
          nameKey="_id"
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={70}
          fill="#23cebf"
          label
          colors={colors}
        />

        <Tooltip
          cursor={{ fill: "transparent" }}
          formatter={(_id, totalAmountSpent) => [_id, totalAmountSpent]}
        />
      </PieChart>
    </div>
  );
}
export default DoughnutChart;
