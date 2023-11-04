import {
  useEffect,
  useRef,
  WheelEvent,
  MouseEvent,
  useState,
  ReactNode,
} from "react";
import styles from "./PreviewContainer.module.css";

type Props = {
  children?: React.ReactNode;
};

const PreviewContainer = ({ children }: Props): ReactNode => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isCmdOrCtrlPressed, setIsCmdOrCtrlPressed] = useState(false);
  const [isSpacebarPressed, setIsSpacebarPressed] = useState(false);

  const handleWheel = (e: WheelEvent) => {
    if (isCmdOrCtrlPressed) {
      if (e.deltaY < 0) {
        setScale(scale * 1.1);
      } else {
        setScale(scale / 1.1);
      }
    }
  };

  useEffect(() => {
    const receiveMessage = (e: MessageEvent) => {
      if (e.data.type === "wheel") {
        const customEvent = {
          deltaY: e.data.deltaY,
          preventDefault: () => {},
        } as WheelEvent;
        handleWheel(customEvent);
      }
    };

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === " ") {
        setIsSpacebarPressed(true);
      } else if (e.key === "Meta" || e.key === "Control") {
        setIsCmdOrCtrlPressed(true);
      }
    }

    function handleKeyUp(e: KeyboardEvent) {
      if (e.key === " ") {
        setIsSpacebarPressed(false);
      } else if (e.key === "Meta" || e.key === "Control") {
        setIsCmdOrCtrlPressed(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("message", receiveMessage);
    };
  }, [handleWheel]);

  const handleMouseMove = (e: MouseEvent) => {
    if (e.buttons === 1 && isSpacebarPressed === true) {
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
      style={{ cursor: `${isSpacebarPressed ? "grab" : "auto"}` }}
      onWheel={handleWheel}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.content} style={style}>
        <div
          className={styles.overlay}
          onMouseMove={handleMouseMove}
          style={isSpacebarPressed ? { display: "block" } : { display: "none" }}
        >
          move now
        </div>
        {children}
      </div>
    </div>
  );
};

export default PreviewContainer;
