import NavIcon from "../nav-bar/NavIcon";
import {
  ArrowUturnRightIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/outline";

const HistoryControls = ({ className }: { className?: string }) => {
  return (
    <div className={`flex gap-2 pl-4 ${className}`}>
      <NavIcon icon={ArrowUturnLeftIcon} />
      <NavIcon icon={ArrowUturnRightIcon} />
    </div>
  );
};

export default HistoryControls;
