import { Navbar } from "./index";
import "react-bulma-components/dist/react-bulma-components.min.css";

export default {
  title: "Navbar",
  component: Navbar,
};

interface NavbarProps {}

const Template: React.FC<NavbarProps> = ({ ...args }: NavbarProps) => {
  return <Navbar {...args} />;
};

export { Template };
