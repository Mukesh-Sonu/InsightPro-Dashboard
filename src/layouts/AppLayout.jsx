import { Outlet, useLocation } from "react-router-dom";
import { ConfigProvider, Flex, theme } from "antd";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import UtilityPanel from "../components/InfoSidebar/UtilityPanel";
import { getAppTheme } from "../components/common/utils";
import { useAppContext } from "../context/appContext";

const RenderOutlet = () => {
  const { useToken } = theme;
  const { token } = useToken();

  return (
    <Flex
      vertical
      className="main-container"
      style={{
        border: `1px solid ${token.colorBorderBg}`,
      }}
    >
      <Navbar />
      <div
        style={{
          padding: "20px",
          background: token.colorBgBase,
        }}
      >
        <Outlet />
      </div>
    </Flex>
  );
};

const AppLayout = () => {
  const location = useLocation();
  const pathsWithAsideBar = ["/"];
  const shouldRenderAsideBar = pathsWithAsideBar.includes(location.pathname);
  const { appTheme } = useAppContext();

  return (
    <ConfigProvider theme={getAppTheme(appTheme)}>
      <Flex
        style={{
          height: "100vh",
        }}
      >
        <Sidebar />
        <RenderOutlet />
        {shouldRenderAsideBar && <UtilityPanel />}
      </Flex>
    </ConfigProvider>
  );
};

export default AppLayout;
