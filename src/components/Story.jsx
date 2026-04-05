import React, { useState } from "react";
import { storyData } from "../data/storyData";
import ComicPanel from "./ComicPanel";
import { motion } from "framer-motion";

const languages = [
  { code: "en", label: "English" },
  { code: "ur", label: "Urdu" },
  { code: "tr", label: "Turkish" },
  { code: "es", label: "Spanish" },
  { code: "it", label: "Italian" },
  { code: "hi", label: "Hindi" },
  { code: "ja", label: "Japanese" },
  { code: "pt", label: "Portuguese" },
  { code: "af", label: "Afrikaans" },
  { code: "ar", label: "Arabic" },
  { code: "fr", label: "French" },
];

export default function Story() {
  const [lang, setLang] = useState("en");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-4 max-w-4xl mx-auto"
    >
      {/* Language Selector - Astronaut Comm Panel */}
      <div className="mb-8 flex gap-3 flex-wrap justify-center sci-fi-border p-6 shadow-lg">
        <h3 className="w-full text-center text-2xl font-bangers text-neonBlue mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
          COMMS CHANNEL
        </h3>
        {languages.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`px-4 py-2 font-bold rounded-md transition-all duration-300 border-2 ${lang === l.code
                ? "bg-neonBlue text-gray-900 border-neonBlue shadow-[0_0_10px_#00E5FF]"
                : "bg-gray-800 text-gray-300 border-gray-600 hover:border-neonBlue hover:text-neonBlue"
              }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      {/* Story Scenes as Sci-Fi Panels */}
      <div className="space-y-16">
        {storyData.map((scene, index) => (
          <ComicPanel key={index} panel={scene} lang={lang} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

