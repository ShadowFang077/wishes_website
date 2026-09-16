

import React, { useState } from "react";
import { MEMORIES } from "../../data/content";

const butterflies = [
  { emoji: "🦋", className: "butterfly-one" },
  { emoji: "🦋", className: "butterfly-two" },
  { emoji: "🦋", className: "butterfly-three" },
  { emoji: "🦋", className: "butterfly-four" }
];

export default function MemoryGarden({ onNext }) {
  const [index, setIndex] = useState(0);
  const [opened, setOpened] = useState([]);

  const openMemory = (memoryIndex) => {
    setIndex(memoryIndex);
    setOpened((current) => current.includes(memoryIndex) ? current : [...current, memoryIndex]);
  };

  return (
    <div className="glass-card memory-card">
      <div className="butterfly-prompt">Tap each butterfly to unlock a memory</div>
      <div className="fixed-butterflies" aria-label="Four memory butterflies">
        {butterflies.map((butterfly, butterflyIndex) => (
          <button
            key={butterfly.className}
            className={`memory-butterfly ${butterfly.className} ${opened.includes(butterflyIndex) ? "opened" : ""}`}
            onClick={() => openMemory(butterflyIndex)}
            aria-label={`Open memory ${butterflyIndex + 1}`}
          >
            {butterfly.emoji}
          </button>
        ))}
      </div>
      <h2>Memory Garden <span>🦋</span></h2>
      <p className="tiny-label">{index + 1}/{MEMORIES.length} moments unlocked</p>
      <p>{MEMORIES[index]}</p>

      <button
        onClick={() => {
          if (index < MEMORIES.length - 1) {
            setIndex(index + 1);
          } else {
            onNext();
          }
        }}
      >
        {opened.length < butterflies.length ? "Tap the butterflies  ♥" : "Continue  ♥"}
      </button>
    </div>
  );
}