"use client";
import { useEffect, useState, useRef } from "react";
import useListenToIframe from "../_hooks/useIframeListener";

type Message = {
  type: string;
  data?: boolean;
};

const LiveView = () => {
  const scaleRef = useRef<HTMLDivElement>(null);
  const [contentDiff, setContentDiff] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
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
          setContentDiff(Math.ceil(height));
        }
      });
      resizeObserver.observe(element);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    if (iframeMessage.type === "zoom") {
      setIsZoomed((prevIsZoomed) => !prevIsZoomed);
    }
    if (iframeMessage.type === "view") {
      setIsMobileView((prevIsMobileView) => !prevIsMobileView);
    }
    if (iframeMessage.type === "preview") {
      console.log("tryna preview homie");
    }
  }, [iframeMessage]);

  return (
    <div className="flex justify-center h-screen w-full">
      <div
        className={`flex flex-col items-center bg-zinc-400 w-full overflow-y-scroll pt-7 pb-20`}
      >
        {/* This is effectivly the body tag where template will be generated from config*/}
        <div
          className={`flex flex-col gap-60 bg-zinc-200 ${
            isZoomed ? `origin-top scale-[0.6]` : ""
          } ${isMobileView ? `w-[380px]` : "w-[96%]"}`}
          style={isZoomed ? { marginBottom: `${contentDiff}px` } : {}}
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
        </div>
      </div>
    </div>
  );
};

export default LiveView;
