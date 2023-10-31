import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const PreviewToggle = () => {
  return (
    <div className="flex">
      <div className="flex items-center justify-center bg-zinc-800 w-8 h-8 rounded-l-md border-zinc-400">
        <ComputerDesktopIcon className="h-5 w-5 text-zinc-200" />
      </div>
      <div className="flex items-center justify-center bg-zinc-300 w-8 h-8 rounded-r-md border border-zinc-400">
        <DevicePhoneMobileIcon className="h-5 w-5" />
      </div>
    </div>
  );
};

export default PreviewToggle;
