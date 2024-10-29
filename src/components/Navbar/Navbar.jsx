import { Flex, Breadcrumb, Input, Space } from "antd";
import { useLocation } from "react-router-dom";
import {
  PiNotebook,
  PiStar,
  PiBell,
  PiClockCounterClockwiseLight,
  PiSunLight,
} from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbItems = [
    {
      title: "Home",
      href: "/",
    },
    ...pathnames.map((pathname, index) => {
      const to = `/${pathnames.slice(0, index + 1).join("/")}`;
      return index === pathnames.length - 1
        ? { title: pathname.charAt(0).toUpperCase() + pathname.slice(1) }
        : {
            title: pathname.charAt(0).toUpperCase() + pathname.slice(1),
            href: to,
          };
    }),
  ];

  return (
    <Flex
      justify="space-between"
      align="center"
      style={{
        padding: "20px",
        position: "sticky",
        top: 0,
        backgroundColor: "#ffffff",
        borderBottom: "1px solid rgba(5, 5, 5, 0.06)",
        zIndex: 1000,
      }}
    >
      <Flex gap="middle">
        <PiNotebook size={20} />
        <PiStar size={20} />
        <Breadcrumb items={breadcrumbItems} />
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
