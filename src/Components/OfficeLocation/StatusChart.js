import React from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
} from "recharts";

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 7}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const StatusChart = () => {
  const data = [
    { name: "Open", value: 14 },
    { name: "Over due", value: 2 },
    { name: "Unassigned", value: 5 },
    { name: "On-hold", value: 0 },
  ];

  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    payload,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
    const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

    // Move the label away from the chart
    const labelOffset = 60;

    // Calculate text length of the label name
    const nameLength = payload.name.length * 7; // Adjust the multiplier based on your font and style

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        style={{ fontSize: "14px", fontWeight: "bold" }}
      >
        {/* Label name */}
        <tspan
          x={x + (x > cx ? labelOffset : -labelOffset)}
        >{`${payload.name} : `}</tspan>

        {/* Label value */}
        <tspan
          dy="1em"
          x={
            x + (x > cx ? labelOffset + nameLength : -labelOffset - nameLength)
          }
          textAnchor="middle"
        >
          {`${payload.value}`}
        </tspan>
      </text>
    );
  };

  const COLORS = ["#00CD66", "#FF8B48", "#385F9C", "#FFC700"];
  const activeIndex = data.findIndex((item) => item.name === "Open");

  return (
    <div style={{ height: "373px", marginBottom: "50px" }}>
      <ResponsiveContainer>
        <PieChart width="100% " height="100%">
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            // cx={400}
            // cy={200}
            innerRadius={70}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            labelLine={null}
            label={renderCustomLabel}
            isAnimationActive={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <text
            x="50%"
            y="50%"
            fill="#000"
            textAnchor="middle"
            dominantBaseline="central"
            style={{ fontSize: "20px" }}
          >
            Status
          </text>
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatusChart;
