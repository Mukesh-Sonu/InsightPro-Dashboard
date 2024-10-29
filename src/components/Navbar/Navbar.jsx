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
import { DEFAULT_ICON_SIZE } from "../common/constants";

const Navbar = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((path) => path);

  const breadcrumbItems = [
    {
      title: "Home",
      ...(pathnames.length !== 0 ? { href: "/" } : {}),
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
    <Flex justify="space-between" align="center" className="navbar-container">
      <Flex gap="middle">
        <PiNotebook size={DEFAULT_ICON_SIZE} />
        <PiStar size={DEFAULT_ICON_SIZE} />
        <Breadcrumb items={breadcrumbItems} />
      </Flex>
      <Space size="middle" align="center">
        <Input size="medium" placeholder="search" prefix={<CiSearch />} />
        <PiSunLight size={DEFAULT_ICON_SIZE} />
        <PiClockCounterClockwiseLight size={DEFAULT_ICON_SIZE} />
        <PiNotebook size={DEFAULT_ICON_SIZE} />
        <PiBell size={DEFAULT_ICON_SIZE} />
      </Space>
    </Flex>
  );
};

export default Navbar;
