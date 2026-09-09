import React from "react";
import Charts from "../components/Charts";

export default function ChartsPage() {
  return (
    <div className="min-h-screen bg-slate-900/90 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-400 mb-3 drop-shadow">
            📊 Space Weather Analytics
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Telemetry distribution of major space phenomena, solar flares, geomagnetic auroral storms, and orbital satellite disturbances.
          </p>
        </div>
        <Charts />
      </div>
    </div>
  );
}

