import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";
import { chartsData } from "../data/chartsData";

const COLORS = ["#f59e0b", "#00e5ff", "#10b981"];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-cyan-500/40 p-3 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.8)] text-xs font-mono">
        <p className="text-amber-400 font-bold mb-1">{label || payload[0].name}</p>
        <p className="text-slate-200">
          Recorded Events: <span className="text-cyan-300 font-bold">{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function Charts() {
  const [chartType, setChartType] = useState("bar"); // 'bar' or 'pie'

  return (
    <div className="bg-slate-950/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-[0_0_25px_rgba(0,0,0,0.6)]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bangers tracking-wider text-slate-100">
            SOLAR PHENOMENA INCIDENCE
          </h2>
          <p className="text-xs text-slate-400 font-mono">Real-time normalized solar activity index</p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex items-center bg-slate-900 p-1.5 rounded-xl border border-slate-800">
          <button
            className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${
              chartType === "bar"
                ? "bg-amber-500 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.5)]"
                : "text-slate-400 hover:text-slate-200"
            }`}
            onClick={() => setChartType("bar")}
          >
            📊 Bar Chart
          </button>
          <button
            className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${
              chartType === "pie"
                ? "bg-cyan-500 text-slate-950 shadow-[0_0_12px_rgba(0,229,255,0.5)]"
                : "text-slate-400 hover:text-slate-200"
            }`}
            onClick={() => setChartType("pie")}
          >
            🥧 Pie Chart
          </button>
        </div>
      </div>

      {/* Chart Display */}
      <div className="w-full h-80">
        {chartType === "bar" ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartsData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
              <XAxis dataKey="label" stroke="#94a3b8" tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <YAxis stroke="#94a3b8" tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="value"
                fill="#f59e0b"
                radius={[8, 8, 0, 0]}
                animationDuration={800}
                animationEasing="ease-out"
              >
                {chartsData.map((_, index) => (
                  <Cell key={`bar-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartsData}
                dataKey="value"
                nameKey="label"
                cx="50%"
                cy="50%"
                outerRadius={105}
                innerRadius={50}
                paddingAngle={5}
                label={({ label, percent }) => `${label} ${(percent * 100).toFixed(0)}%`}
                isAnimationActive={true}
                animationDuration={800}
                animationEasing="ease-out"
              >
                {chartsData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="#0f172a" strokeWidth={3} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend verticalAlign="bottom" height={36} wrapperStyle={{ color: "#cbd5e1" }} />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Legend / Metrics Details */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-800/80">
        {chartsData.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></span>
              <span className="text-xs font-mono text-slate-300">{item.label}</span>
            </div>
            <span className="text-sm font-bold text-white font-mono">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}



