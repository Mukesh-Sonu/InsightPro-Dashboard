import { ConfigProvider, Flex } from "antd";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import UtilityPanel from "../components/InfoSidebar/UtilityPanel";

const AppLayout = () => {
  const location = useLocation();

  const pathsWithAsideBar = ["/", "/path2", "/path3"];

  const shouldRenderAsideBar = pathsWithAsideBar.includes(location.pathname);
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#dee2e6",
          },
          components: {
            Menu: {
              itemHeight: "28px",
              itemSelectedColor: "#000000E0",
              itemSelectedBg: "rgba(0, 0, 0, 0.06)",
            },
            List: {
              itemPadding: "0px",
              titleMarginBottom: "1px",
              metaMarginBottom: "0px",
            },
            Steps: {
              navArrowColor: "pink",
            },
            Typography: {
              titleMarginBottom: 0,
            },
            Table: {
              headerColor: "#A0A1A2",
              rowHoverBg: "#F7F9FB",
              rowSelectedBg: "transparent",
              headerBg: "transparent",
              cellFontSizeSM: 12,
            },
          },
        }}
      >
        <Flex
          style={{
            height: "100vh",
          }}
        >
          <Sidebar />
          <Flex
            style={{
              flexDirection: "column",
              flex: 1,
              overflowY: "scroll",
              overflowX: "hidden",
              border: "1px solid rgba(5, 5, 5, 0.06)",
              height: "100vh",
            }}
          >
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
