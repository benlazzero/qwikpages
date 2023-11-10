import { Dispatch, SetStateAction, useState } from "react";
import NavIcon from "./NavIcon";
import { PlayIcon } from "@heroicons/react/24/outline";

type Props = {
  setIsPreview: Dispatch<SetStateAction<boolean>>;
};

const PreviewButton = (props: Props) => {
  const handleClick = () => {
    props.setIsPreview(true);
  };

  return (
    <button onClick={handleClick} className={`cursor-default`}>
      <NavIcon icon={PlayIcon} />
    </button>
  );
};

export default PreviewButton;
