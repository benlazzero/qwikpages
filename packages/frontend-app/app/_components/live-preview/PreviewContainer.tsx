import { WheelEvent, MouseEvent, useState, ReactNode } from "react";
import styles from "./PreviewContainer.module.css";

type Props = {
  children?: React.ReactNode;
};

const PreviewContainer = ({ children }: Props): ReactNode => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleWheel = (e: WheelEvent) => {
    if (e.deltaY < 0) {
      setScale(scale * 1.1);
    } else {
      setScale(scale / 1.1);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (e.buttons === 1) {
      // Left mouse button is pressed
      setPosition({
        x: position.x + e.movementX,
        y: position.y + e.movementY,
      });
    }
  };

  const style = {
    transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
  };

  return (
    <div
      className={styles.container}
      onWheel={handleWheel}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.content} style={style}>
        {/* Your zoomable and pannable content goes here */}
        {children}
      </div>
    </div>
  );
};

export default PreviewContainer;
