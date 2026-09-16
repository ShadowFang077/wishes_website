import React, { useEffect } from "react";

export default function HeartFormation({ onComplete }) {
  useEffect(() => {
    setTimeout(onComplete, 3000);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ff2d78",
        fontSize: "60px"
      }}
    >
      ❤️
    </div>
  );
}