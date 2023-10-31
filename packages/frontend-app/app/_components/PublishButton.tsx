import { RocketLaunchIcon } from "@heroicons/react/24/outline";

const PublishButton = () => {
  return (
    <button className="flex bg-blue-500 gap-1 rounded w-24 h-8 items-center justify-center text-zinc-100">
      <RocketLaunchIcon className="w-5 h-5" />
      <p>Publish</p>
    </button>
  );
};

export default PublishButton;
