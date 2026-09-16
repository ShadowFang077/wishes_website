import React, { useEffect, useRef, useState } from "react";
import { WORDS } from "../../data/content";

export default function MatrixRain({ onComplete }) {
  const canvasRef = useRef();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const startedAt = performance.now();

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 13;
    const columns = canvas.width / 88;

    const drops = Array.from({ length: Math.floor(columns) }, (_, index) => ({
      y: Math.random() * -40,
      word: WORDS[index % WORDS.length]
    }));

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#ff2d78";
      ctx.font = `600 ${fontSize}px monospace`;

      drops.forEach((drop, i) => {
        ctx.fillText(drop.word, i * 88, drop.y * fontSize);

        if (drop.y * fontSize > canvas.height) {
          drop.y = Math.random() * -30;
          drop.word = WORDS[Math.floor(Math.random() * WORDS.length)];
        }

        drop.y++;
      });

      const heartProgress = Math.min(1, Math.max(0, (performance.now() - startedAt - 4300) / 1500));
      if (heartProgress > 0) {
        ctx.save();
        ctx.globalAlpha = heartProgress;
        ctx.fillStyle = "#ff78bd";
        ctx.font = "bold 10px monospace";
        for (let y = -1.1; y <= 1.1; y += 0.07) {
          for (let x = -1.25; x <= 1.25; x += 0.065) {
            const heart = Math.pow(x * x + y * y - 1, 3) - x * x * y * y * y;
            if (heart <= 0) {
              const px = canvas.width / 2 + x * Math.min(canvas.width, canvas.height) * 0.25;
              const py = canvas.height / 2 - y * Math.min(canvas.width, canvas.height) * 0.25;
              const word = WORDS[Math.abs(Math.floor((x * 100 + y * 1000) / 7)) % WORDS.length];
              ctx.fillText(word, px, py);
            }
          }
        }
        ctx.restore();
      }
    };

    const interval = setInterval(draw, 50);

    const countdownTimer = window.setInterval(() => {
      setCountdown((value) => value > 0 ? value - 1 : 0);
    }, 1000);

    const completionTimer = setTimeout(() => {
      clearInterval(interval);
      clearInterval(countdownTimer);
      onComplete();
    }, 6500);

    return () => {
      clearInterval(interval);
      clearInterval(countdownTimer);
      clearTimeout(completionTimer);
    };
  }, []);

  return (
    <div className="matrix-stage">
      <canvas ref={canvasRef} />
      {countdown > 0 && countdown <= 3 && (
        <div className="matrix-countdown" aria-live="polite">{countdown}</div>
      )}
    </div>
  );
}