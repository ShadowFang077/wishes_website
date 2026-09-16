import React, { useEffect, useRef, useState } from "react";
const musicSource = "/audio/background-music.mp3";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    audio.volume = 0.42;

    const startMusic = (userGesture = false) => {
      if (userGesture) audio.muted = false;
      audio.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    };

    audio.autoplay = true;
    startMusic();
    const handleFirstInteraction = (event) => {
      if (!event.target.closest(".music-toggle")) startMusic(true);
    };
    const handleKeyInteraction = () => startMusic(true);
    document.addEventListener("pointerdown", handleFirstInteraction);
    document.addEventListener("keydown", handleKeyInteraction);
    return () => {
      document.removeEventListener("pointerdown", handleFirstInteraction);
      document.removeEventListener("keydown", handleKeyInteraction);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused || audio.muted) {
      audio.muted = false;
      setMuted(false);
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
      return;
    }

    audio.muted = true;
    setMuted(true);
  };

  return (
    <>
      <audio ref={audioRef} src={musicSource} loop preload="auto" aria-label="Background music" />
      <button className="music-toggle" onClick={toggleMusic} aria-label={muted || !playing ? "Play background music" : "Mute background music"} title={muted || !playing ? "Play background music" : "Mute background music"}>
        {muted ? "🔇" : playing ? "🎵" : "▶️"}
      </button>
    </>
  );
}
