import { MouseEvent } from "react";
import NavIcon from "./nav-bar/NavIcon";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

type Props = {
  isPreview: boolean;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

const ReturnButton = (props: Props) => {
  return (
    <button
      className={`flex absolute z-10 top-0 right-4 h-10 items-center self-center justify-center 
      cursor-default bg-zinc-500 text-zinc-100 w-10
${props.isPreview ? "" : "hidden"}`}
      onClick={props.handleClick}
    >
      <NavIcon icon={ArrowUpRightIcon} color="text-zinc-100" />
    </button>
  );
};

export default ReturnButton;
