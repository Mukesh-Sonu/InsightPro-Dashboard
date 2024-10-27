import { Flex, Breadcrumb, Input, Space } from "antd";
import {
  PiNotebook,
  PiStar,
  PiBell,
  PiClockCounterClockwiseLight,
  PiSunLight,
} from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
      style={{
        height: "100%",
        padding: "20px",
        position: "sticky",
        top: 0,
        backgroundColor: "#ffffff",
        borderBottom: "1px solid rgba(5, 5, 5, 0.06)",
      }}
    >
      <Flex gap="middle">
        <PiNotebook size={20} />
        <PiStar size={20} />
        <Breadcrumb
          items={[
            {
              title: "Home",
            },
            {
              title: "An Application",
            },
          ]}
        />
      </Flex>
      <Space size="middle" align="center">
        <Input size="medium" placeholder="search" prefix={<CiSearch />} />
        <PiSunLight size={20} />
        <PiClockCounterClockwiseLight size={20} />
        <PiNotebook size={20} />
        <PiBell size={20} />
      </Space>
    </Flex>
  );
};

export default Navbar;
