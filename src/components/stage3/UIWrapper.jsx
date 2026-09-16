import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import MemoryGarden from "./MemoryGarden";
import Proposal from "./Proposal";
import Countdown from "../common/Countdown";
import FloatingElements from "../common/FloatingElements";

export default function UIWrapper({ onComplete }) {
  const [section, setSection] = useState(0);

  useEffect(() => {
    if (section !== 0) return undefined;
    const timeout = setTimeout(() => setSection(1), 5000);
    return () => clearTimeout(timeout);
  }, [section]);

  return (
    <div className="main-bg">
      <FloatingElements />
      {section === 0 && <Countdown />}
      {section === 1 && <Hero onNext={() => setSection(2)} />}
      {section === 2 && <MemoryGarden onNext={() => setSection(3)} />}
      {section === 3 && <Proposal onComplete={onComplete} />}
    </div>
  );
}