"use client";
import { useState, useRef, useEffect } from "react";
import NavIconGroup from "@/app/_components/nav-bar/NavIconGroup";
import NewTemplateButton from "@/app/_components/nav-bar/NewTemplateButton";
import TemplateSelect from "@/app/_components/nav-bar/TemplateSelect";
import PreviewButton from "@/app/_components/nav-bar/PreviewButton";
import AvatarIcon from "@/app/_components/AvatarIcon";
import PublishButton from "@/app/_components/PublishButton";
import SaveButton from "@/app/_components/tool-bar/SaveButton";
import HistoryControls from "@/app/_components/tool-bar/HistoryControls";
import PreviewToggle from "@/app/_components/tool-bar/PreviewToggle";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import NavIcon from "@/app/_components/nav-bar/NavIcon";
import CustomIFrame from "@/app/_components/CustomIframe";
import PreviewContainer from "@/app/_components/live-preview/PreviewContainer";

const LiveView = () => {
  const [contentRef, setContentRef] = useState(null);
  return (
    <div className="flex flex-col justify-between bg-zinc-600 h-screen">
      {/** header */}
      <header className="bg-zinc-100 flex justify-between items-center h-16 p-6">
        <NavIconGroup />
        <div className="flex gap-1 items-center">
          <NewTemplateButton />
          <TemplateSelect />
        </div>
        <div className="flex items-center gap-4">
          <PreviewButton />
          <AvatarIcon />
          <PublishButton />
        </div>
      </header>

      {/** Live Preview */}
      <PreviewContainer>
        {/** Iframe content */}
        <CustomIFrame ref={setContentRef} />
      </PreviewContainer>

      {/** bottom toolbar wrapper */}
      <div className="flex flex-col bg-zinc-100 h-1/4">
        {/** top bar */}
        <div className="flex justify-between items-center border-b-2 h-16 min-h-[20px] px-6">
          <div className="flex items-center">
            <SaveButton />
            <HistoryControls />
          </div>
          <div className="flex items-center gap-4">
            <PreviewToggle />
            <NavIcon icon={MinusCircleIcon} />
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
