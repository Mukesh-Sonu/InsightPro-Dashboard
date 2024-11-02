import { Flex, theme } from "antd";
import Notification from "./molecules/Notification";
import Activity from "./molecules/Activity";
import Contact from "./molecules/Contact";
import { useAppContext } from "../../context/appContext";
const { useToken } = theme;

const UtilityPanel = () => {
  const { token } = useToken();
  const { isSmScreen } = useAppContext();
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
        maxWidth: isSmScreen ? "100%" : "30%",
      }}
    >
      <Notification />
      <Activity />
      <Contact />
    </Flex>
  );
};

export default UtilityPanel;
