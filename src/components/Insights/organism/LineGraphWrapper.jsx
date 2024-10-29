import { Flex } from "antd";
import LineGraph from "../molecules/LineGraph";

const LineGraphWrapper = () => {
  return (
    <Flex
      style={{
        flexDirection: "column",
      }}
    >
      <Flex
        style={{
          padding: "20px",
          paddingBottom: 0,
          background: "#F7F9FB",
        }}
        align="center"
      >
        <p
          style={{
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Revenue
        </p>
        <span
          style={{
            margin: "0 20px",
          }}
        >
          {" "}
          |
        </span>

        <Flex gap={30}>
          <Flex align="center" gap="small">
            <span
              className="dot"
              style={{
                background: "#A8C5DA",
              }}
            ></span>
            <p>Current Week $58,211</p>
          </Flex>
          <Flex align="center" gap="small">
            <span
              className="dot"
              style={{
                background: "#1C1C1C",
              }}
            ></span>
            <p>Previous Week $68,768</p>
          </Flex>
        </Flex>
      </Flex>

      <LineGraph />
    </Flex>
  );
};
export default LineGraphWrapper;
