import { Flex } from "antd";
import Notification from "./molecules/Notification";
import Activity from "./molecules/Activity";
import Contact from "./molecules/Contact";

const UtilityPanel = () => {
  return (
    <Flex
      className="utility-panel"
      gap="middle"
      style={{
        width: "262px",
        flexDirection: "column",
        paddingTop: "20px",
        padding: 10,
        height: "100vh",
        overflow: "scroll",
      }}
    >
      <Notification />
      <Activity />
      <Contact />
    </Flex>
  );
};

export default UtilityPanel;
