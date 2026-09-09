// src/components/Navbar.jsx
import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { to: "/", label: "Home", icon: "🚀" },
    { to: "/story", label: "Story", icon: "🌌" },
    { to: "/characters", label: "Pioneers", icon: "🧑‍🚀" },
    { to: "/quiz", label: "Quiz", icon: "🪐" },
    { to: "/charts", label: "Charts", icon: "📊" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-cyan-400 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(255,165,0,0.5)] group-hover:scale-105 transition-transform">
            ☀️
          </div>
          <div>
            <span className="font-bangers text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-cyan-400 drop-shadow">
              NASA SPACE WEATHER
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-widest text-cyan-400 font-mono -mt-1">
              Cosmic Exploration Hub
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(0,229,255,0.3)]"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"
                }`
              }
            >
              <span className="text-xs sm:text-sm">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

