import { useState } from "react";
import { storyData } from "../data/storyData";
import ComicPanel from "./ComicPanel";

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
    <div className="p-4 max-w-3xl mx-auto">
      {/* Language Selector */}
      <div className="mb-6 flex gap-2 flex-wrap">
        {languages.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`px-3 py-1 rounded ${
              lang === l.code ? "bg-yellow-500 text-white" : "bg-gray-200"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      {/* Story Scenes as Comic Panels */}
      {storyData.map((scene, index) => (
        <ComicPanel key={index} panel={scene} lang={lang} />
      ))}
    </div>
  );
}

