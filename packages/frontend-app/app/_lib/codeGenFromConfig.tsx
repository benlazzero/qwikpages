import ComponentRegistry from "./componentRegistry";
import { Fragment } from "react";

const config = {
  pageTitle: "Sample Page",
  components: [
    {
      type: "header",
      props: { textContent: ["About", "Menu", "Gallery", "Contact"] },
      id: "0001",
    },
  ],
};

interface Config {
  type: string;
  props: any;
  id: string;
}

const genElementFromObject = (config: Config) => {
  let ComponentFunction =
    ComponentRegistry[config.type as keyof typeof ComponentRegistry];
  let allClasses;

  // is a waste right now not sure if need to add classes like this yet
  if (config?.props?.classes) {
    allClasses = Object.entries(config.props.classes)
      .filter(([key]) => !key.startsWith("__"))
      .map(([_, value]) => value)
      .join(" ");
  }

  if (ComponentFunction) {
    const Component = ComponentFunction;
    return allClasses ? (
      <div key={config.id}>
        <Component config={config.props} />
      </div>
    ) : (
      <div key={config.id}>
        <Component config={config.props} />
      </div>
    );
  }

  return null;
};

type ReturnProps = {
  pageTitle: string;
  components: Config[];
};

const ReturnAllElements = (props: ReturnProps) => {
  return (
    <Fragment>
      {props.components.map((componentConfig: Config) =>
        genElementFromObject(componentConfig)
      )}
    </Fragment>
  );
};

export default ReturnAllElements;
