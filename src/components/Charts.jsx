import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";
import { chartsData } from "../data/chartsData";

const COLORS = ["#f59e0b", "#3b82f6", "#10b981"];

export default function Charts() {
  return (
    <div className="bg-white p-6 rounded shadow-md space-y-8">
      <h2 className="text-xl font-bold mb-4 text-center">Space Weather Stats</h2>

      {/* Bar Chart */}
      <div>
        <h3 className="text-lg font-semibold mb-2 text-center">Bar Chart</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartsData}>
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div>
        <h3 className="text-lg font-semibold mb-2 text-center">Pie Chart</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={chartsData}
              dataKey="value"
              nameKey="label"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {chartsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}


