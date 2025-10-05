import React from "react";

export default function ComicPanel({ panel, lang }) {
  return (
    <div className="mb-10 bg-white shadow-md rounded-2xl p-4">
      {/* Title */}
      <h2 className="text-2xl font-bold text-yellow-700 mb-3">
        {panel.title}
      </h2>

      {/* Images */}
      {panel.imgs && panel.imgs.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
          {panel.imgs.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Scene ${panel.id} - ${idx}`}
              className="rounded-xl shadow-sm object-cover"
            />
          ))}
        </div>
      )}

      {/* Dialogue */}
      <p className="text-gray-700 text-lg leading-relaxed mb-3">
        {panel.dialogue[lang] || panel.dialogue.en}
      </p>

      {/* Audio */}
      {panel.audio && panel.audio[lang] && (
        <audio
          controls
          src={panel.audio[lang]}
          className="w-full mt-2"
        ></audio>
      )}
    </div>
  );
}

