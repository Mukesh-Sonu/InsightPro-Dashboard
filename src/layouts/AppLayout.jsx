import { Outlet, useLocation } from "react-router-dom";
import { ConfigProvider, Flex } from "antd";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import UtilityPanel from "../components/InfoSidebar/UtilityPanel";
import { THEME_CONTEXT } from "../components/common/utils";

const AppLayout = () => {
  const location = useLocation();
  const pathsWithAsideBar = ["/"];
  const shouldRenderAsideBar = pathsWithAsideBar.includes(location.pathname);

  return (
    <div>
      <ConfigProvider theme={THEME_CONTEXT}>
        <Flex
          style={{
            height: "100vh",
          }}
        >
          <Sidebar />
          <Flex vertical className="main-container">
            <Navbar />
            <div
              style={{
                padding: "20px",
              }}
            >
              <Outlet />
            </div>
          </Flex>
          {shouldRenderAsideBar && <UtilityPanel />}
        </Flex>
      </ConfigProvider>
    </div>
  );
};

export default AppLayout;
