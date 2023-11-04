"use client";
import { WheelEvent } from "react";

const LiveView = () => {
  // i think i can use overlay method vs this laggy ass message
  const handleWheel = (e: WheelEvent) => {
    const message = {
      type: "wheel",
      deltaY: e.deltaY,
    };
    window.parent.postMessage(message, "*");
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }} onWheel={handleWheel}>
      <div>will be iframe</div>
    </div>
  );
};

export default LiveView;
