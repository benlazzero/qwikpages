import { ReactNode } from "react";
import styles from "./PreviewContainer.module.css";

type Props = {
  children?: React.ReactNode;
};

const PreviewContainer = ({ children }: Props): ReactNode => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default PreviewContainer;
