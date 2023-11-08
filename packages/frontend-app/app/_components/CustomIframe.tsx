import { forwardRef } from "react";

type CustomIFrameProps = React.DetailedHTMLProps<
  React.IframeHTMLAttributes<HTMLIFrameElement>,
  HTMLIFrameElement
>;

const CustomIFrame = forwardRef<HTMLIFrameElement, CustomIFrameProps>(
  (props, ref) => {
    return (
      <iframe
        ref={ref}
        src="/"
        allowFullScreen={true}
        style={{ width: "100%", height: "100%" }}
      ></iframe>
    );
  }
);

export default CustomIFrame;
