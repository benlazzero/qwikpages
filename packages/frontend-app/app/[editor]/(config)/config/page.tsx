"use client";
import NavIconGroup from "@/app/_components/nav-bar/NavIconGroup";
import NewTemplateButton from "@/app/_components/nav-bar/NewTemplateButton";
import TemplateSelect from "@/app/_components/nav-bar/TemplateSelect";
import PreviewButton from "@/app/_components/nav-bar/PreviewButton";
import AvatarIcon from "@/app/_components/AvatarIcon";
import PublishButton from "@/app/_components/PublishButton";

const LiveView = () => {
  return (
    <header className="flex justify-between items-center h-16 border-2 p-6">
      <NavIconGroup />
      <div className="flex gap-2 items-center">
        <NewTemplateButton />
        <TemplateSelect />
      </div>
      <div className="flex items-center gap-4">
        <PreviewButton />
        <AvatarIcon />
        <PublishButton />
      </div>
    </header>
  );
};

export default LiveView;
