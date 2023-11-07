import { forwardRef, useState } from "react";
import usePostMsgToChild from "@/app/_hooks/usePostMsgToChild";
import NavIcon from "../nav-bar/NavIcon";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const ZoomToggle = forwardRef((props, ref) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const sendMsgToChild = usePostMsgToChild(ref);

  const handleZoom = () => {
    const message = {
      type: "zoom",
    };
    if (isZoomed) {
      setIsZoomed(false);
    } else {
      setIsZoomed(true);
    }
    sendMsgToChild(message);
  };

  return (
    <div
      onClick={handleZoom}
      className="flex text-md text-zinc-500 items-center"
    >
      {isZoomed ? (
        <div className="flex min-w-[70px]">
          <NavIcon icon={PlusCircleIcon} />
          <p>50%</p>
        </div>
      ) : (
        <div className="flex min-w-[70px]">
          <NavIcon icon={MinusCircleIcon} />
          <p>100%</p>
        </div>
      )}
    </div>
  );
});

export default ZoomToggle;
