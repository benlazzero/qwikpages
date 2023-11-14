import styles from "./editable.module.css";
import {
  useState,
  Fragment,
  cloneElement,
  MouseEvent,
  ReactElement,
} from "react";

type EditableProps = {
  children: ReactElement;
};

const Editable = ({ children }: EditableProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleEnter = (event: MouseEvent) => {
    setIsHovering(true);
  };

  const handleExit = (event: MouseEvent) => {
    setIsHovering(false);
  };

  return (
    <Fragment>
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleExit}
        style={{ position: "relative", padding: "5px" }}
      >
        {cloneElement(children, {
          contentEditable: true,
          suppressContentEditableWarning: true,
        })}
        <div
          className={
            isHovering
              ? `${styles.container} ${styles.containerActive}`
              : `${styles.container}`
          }
        />
      </div>
    </Fragment>
  );
};

export default Editable;
