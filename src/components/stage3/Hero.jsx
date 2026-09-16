import React from "react";

export default function Hero({ onNext }) {
  return (
    <div className="glass-card hero-card">
      <p className="eyebrow">A little celebration for you</p>
      <h1>Happy Birthday<br /><em>Pavani</em> <span>♥</span></h1>
      <p>Today is not just another day,<br />It's the day my favorite person was born.<br />Thank you for filling my life with beautiful<br />memories, endless smiles and unforgettable moments.</p>
      <p>Happy birthday, my Pavani <span>♥</span></p>
      <button onClick={onNext}>♡ Memories</button>
    </div>
  );
}