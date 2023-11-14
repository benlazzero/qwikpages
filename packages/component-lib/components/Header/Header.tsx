import Image from "next/image";
import dummyLogo from "./dummyLogo.svg";
import styles from "./Header.module.css";
import Editable from "../Editable/Editable";

interface Config {
  textContent: string[];
}

interface Props {
  config: Config;
}

// textContent is all editable text
// Must be wrapped in <Editable> tag
// Config will show default value in textContent array.
export default function Header(props: Props) {
  const textContent = props.config.textContent;

  return (
    <div className={styles.container}>
      <div className={styles.leafContainer}>
        <div className={styles.leftIcons}>
          <Image
            className={styles.logo}
            width={100}
            priority
            src={dummyLogo}
            alt="dummy logo"
          />
        </div>
        <div className={styles.rightIcons}>
          <ul className={styles.iconList}>
            <Editable>
              <a
                href="#about"
                data-textid="textContent"
                data-index="0"
                data-componentid="0001"
              >
                {textContent[0]}
              </a>
            </Editable>
            <Editable>
              <a
                href="#menu"
                data-textid="textContent"
                data-index="1"
                data-componentid="0001"
              >
                {textContent[1]}
              </a>
            </Editable>
            <Editable>
              <a
                href="#gallery"
                data-textid="textContent"
                data-index="2"
                data-componentid="0001"
              >
                {textContent[2]}
              </a>
            </Editable>
            <Editable>
              <a
                href="#contact"
                data-textid="textContent"
                data-index="3"
                data-componentid="0001"
              >
                {textContent[3]}
              </a>
            </Editable>
          </ul>
        </div>
      </div>
    </div>
  );
}
