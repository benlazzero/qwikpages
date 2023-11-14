import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

const usePreviewResizer = (
  scaleRef: RefObject<HTMLDivElement>,
  setContentDiff: Dispatch<SetStateAction<number>>
) => {
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
};

export default usePreviewResizer;
