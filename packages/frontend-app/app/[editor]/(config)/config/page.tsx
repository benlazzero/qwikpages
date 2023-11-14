"use client";
import { useState, useRef } from "react";
import NavIconGroup from "@/app/_components/nav-bar/NavIconGroup";
import NewTemplateButton from "@/app/_components/nav-bar/NewTemplateButton";
import TemplateSelect from "@/app/_components/nav-bar/TemplateSelect";
import PreviewButton from "@/app/_components/nav-bar/PreviewButton";
import AvatarIcon from "@/app/_components/AvatarIcon";
import PublishButton from "@/app/_components/PublishButton";
import SaveButton from "@/app/_components/tool-bar/SaveButton";
import ReturnButton from "@/app/_components/ReturnButton";
import HistoryControls from "@/app/_components/tool-bar/HistoryControls";
import DeviceViewToggle from "@/app/_components/tool-bar/DeviceViewToggle";
import CustomIFrame from "@/app/_components/CustomIframe";
import PreviewContainer from "@/app/_components/live-preview/PreviewContainer";
import ZoomToggle from "@/app/_components/tool-bar/ZoomToggle";
import styles from "./page.module.css";

const LiveView = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPreview, setIsPreview] = useState(false);

  const handlePreviewExit = () => {
    setIsPreview(false);
  };

  return (
    <div className={`flex flex-col justify-between bg-zinc-400 h-screen`}>
      {/** header */}
      <ReturnButton isPreview={isPreview} handleClick={handlePreviewExit} />
      <header
        className={`bg-zinc-100 h-16 p-6 flex z-10 ${
          styles.header
        } justify-between items-center overflow-hidden ${
          isPreview ? `${styles.headerHidden}` : ""
        }`}
      >
        <NavIconGroup />
        <div className="flex gap-1 items-center">
          <NewTemplateButton />
          <TemplateSelect />
        </div>
        <div className="flex items-center gap-4">
          <PreviewButton setIsPreview={setIsPreview} />
          <AvatarIcon />
          <PublishButton />
        </div>
      </header>

      {/** Live Preview */}
      <PreviewContainer isPreview={isPreview}>
        {/** Iframe content */}
        <CustomIFrame ref={iframeRef} />
      </PreviewContainer>

      {/** bottom toolbar wrapper */}
      <div
        className={`flex flex-col bg-zinc-100 h-1/4 min-h-[280px] ${
          styles.bottomToolBar
        }
          ${isPreview ? `${styles.bottomHidden}` : ""}`}
      >
        {/** top bar */}
        <div className="flex justify-between items-center border-b-2 h-16 min-h-[20px] px-6">
          <div className="flex items-center">
            <SaveButton />
            <HistoryControls />
          </div>
          <div>--url preview--</div>
          <div className="flex items-center gap-4">
            <DeviceViewToggle ref={iframeRef} />
            <ZoomToggle ref={iframeRef} />
          </div>
        </div>

        {/** bottom sections */}
        <div className="flex justify-evenly h-full">
          {/** left section */}
          <div className="w-full">left</div>
          {/** right section */}
          <div className="w-full border-l-2">right</div>
        </div>
      </div>
    </div>
  );
};

export default LiveView;
