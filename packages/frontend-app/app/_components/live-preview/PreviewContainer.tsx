import { ReactNode } from "react";
import styles from "./PreviewContainer.module.css";

type Props = {
  children?: React.ReactNode;
};

const PreviewContainer = ({ children }: Props): ReactNode => {
  return <div className={styles.container}>{children}</div>;
};

export default PreviewContainer;
