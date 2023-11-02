import { forwardRef } from "react";
import { createPortal } from "react-dom";

const CustomIFrame = forwardRef(function CustomIFrame(props, ref) {
  const mountNode = ref.current?.contentWindow?.document?.body;

  return (
    <iframe ref={ref} src="/" allowFullScreen="">
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
});

export default CustomIFrame;
