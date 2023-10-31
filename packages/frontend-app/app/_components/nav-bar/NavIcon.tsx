/**
 * takes a heroicon as a prop and formats it to header icon styles
 */
type NavIconProps = {
  icon: React.ElementType;
  className?: string;
};

const NavIcon = ({ icon: Icon, className }: NavIconProps) => {
  return (
    <Icon
      className={`${className} h-6 w-6 rounded text-zinc-500 hover:text-zinc-900`}
      style={{ width: "24px", height: "24px" }}
    />
  );
};

export default NavIcon;
