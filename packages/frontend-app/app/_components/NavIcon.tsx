/**
 * takes a heroicon as a prop and formats it to header icon styles
 */
const NavIcon = ({ icon }: { icon: React.ElementType }) => {
  const Icon = icon;
  return <Icon className="h-6 w-6" />;
};

export default NavIcon;