import { Footer } from "./index";
import "react-bulma-components/dist/react-bulma-components.min.css";

export default {
  title: "Footer Title Here",
  component: Footer,
  argTypes: {
    darkMode: "boolean",
  },
};

// Template is the wrapper for your component
export const Template = ({ darkMode, ...args }) => {
  return <Footer {...args} darkMode={darkMode} />;
};
