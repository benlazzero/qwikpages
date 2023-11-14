import dynamic from "next/dynamic";
const Header = dynamic(
  () => import("../../../component-lib/components/Header/Header")
);

// holds all components available,
// Will be updated when actual component library starts taking shape

const ComponentRegistry = {
  header: Header,
};

export default ComponentRegistry;
