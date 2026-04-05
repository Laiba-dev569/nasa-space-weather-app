import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";
import { chartsData } from "../data/chartsData";

const COLORS = ["#f59e0b", "#3b82f6", "#10b981"];

export default function Charts() {
  const [chartType, setChartType] = useState("bar"); // 'bar' or 'pie'

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Space Weather Stats</h2>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${chartType === "bar" ? "bg-yellow-500 text-white" : "bg-gray-200"}`}
          onClick={() => setChartType("bar")}
        >
          Bar Chart
        </button>
        <button
          className={`px-4 py-2 rounded ${chartType === "pie" ? "bg-yellow-500 text-white" : "bg-gray-200"}`}
          onClick={() => setChartType("pie")}
        >
          Pie Chart
        </button>
      </div>

      {/* Chart Display */}
      <div>
        {chartType === "bar" ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartsData}>
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="value"
                fill="#f59e0b"
                animationDuration={800}
                animationEasing="ease-out"
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartsData}
                dataKey="value"
                nameKey="label"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
                isAnimationActive={true}
                animationDuration={800}
                animationEasing="ease-out"
              >
                {chartsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}



