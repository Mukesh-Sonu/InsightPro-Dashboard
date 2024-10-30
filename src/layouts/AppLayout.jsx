import { Outlet, useLocation } from "react-router-dom";
import { ConfigProvider, Flex, theme, Row, Col, Layout, Grid } from "antd";
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
        borderBottom: "transparent",
      }}
    >
      <Navbar />
      <Flex
        vertical
        style={{
          padding: 20,
          background: token.colorBgBase,
          flex: 1,
        }}
      >
        <Outlet />
      </Flex>
    </Flex>
  );
};

const AppLayout = () => {
  const location = useLocation();
  const pathsWithAsideBar = ["/"];
  const shouldRenderAsideBar = pathsWithAsideBar.includes(location.pathname);
  const { appTheme, isLgScreen } = useAppContext();

  return (
    <ConfigProvider theme={getAppTheme(appTheme)}>
      <Layout>
        <Row>
          {isLgScreen && (
            <Col span={4}>
              <Sidebar />
            </Col>
          )}

          <Col lg={20}>
            <Flex vertical={isLgScreen ? false : true}>
              <RenderOutlet />
              {shouldRenderAsideBar && <UtilityPanel />}
            </Flex>
          </Col>
        </Row>
      </Layout>
    </ConfigProvider>
  );
};

export default AppLayout;
