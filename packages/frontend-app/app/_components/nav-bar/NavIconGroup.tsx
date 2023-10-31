import NavIcon from "./NavIcon";
import {
  Cog6ToothIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

/**
 * Left side icons on the nav bar
 */
const NavIconGroup = () => {
  return (
    <nav className="flex gap-6">
      <NavIcon icon={HomeIcon} />
      <NavIcon icon={Cog6ToothIcon} />
      <NavIcon icon={QuestionMarkCircleIcon} />
    </nav>
  );
};

export default NavIconGroup;
