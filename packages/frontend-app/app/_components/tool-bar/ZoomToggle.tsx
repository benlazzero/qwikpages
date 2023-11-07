import { forwardRef, useState } from "react";
import usePostMsgToChild from "@/app/_hooks/usePostMsgToChild";
import NavIcon from "../nav-bar/NavIcon";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const ZoomToggle = forwardRef((props, ref) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const sendMsgToChild = usePostMsgToChild(ref);

  const handleZoom = () => {
    const message = {
      type: "pizza",
      data: false,
    };
    if (isZoomed) {
      setIsZoomed(false);
      message.data = false;
    } else {
      setIsZoomed(true);
      message.data = true;
    }

    sendMsgToChild(message);
  };

  return (
    <div
      onClick={handleZoom}
      className="flex text-md text-zinc-500 items-center"
    >
      {isZoomed ? (
        <>
          <NavIcon icon={PlusCircleIcon} />
          <p>50%</p>
        </>
      ) : (
        <>
          <NavIcon icon={MinusCircleIcon} />
          <p>100%</p>
        </>
      )}
    </div>
  );
});

export default ZoomToggle;
