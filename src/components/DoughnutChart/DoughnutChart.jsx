import React from 'react';
import './DoughnutChart.css';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

function DoughnutChart({ doughnutData, colors }) {
  return (
    <div>
      <PieChart width={400} height={220}>
        <Pie
          data={doughnutData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={70}
          fill="#23cebf"
          label
          colors={colors}
        />
        {/* <Legend
          height={70}
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          iconSize={10}
          padding={5}
          formatter={renderColorfulLegendText}
          payload={truncatedDoughnutData.map((entry) => ({
            value: entry.name,
            type: 'circle',
            color: '#8884d8',
          }))}
        /> */}
        <Tooltip
          cursor={{ fill: 'transparent' }}
          formatter={(value, name) => [value, name]}
        />
      </PieChart>
    </div>
  );
}
export default DoughnutChart;
