"use client";
import { useEffect, useState, useRef } from "react";
import useListenToIframe from "../_hooks/useIframeListener";

type Message = {
  type: string;
  data?: boolean;
};

const LiveView = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const scaleRef = useRef<HTMLDivElement>(null);
  const [iframeMessage, setIframeMessage] = useState<Message>({
    type: "null",
    data: false,
  });
  useListenToIframe(setIframeMessage);

  // handle preview size during zoom out scale
  useEffect(() => {
    const element = scaleRef.current;
    if (element) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const target = entry.target as HTMLElement;
          const height = target.offsetHeight * 0.6 - target.offsetHeight;
          element.style.setProperty("--content-height", `${height}px`);
        }
      });
      resizeObserver.observe(element);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    if (iframeMessage.type === "pizza") {
      handleZoom();
    }
  }, [iframeMessage]);

  const handleZoom = () => {
    setIsZoomed((prevIsZoomed) => !prevIsZoomed);
  };

  return (
    <div
      className="flex justify-center"
      style={{ height: "100vh", width: "100%" }}
    >
      <div
        className={`flex flex-col items-center bg-zinc-400 w-full overflow-y-scroll pt-7 pb-20`}
      >
        <div
          className={`flex flex-col gap-60 bg-zinc-200 w-[96%] ${
            isZoomed ? "origin-top scale-[0.6] mb-[var(--content-height)]" : "0"
          }`}
          ref={scaleRef}
        >
          <div>will be iframe</div>
          <div>will be iframe</div>
          <div>will be iframe</div>
          <div>will be iframe</div>
          <div>will be iframe</div>
          <div>will be iframe</div>
          <div>will be iframe</div>
          <div>will be iframe</div>
          <div>will be iframe</div>
          <div>will be iframe</div>
          <div>will be iframe</div>
          <div>will be iframe</div>
          <div>will be iframe</div>
          <div>will be iframe</div>
          <div>will be iframe</div>
          <div>will be iframe</div>
        </div>
      </div>
    </div>
  );
};

export default LiveView;
