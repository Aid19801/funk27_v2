import { MarketStream } from "./index";
import "react-bulma-components/dist/react-bulma-components.min.css";

export default {
  title: "Market Stream",
  component: MarketStream,
};

interface MarketStreamProps {
  show: boolean;
}

const Template: React.FC<MarketStreamProps> = ({
  ...args
}: MarketStreamProps) => {
  return <MarketStream {...args} />;
};

export { Template };
