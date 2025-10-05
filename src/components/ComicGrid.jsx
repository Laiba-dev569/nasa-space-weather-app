import React, { useState } from "react";
import ComicGrid from "../components/ComicGrid";
import { storyData } from "../data/storyData";

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
  { code: "fr", label: "French" }
];

export default function StoryPage() {
  const [lang, setLang] = useState("en");

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Space Weather Story</h1>

      <div className="flex justify-center mb-6">
        <select
          className="p-2 rounded border"
          value={lang}
          onChange={e => setLang(e.target.value)}
        >
          {languages.map(l => (
            <option key={l.code} value={l.code}>{l.label}</option>
          ))}
        </select>
      </div>

      <ComicGrid story={storyData} lang={lang} />
    </div>
  );
}
