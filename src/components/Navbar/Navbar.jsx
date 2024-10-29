import { Flex, Breadcrumb, Input, Space, theme } from "antd";
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
import { useAppContext } from "../../context/appContext";
const { useToken } = theme;

const Navbar = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((path) => path);
  const { token } = useToken();
  const { appTheme, setAppTheme } = useAppContext();

  console.log(appTheme, "appTheme");
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

  const IconWithColor = ({ icon: Icon, onClick }) => {
    return (
      <Icon
        size={DEFAULT_ICON_SIZE}
        style={{
          color: token.colorTextHeading,
          cursor: onClick ? "pointer" : "default",
        }}
        onClick={onClick}
      />
    );
  };

  const handleThemeMode = () => {
    if (appTheme == "light") {
      setAppTheme("dark");
    } else {
      setAppTheme("light");
    }
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      className="navbar-container"
      style={{
        background: token.colorBgBase,
      }}
    >
      <Flex gap="middle">
        <IconWithColor icon={PiNotebook} />
        <IconWithColor icon={PiStar} />
        <Breadcrumb items={breadcrumbItems} />
      </Flex>
      <Space size="middle" align="center">
        <Input
          size="medium"
          placeholder="search"
          prefix={<IconWithColor icon={CiSearch} />}
        />
        <IconWithColor icon={PiSunLight} onClick={handleThemeMode} />
        <IconWithColor icon={PiClockCounterClockwiseLight} />
        <IconWithColor icon={PiNotebook} />
        <IconWithColor icon={PiBell} />
      </Space>
    </Flex>
  );
};

export default Navbar;
