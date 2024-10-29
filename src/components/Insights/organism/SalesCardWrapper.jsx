import SalesCard from "../molecules/SalesCard";
import { Flex } from "antd";

const SalesCardWrapper = () => {
  return (
    <div>
      <SalesCard />
      <Flex
        style={{
          flexDirection: "column",
          background: "#F7F9FB",
          padding: "20px",
          gap: 8,
        }}
      >
        <Flex justify="space-between">
          <Flex align="center" gap="small">
            <span
              className="dot"
              style={{
                background: "#1C1C1C",
              }}
            ></span>
            <p>Direct</p>
          </Flex>
          <p>$300.56</p>
        </Flex>
        <Flex justify="space-between">
          <Flex align="center" gap="small">
            <span
              className="dot"
              style={{
                background: "#BAEDBD",
              }}
            ></span>
            <p>Affiliate</p>
          </Flex>
          <p>$135.18</p>
        </Flex>
        <Flex justify="space-between">
          <Flex align="center" gap="small">
            <span
              className="dot"
              style={{
                background: "#A8C5DA",
              }}
            ></span>
            <p>Sponsored</p>
          </Flex>
          <p>$154.02</p>
        </Flex>
        <Flex justify="space-between">
          <Flex align="center" gap="small">
            <span
              className="dot"
              style={{
                background: "#A8C5DA",
              }}
            ></span>
            <p>Email</p>
          </Flex>
          <p>$48.96</p>
        </Flex>
      </Flex>
    </div>
  );
};

export default SalesCardWrapper;
