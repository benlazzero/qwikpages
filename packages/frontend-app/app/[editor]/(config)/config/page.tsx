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
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import NavIcon from "@/app/_components/nav-bar/NavIcon";
import CustomIFrame from "@/app/_components/CustomIframe";
import PreviewContainer from "@/app/_components/live-preview/PreviewContainer";
import ZoomToggle from "@/app/_components/tool-bar/ZoomToggle";

const LiveView = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPreview, setIsPreview] = useState(false);
  const [isReturnButton, setIsReturnButton] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);

  const handleTransitionEnd = () => {
    setShouldHide(true);
    setIsReturnButton(true);
  };

  const handlePreviewExit = () => {
    setIsPreview(false);
    setShouldHide(false);
    setIsReturnButton(false);
  };

  return (
    <div className={`flex flex-col justify-between bg-zinc-400 h-screen`}>
      {/** header */}
      <ReturnButton isReturn={isReturnButton} handleClick={handlePreviewExit} />
      <header
        className={`bg-zinc-100 flex justify-between items-center overflow-hidden ${
          isPreview ? "max-h-0 p-0" : "h-16 p-6"
        } ${shouldHide ? "hidden" : "block"}`}
        style={{
          overflow: "hidden",
          transition: "padding 0.2s ease-out",
        }}
        onTransitionEnd={handleTransitionEnd}
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
      <PreviewContainer>
        {/** Iframe content */}
        <CustomIFrame ref={iframeRef} />
      </PreviewContainer>

      {/** bottom toolbar wrapper */}
      <div
        className={`flex flex-col bg-zinc-100 h-1/4 ${
          isPreview ? "h-0" : "h-1/4 min-h-[280px]"
        } ${shouldHide ? "hidden" : "block"}`}
        style={{
          overflow: "hidden",
          transition: "height 0.2s ease-out",
        }}
        onTransitionEnd={handleTransitionEnd}
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
            <NavIcon icon={ChevronDownIcon} />
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
