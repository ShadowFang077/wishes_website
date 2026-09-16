import React, { useEffect, useRef, useState } from "react";
import FloatingElements from "../common/FloatingElements";

const magazineImages = [
  "WhatsApp Image 2026-09-15 at 12.22.48 PM.jpeg",
  "WhatsApp Image 2026-09-15 at 12.22.49 PM.jpeg",
  "WhatsApp Image 2026-09-15 at 12.26.54 PM.jpeg",
  "WhatsApp Image 2026-09-15 at 12.26.55 PM (1).jpeg",
  "WhatsApp Image 2026-09-15 at 12.26.55 PM.jpeg",
  "WhatsApp Image 2026-09-15 at 12.28.44 PM.jpeg",
  "WhatsApp Image 2026-09-15 at 12.37.12 PM (1).jpeg",
  "WhatsApp Image 2026-09-15 at 12.37.12 PM.jpeg",
  "WhatsApp Image 2026-09-15 at 12.37.13 PM.jpeg",
  "WhatsApp Image 2026-09-15 at 12.37.14 PM (1).jpeg",
  "WhatsApp Image 2026-09-15 at 12.37.14 PM.jpeg",
  "WhatsApp Image 2026-09-15 at 12.37.15 PM.jpeg",
  "WhatsApp Image 2026-09-15 at 12.37.16 PM.jpeg",
  "WhatsApp Image 2026-09-15 at 12.37.17 PM.jpeg",
  "WhatsApp Image 2026-09-15 at 12.37.18 PM (1).jpeg",
  "WhatsApp Image 2026-09-15 at 12.37.19 PM.jpeg"
];

const flipbookPages = magazineImages.map((stamp, index) => ({
  image: `/magazine/${encodeURIComponent(stamp)}`,
}));

const spreadMessages = [
  "Happy birthday, my favorite person ♥",
  "Every memory with you feels like a little gift.",
  "As long as you smile, I am happy.",
  "You will always be my panda. ♥",
  "My favorite place is beside you.",
  "Thank you for every beautiful memory.",
  "You make ordinary days magical.",
  "I choose you, today and always."
];

export default function Slideshow({ onComplete }) {
  const [index, setIndex] = useState(0);
  const [isTurning, setIsTurning] = useState(false);
  const [direction, setDirection] = useState("next");
  const touchStart = useRef(null);
  const page = flipbookPages[index];
  const isFinal = index >= flipbookPages.length;
  const zoomOutSpread = index === 2 || index === 4 || index === flipbookPages.length - 2;

  const turnPage = (nextIndex, turnDirection = "next") => {
    if (isTurning) return;
    setDirection(turnDirection);
    setIsTurning(true);
    window.setTimeout(() => {
      setIndex(nextIndex);
      window.setTimeout(() => setIsTurning(false), 650);
    }, 260);
  };

  const nextPage = () => {
    if (isFinal) return;
    const nextIndex = index + 2;
    turnPage(nextIndex >= flipbookPages.length ? flipbookPages.length : nextIndex);
  };

  const previousPage = () => {
    if (isFinal || index === 0) return;
    turnPage(Math.max(0, index - 2), "previous");
  };

  useEffect(() => {
    if (isFinal) return undefined;
    const timer = window.setInterval(nextPage, 4500);
    return () => window.clearInterval(timer);
  }, [index, isFinal, isTurning]);

  const handleTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(distance) < 45) return;
    if (distance < 0) nextPage();
    else previousPage();
  };

  return (
  <div className="main-bg letter-scene">
      <FloatingElements />
      <div
        className={`flipbook-card ${isFinal ? "flipbook-final" : ""}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="book-title">Pavani's memory album <span>♥</span></div>
        {isFinal ? (
          <div className="final-page">
            <div className="final-sparkles">✦　♥　✦</div>
            <h2>Happy Birthday<br /><em>Pavani</em> <span>♥</span></h2>
            <p>Thank you for making every day brighter and every memory sweeter.</p>
            <div className="final-heart">💖</div>
            <button onClick={onComplete}>See our photo heart  ♥</button>
          </div>
        ) : (
          <>
            <div className="flipbook-message">{spreadMessages[index / 2]}</div>
            <div className={`book-spread ${zoomOutSpread ? "zoom-out-spread" : ""} ${isTurning ? `turning-${direction}` : ""}`}>
              <div className="book-page book-page-left">
                <img key={page.image} className="flipbook-photo" src={page.image} alt="A favorite memory" />
              </div>
              <div className="book-page book-page-right">
                <img key={`${page.image}-next`} className="flipbook-photo" src={flipbookPages[index + 1].image} alt="Another favorite memory" />
              </div>
              {isTurning && <div className="heart-reveal" aria-hidden="true">♥</div>}
            </div>
            <div className="book-controls">
              <button onClick={previousPage} disabled={index === 0}>‹</button>
              <p className="tiny-label">Pages {index + 1}-{index + 2} of {flipbookPages.length} · swipe or tap</p>
              <button onClick={nextPage}>›</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}