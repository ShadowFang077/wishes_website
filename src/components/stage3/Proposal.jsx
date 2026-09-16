import React, { useState } from "react";

export default function Proposal({ onComplete }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div className="glass-card proposal-card">
      <div className="proposal-heart">💖</div>
      <h2>Will you be my panda forever..? <span>🐼</span> <span>♥</span></h2>

      <button onClick={onComplete}>Yes  🥹</button>

      <button
        onMouseEnter={() =>
          setPos({
            x: Math.random() * 200,
            y: Math.random() * 200
          })
        }
        style={{ position: "absolute", left: `calc(50% + ${pos.x}px)`, top: `calc(50% + ${pos.y}px)` }}
      >
        No 😢
      </button>
    </div>
  );
}