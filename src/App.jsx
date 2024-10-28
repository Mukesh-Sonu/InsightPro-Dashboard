import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { ConfigProvider, Flex, Layout, theme } from "antd";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import UtilityPanel from "./components/InfoSidebar/UtilityPanel";
import InsightsDashboard from "./components/Insights/InsightsDashboard";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const headerStyle = {
    background: "#ffffff",
    borderBottom: "1px solid rgba(5, 5, 5, 0.06)",
    position: "sticky",
    top: 0,
    // padding: 0,
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          // colorPrimary: "rgba(0, 0, 0, 0.01)",
          // colorPrimary: "rgba(0, 0, 0, 0.45)",
          colorPrimary: "#dee2e6",
          // colorDisabled: "#00000040",
          // colorText: "#333",
          // Alias Token
          // colorBgContainer: "#f6ffed",
        },
        components: {
          Menu: {
            itemHeight: "28px",
            itemSelectedColor: "#000000E0",
            itemSelectedBg: "rgba(0, 0, 0, 0.06)",
          },
          List: {
            /* here is your component tokens */
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
        },
      }}
    >
      {/* <Layout hasSider style={{ display: "flex" }}>
        <Sidebar />
        <Layout
          style={{
            marginInlineStart: 200,
            maxWidth: "800px",
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
        >
          <Header style={headerStyle}>
            <Navbar />
          </Header>
          <Content
            style={{
              margin: "24px 16px 0",
              overflow: "initial",
              background: "pink",
            }}
          >
            <div
              style={{
                padding: 24,
                textAlign: "center",
                background: colorBgContainer,
                // borderRadius: borderRadiusLG,
              }}
            >
              <p>long content</p>
              {
                // indicates very long content
                Array.from(
                  {
                    length: 100,
                  },
                  (_, index) => (
                    <React.Fragment key={index}>
                      {index % 20 === 0 && index ? "more" : "..."}
                      <br />
                    </React.Fragment>
                  )
                )
              }
            </div>
          </Content>
        </Layout>
        <UtilityPanel />
      </Layout> */}
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
            overflow: "scroll",
            border: "1px solid rgba(5, 5, 5, 0.06)",
            height: "100vh",
          }}
        >
          <Navbar />
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              // borderRadius: borderRadiusLG,
            }}
          >
            <InsightsDashboard />
          </div>
        </Flex>
        <UtilityPanel />
      </Flex>
    </ConfigProvider>
  );
}

export default App;
