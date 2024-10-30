import { Flex, theme } from "antd";
import Notification from "./molecules/Notification";
import Activity from "./molecules/Activity";
import Contact from "./molecules/Contact";
const { useToken } = theme;

const UtilityPanel = () => {
  const { token } = useToken();
  return (
    <Flex
      className="utility-panel"
      vertical
      gap="middle"
      style={{
        background: token.colorBgBase,
        padding: 20,
        maxHeight: "100vh",
        overflowY: "scroll",
      }}
    >
      <Notification />
      <Activity />
      <Contact />
    </Flex>
  );
};

export default UtilityPanel;
