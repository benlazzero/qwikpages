import NavIcon from "./NavIcon";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const TemplateSelect = () => {
  return (
    <div className="flex items-center">
      <NavIcon icon={ChevronDownIcon} />
      <div className="p-1">
        <p className="text-sm">{"Template Name"}</p>
        <p className="text-zinc-400 text-xs">{"Template Type"}</p>
      </div>
    </div>
  );
};

export default TemplateSelect;
