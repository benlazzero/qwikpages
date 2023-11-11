import { ReactNode } from "react";
import styles from "./PreviewContainer.module.css";

type Props = {
  children?: React.ReactNode;
  isPreview: Boolean;
};

const PreviewContainer = ({ children, isPreview }: Props): ReactNode => {
  return (
    <div
      className={`${styles.container} ${isPreview ? styles.fullscreen : ""}`}
    >
      {children}
    </div>
  );
};

export default PreviewContainer;
