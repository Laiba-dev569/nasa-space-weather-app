// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
  const features = [
    {
      icon: "🌌",
      title: "Multilingual Comic Story",
      desc: "Join Sunny on a graphic novel adventure translated into 11 global languages with audio transmission.",
      link: "/story",
      cta: "Read Story",
      accent: "from-amber-500/20 to-orange-500/20",
      border: "border-amber-500/30",
    },
    {
      icon: "🧑‍🚀",
      title: "Pioneers of Heliophysics",
      desc: "Explore the legacy of Carrington, Birkeland, and Dr. Lulu Zhao shaping modern space weather forecasting.",
      link: "/characters",
      cta: "Meet Pioneers",
      accent: "from-cyan-500/20 to-blue-500/20",
      border: "border-cyan-500/30",
    },
    {
      icon: "🪐",
      title: "Interactive Space Quiz",
      desc: "Test your cosmic mastery across solar flare physics, auroral science, and satellite protection.",
      link: "/quiz",
      cta: "Launch Quiz",
      accent: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/30",
    },
    {
      icon: "📊",
      title: "Space Telemetry & Charts",
      desc: "Visualize space weather occurrence stats, coronal mass ejections, and geomagnetic event distributions.",
      link: "/charts",
      cta: "View Telemetry",
      accent: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col justify-between">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center pt-8 pb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-mono tracking-wider mb-6 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
          <span className="animate-pulse text-amber-400">●</span> NASA SPACE APPS CHALLENGE • HELIOPHYSICS EXPEDITION
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bangers tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-cyan-300 drop-shadow-[0_0_25px_rgba(255,165,0,0.3)] mb-6">
          DISCOVER THE POWER OF SPACE WEATHER
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-comic leading-relaxed mb-8">
          From fiery solar flares to shimmering auroras and invisible geomagnetic storms — explore the Sun-Earth cosmic highway through interactive comics, science pioneers, telemetry charts, and quizzes.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/story"
            className="px-8 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 shadow-[0_0_20px_rgba(255,165,0,0.5)] hover:shadow-[0_0_30px_rgba(255,165,0,0.8)] hover:scale-105 transition-all duration-300 flex items-center gap-2 font-mono tracking-wide"
          >
            <span>🚀 START STORY ADVENTURE</span>
          </Link>
          <Link
            to="/quiz"
            className="px-8 py-3.5 rounded-xl font-bold text-cyan-300 bg-slate-900/80 border border-cyan-500/40 hover:bg-cyan-500/20 hover:border-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:scale-105 transition-all duration-300 flex items-center gap-2 font-mono tracking-wide"
          >
            <span>🪐 TAKE THE QUIZ</span>
          </Link>
        </div>
      </motion.div>

      {/* Quick Metrics Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-slate-800 my-8 bg-slate-950/40 rounded-2xl p-4 backdrop-blur-sm"
      >
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bangers text-amber-400">149.6M km</div>
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Earth-Sun Distance</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bangers text-cyan-400">8.3 Min</div>
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Light Travel Time</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bangers text-emerald-400">11 Languages</div>
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Global Accessibility</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bangers text-purple-400">1859 - Present</div>
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Historical Scientific Arc</div>
        </div>
      </motion.div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {features.map((feat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.5 }}
            className={`p-6 rounded-2xl bg-gradient-to-br ${feat.accent} backdrop-blur-md border ${feat.border} hover:border-slate-300/40 transition-all duration-300 flex flex-col justify-between group`}
          >
            <div>
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform w-fit">
                {feat.icon}
              </div>
              <h3 className="text-2xl font-bangers tracking-wider text-slate-100 mb-2">
                {feat.title}
              </h3>
              <p className="text-slate-300 text-sm font-comic leading-relaxed mb-6">
                {feat.desc}
              </p>
            </div>
            <Link
              to={feat.link}
              className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-100 text-sm font-bold font-mono group-hover:translate-x-1 transition-all"
            >
              <span>{feat.cta}</span>
              <span>→</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
