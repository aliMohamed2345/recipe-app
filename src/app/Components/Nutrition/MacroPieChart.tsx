// components/MacroPieChart.tsx
"use client";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

//the colors of the pie chart based on the tailwind color
const COLORS = ["#10B981", "#3B82F6", "#F59E0B"];

const MacroPieChart = () => {
  const { carbs, protein, fat } = useSelector(
    (state: RootState) => state.macro
  );

  const data = [
    {
      name: "Protein",
      value: protein, // 4 cal/g
    },
    {
      name: "Carbs",
      value: carbs, // 4 cal/g
    },
    {
      name: "Fats",
      value: fat, // 9 cal/g
    },
  ];

  return (
    <div className="w-full p-5 border-border rounded-xl border mb-5">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `${value}g`} />
          <Legend verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MacroPieChart;
