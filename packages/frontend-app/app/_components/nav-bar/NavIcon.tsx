/**
 * takes a heroicon as a prop and formats it to header icon styles
 */
type NavIconProps = {
  icon: React.ElementType;
  className?: string;
  color?: string;
};

const NavIcon = ({
  icon: Icon,
  className,
  color = "text-zinc-500",
}: NavIconProps) => {
  return (
    <Icon
      className={`h-6 w-6 rounded ${color} hover:text-zinc-900 ${className}`}
      style={{ width: "24px", height: "24px" }}
    />
  );
};

export default NavIcon;
