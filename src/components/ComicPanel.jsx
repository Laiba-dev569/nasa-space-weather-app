import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useTTS } from "../hooks/useTTS";

export default function ComicPanel({ panel, lang, index }) {
  const { speak, stop, isSpeaking } = useTTS();
  const delay = index * 0.2;

  // Cleanup speech if panel unmounts
  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  const handleReadAloud = () => {
    if (isSpeaking) {
      stop();
    } else {
      const textToSpeak = panel.dialogue[lang] || panel.dialogue.en;
      speak(textToSpeak, lang);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: Math.min(delay, 0.4) }}
      className="sci-fi-border animate-pulseGlow mb-12 p-6 md:p-10 relative overflow-hidden"
    >
      {/* Decorative top-left corner */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-solarOrange opacity-50 m-2"></div>

      {/* Title */}
      <motion.h2
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2 }}
        className="text-4xl md:text-5xl font-bangers text-solarOrange mb-8 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(255,87,34,0.8)]"
      >
        {panel.title}
      </motion.h2>

      {/* Images - Holographic feeling */}
      {panel.imgs && panel.imgs.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-10">
          {panel.imgs.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 229, 255, 0.6)" }}
              className="border border-neonBlue rounded overflow-hidden bg-gray-900 transition-all duration-300"
              style={{
                boxShadow: "0 0 10px rgba(0, 229, 255, 0.2)"
              }}
            >
              <img
                src={img}
                alt={`Scene ${panel.id} - ${idx}`}
                className="w-full h-full object-cover min-h-[150px] opacity-90 hover:opacity-100 mix-blend-screen"
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Dialogue as HUD Panel */}
      <div className="relative mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.4 }}
          className="hud-panel p-6 md:p-8 mb-6"
        >
          <div className="mb-2 text-neonBlue text-sm font-bold tracking-widest uppercase opacity-70">
            &gt; DATA_STREAM_INCOMING //
          </div>
          <p className="text-gray-100 text-xl md:text-2xl font-comic leading-relaxed tracking-wide">
            {panel.dialogue[lang] || panel.dialogue.en}
          </p>
        </motion.div>

        {/* TTS Toggle Button - Sci-Fi Style */}
        <div className="flex justify-end relative z-10 -mt-2">
          <button
            onClick={handleReadAloud}
            className={`px-6 py-2 font-bangers tracking-wider text-xl rounded border transition-all duration-300 ${isSpeaking
              ? "bg-red-600/20 text-red-500 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]"
              : "bg-solarOrange/20 text-solarOrange border-solarOrange hover:bg-solarOrange hover:text-white shadow-[0_0_10px_rgba(255,87,34,0.3)] hover:shadow-[0_0_20px_rgba(255,87,34,0.6)]"
              }`}
          >
            {isSpeaking ? "[ ABORT AUDIO ]" : "[ PLAY TRANSMISSION ]"}
          </button>
        </div>
      </div>

    </motion.div>
  );
}
