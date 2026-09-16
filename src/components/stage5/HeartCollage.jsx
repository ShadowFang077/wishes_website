import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FloatingElements from "../common/FloatingElements";

const photos = [
  "WhatsApp Image 2026-09-06 at 5.35.15 PM.jpeg",
  "WhatsApp Image 2026-09-06 at 5.35.20 PM (2).jpeg",
  "WhatsApp Image 2026-09-13 at 11.17.39 AM (1).jpeg",
  "WhatsApp Image 2026-09-13 at 11.17.39 AM.jpeg",
  "WhatsApp Image 2026-09-13 at 11.19.24 AM.jpeg",
  "WhatsApp Image 2026-09-13 at 11.19.25 AM.jpeg",
  "WhatsApp Image 2026-09-13 at 11.36.12 AM (1).jpeg",
  "WhatsApp Image 2026-09-13 at 11.36.12 AM.jpeg",
  "WhatsApp Image 2026-09-13 at 11.49.30 AM (2).jpeg",
  "WhatsApp Image 2026-09-13 at 11.49.30 AM.jpeg",
  "WhatsApp Image 2026-09-13 at 11.49.52 AM.jpeg",
  "WhatsApp Image 2026-09-15 at 12.22.50 PM (1).jpeg",
  "WhatsApp Image 2026-09-15 at 12.22.50 PM (2).jpeg",
  "WhatsApp Image 2026-09-15 at 12.22.50 PM.jpeg",
  "WhatsApp Image 2026-09-15 at 12.22.51 PM (1).jpeg",
  "WhatsApp Image 2026-09-15 at 12.22.51 PM.jpeg",
  "WhatsApp Image 2026-09-15 at 12.23.21 PM.jpeg",
  "WhatsApp Image 2026-09-15 at 12.37.18 PM.jpeg",
  "WhatsApp Image 2026-09-15 at 12.42.26 PM.jpeg"
].map((file) => `/p_image/${encodeURIComponent(file)}`);

const magazinePhotos = [
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
].map((file) => `/magazine/${encodeURIComponent(file)}`);

const heartSlots = [
  [2, 1], [3, 1], [4, 1], [6, 1], [7, 1], [8, 1],
  [1, 2], [2, 2], [3, 2], [7, 2], [8, 2], [9, 2],
  [1, 3], [2, 3], [8, 3], [9, 3],
  [1, 4], [2, 4], [8, 4], [9, 4],
  [1, 5], [2, 5], [8, 5], [9, 5],
  [2, 6], [3, 6], [7, 6], [8, 6],
  [3, 7], [4, 7], [5, 7], [6, 7], [7, 7],
  [4, 8], [5, 8], [6, 8]
];

const allPhotos = [...photos, ...magazinePhotos];

