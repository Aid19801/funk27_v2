import { Footer } from "./index";
import "react-bulma-components/dist/react-bulma-components.min.css";

export default {
  title: "Footer",
  component: Footer,
  argTypes: {
    darkMode: "boolean",
  },
};

interface FooterProps {
  darkMode: boolean;
}

const Template: React.FC<FooterProps> = ({
  darkMode,
  ...args
}: FooterProps) => {
  return <Footer {...args} darkMode={darkMode} />;
};

export { Template };
