"use client";
import { useEffect, useState, useRef } from "react";
import ReturnAllElements from "../_lib/codeGenFromConfig";
import useListenToIframe from "../_hooks/useIframeListener";
import usePreviewResizer from "../_hooks/usePreviewResizer";

//dummy data
const config = {
  pageTitle: "Sample Page",
  components: [
    {
      type: "header",
      props: { textContent: ["About", "Menu", "Gallery", "Contact"] },
      id: "0001",
    },
  ],
};

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
  // attach listener for parent messages
  useListenToIframe(setIframeMessage);
  // attach listener for iframe resize, set contentDiff to adjust whitespace around preview
  usePreviewResizer(scaleRef, setContentDiff);

  // handle messages from parent
  useEffect(() => {
    if (iframeMessage.type === "zoom") {
      setIsZoomed((prevIsZoomed) => !prevIsZoomed);
    }
    if (iframeMessage.type === "view") {
      setIsMobileView((prevIsMobileView) => !prevIsMobileView);
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
          <div>is iframe</div>
          <ReturnAllElements {...config} />
        </div>
      </div>
    </div>
  );
};

export default LiveView;