export default function HeartCollage({ onRestart }) {
  const [formed, setFormed] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showSakhiLetter, setShowSakhiLetter] = useState(false);
  const [showLoopButton, setShowLoopButton] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = window.setTimeout(() => setFormed(true), 3300);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showSakhiLetter) return undefined;
    const timer = window.setTimeout(() => setShowLoopButton(true), 5000);
    return () => window.clearTimeout(timer);
  }, [showSakhiLetter]);

  return (
    <div className="main-bg">
      <FloatingElements />
      <motion.div
        className="photo-heart-scene"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="heart-intro"
          initial={{ opacity: 0, x: "-50%", y: 18 }}
          animate={{ opacity: 1, x: "-50%", y: 0 }}
          transition={{ delay: 2.25, duration: 0.8, ease: "easeOut" }}
        >
          Happy Birthday Pavani <span>♥</span>
        </motion.h2>
        <div className="photo-heart" aria-label="Photos arranged as a heart">
          {allPhotos.map((photo, index) => (
            <motion.img
              key={photo}
              src={photo}
              alt="Favorite memory"
              style={{ "--i": index, gridColumn: heartSlots[index][0], gridRow: heartSlots[index][1] }}
              initial={{ opacity: 0, scale: 0.25, x: (index % 2 ? 1 : -1) * (120 + (index % 5) * 30), y: 160 + (index % 4) * 45, rotate: (index % 2 ? 1 : -1) * (18 + index % 5 * 4) }}
              animate={{ opacity: 1, scale: [0.25, 1.08, 1], x: 0, y: [160 + (index % 4) * 45, -8, 0], rotate: 0 }}
              transition={{ delay: index * 0.055, duration: 1.05, ease: [0.22, 1, 0.36, 1], times: [0, 0.72, 1] }}
              whileHover={{ scale: 1.12, zIndex: 5, transition: { duration: 0.2 } }}
              whileTap={{ scale: 1.06 }}
            />
          ))}
        </div>
        <motion.p
          className="tiny-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.45, duration: 0.8 }}
        >
          All my memories lead back to you.
        </motion.p>
        {formed && !showQuestion && !showSakhiLetter && (
          <motion.button
            className="heart-prompt"
            initial={{ opacity: 0, y: 12, scale: .9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            onClick={() => setShowQuestion(true)}
          >
            Wanna know something? ✨
          </motion.button>
        )}
        {showQuestion && !showSakhiLetter && (
          <motion.div className="sakhi-question" initial={{ opacity: 0, scale: .85 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="sakhi-question-heart">💖</div>
            <h3>Wanna know the meaning of Sakhi..? <span>🐼</span></h3>
            <p>Panda, will you hear it? ♥</p>
            <div className="sakhi-actions">
              <button onClick={() => setShowSakhiLetter(true)}>Yes 🐼</button>
              <button
                type="button"
                className="sakhi-no-button"
                onMouseEnter={() => setNoPosition({ x: Math.random() * 180 - 90, y: Math.random() * 100 - 50 })}
                onFocus={() => setNoPosition({ x: Math.random() * 180 - 90, y: Math.random() * 100 - 50 })}
                style={{ transform: `translate(${noPosition.x}px, ${noPosition.y}px)` }}
              >
                No ♥
              </button>
            </div>
          </motion.div>
        )}
        {showSakhiLetter && (
          <motion.div className="sakhi-letter" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}>
            <h3>For my panda ♥</h3>
            <img className="sakhi-panda-gif" src="/gif/download.jpg" alt="Panda couple sharing flowers" />
            <div className="sakhi-letter-copy">
              <p>Panda…</p>
              <p>Nenu ninnu “sakhi” ani pilusthunnanu kadha…<br />aa word ki chala arthalu untayi ani telusu…<br />lover ani… friend ani… companion ani…</p>
              <p>Kaani…<br />naa drushti lo “sakhi” ante avi kaavu.</p>
              <p>“Sakhi” ante…<br />oka role kaadhu… oka label kaadhu…<br />adi oka sthanam…<br />oka manasu inkoka manasuki daggara ayye aa madhyalo undey sthaanam.</p>
              <p>Sakhi ante…<br />judgement lekunda vinnedi…<br />dooram unna kuda daggara undedi…<br />maatladakunda kuda ardham chesukune bandham.</p>
              <p>Mana madhya undedhi kuda alantidhe panda…</p>
              <p>Rendu manasula madhya…<br />shabdham lekunda peruguthunna oka anubandham…<br />cheppakapoyina ardham ayye oka maunam…<br />choodakapoyina kalisina feeling…</p>
              <p>Indhulo oka spruthi undi…<br />oka teliyani aakarshan undi…<br />oka silent magic undi.</p>
              <p>Anduke…<br />mana madhya unna ee bandhaniki<br />sneham ani… prema ani…<br />ye peru petina… adi saripodhu ani naku anipinchindi.</p>
              <p>Endhukante…<br />ee bandham ni oka peru lo pettina kshanam lo…<br />adi oka limit lo padipothundi…<br />kaani mana madhya undedhi…<br />aa limits anni datina laa anipisthundi.</p>
              <p>Kaani “sakhi” ane padam lo matram…<br />aa freedom undi…<br />aa loatham undi…<br />aa madhuratha undi…</p>
              <p>adi oka definition lo adagadhu…<br />adi unna vidhanam lo ne undedaniki oppukuntundi.</p>
              <p>Anduke…<br />daniki nenu vere peru petaledu…<br />petali ani kuda anipinchaledu…</p>
              <p>Nuvvu naa “sakhi” vi ani pilavadam…<br />oka peru kaadhu panda…<br />adi naa feeling ki dorikina oka roopam.</p>
              <p>Prema kanna konchem ekkuva…<br />sneham kanna konchem loathuga…</p>
              <p>Aa rendu madhya kaakunda…<br />vaatini datina oka sthanam lo…<br />nuvvu naa sakhi vi… Pavani.</p>
            </div>
            {showLoopButton && (
              <motion.button
                className="love-loop-button"
                initial={{ opacity: 0, y: 10, scale: .9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                onClick={onRestart}
              >
                Loop ♥
              </motion.button>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}