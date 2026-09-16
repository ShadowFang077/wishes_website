import React, { useState } from "react";
import MatrixRain from "./components/stage1/MatrixRain";
import UIWrapper from "./components/stage3/UIWrapper";
import Congratulations from "./components/stage4/Congratulations";
import Envelope from "./components/stage4/Envelope";
import Slideshow from "./components/stage4/Slideshow";
import HeartCollage from "./components/stage5/HeartCollage";
import BackgroundMusic from "./components/common/BackgroundMusic";
import "./index.css";

function App() {
  const [stage, setStage] = useState(1);

  return (
    <>
      <BackgroundMusic />
      {stage === 1 && <MatrixRain onComplete={() => setStage(3)} />}
      {stage === 3 && <UIWrapper onComplete={() => setStage(4)} />}
      {stage === 4 && <Congratulations onComplete={() => setStage(5)} />}
      {stage === 5 && <Envelope onComplete={() => setStage(6)} />}
      {stage === 6 && <Slideshow onComplete={() => setStage(7)} />}
      {stage === 7 && <HeartCollage onRestart={() => setStage(1)} />}
    </>
  );
}

export default App;