import { forwardRef, useState } from "react";
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import usePostMsgToChild from "@/app/_hooks/usePostMsgToChild";

const DeviceViewToggle = forwardRef((props, ref) => {
  const [isMobileView, setIsMobileView] = useState(false);
  const sendMsgToChild = usePostMsgToChild(ref);

  const handleViewButton = () => {
    const message = {
      type: "view",
    };
    setIsMobileView((prevIsMobileView) => !prevIsMobileView);
    sendMsgToChild(message);
  };

  return (
    <div className="flex">
      <button
        className={`flex items-center justify-center cursor-default ${
          isMobileView ? "bg-zinc-300" : "bg-zinc-800"
        } w-8 h-8 rounded-l-md border-zinc-400`}
        onClick={handleViewButton}
      >
        <ComputerDesktopIcon
          className={`h-5 w-5 ${isMobileView ? "" : "text-zinc-200"}`}
          // redundant style to combat flash of unstyled content
          style={{ width: "20px", height: "20px" }}
        />
      </button>
      <button
        className={`flex items-center justify-center cursor-default ${
          isMobileView ? "bg-zinc-800" : "bg-zinc-300"
        } w-8 h-8 rounded-r-md border border-zinc-400`}
        onClick={handleViewButton}
      >
        <DevicePhoneMobileIcon
          className={`h-5 w-5 ${isMobileView ? "text-zinc-200" : ""}`}
          style={{ width: "20px", height: "20px" }}
        />
      </button>
    </div>
  );
});

export default DeviceViewToggle;
