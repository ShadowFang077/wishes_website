import React from "react";
import FloatingElements from "../common/FloatingElements";

export default function Congratulations({ onComplete }) {
  return (
    <div className="main-bg">
      <FloatingElements />
      <div className="glass-card congratulations-card">
        <h2>Congratulations! <span>🎉</span></h2>
        <div className="congratulations-heart" aria-hidden="true">💖</div>
        <img className="panda-couple" src="/gif/download.jpg" alt="A panda couple sharing flowers" />
        <p className="script-label">You are my panda <span>🐼 ♥</span></p>
        <button onClick={onComplete}>Next  ♥</button>
      </div>
    </div>
  );
}
