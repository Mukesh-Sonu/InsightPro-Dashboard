import { Flex, Slider } from "antd";
import Geograph from "../molecules/Geograph";

const GeopgraphWrapper = () => {
  return (
    <Flex
      style={{
        flexDirection: "column",
      }}
    >
      <Geograph />

      <Flex
        className="display-range"
        style={{
          flexDirection: "column",
          background: "#F7F9FB",
          padding: "0 10px",
          paddingBottom: 10,
        }}
        gap="small"
      >
        <Flex
          style={{
            flexDirection: "column",
          }}
        >
          <Flex justify="space-between" align="center">
            <p>New York</p>
            <p>72K</p>
          </Flex>
          <Slider defaultValue={80} disabled />
        </Flex>

        <Flex
          style={{
            flexDirection: "column",
          }}
        >
          <Flex justify="space-between" align="center">
            <p>San Fransisco</p>
            <p>39K</p>
          </Flex>
          <Slider defaultValue={40} disabled />
        </Flex>

        <Flex
          style={{
            flexDirection: "column",
          }}
        >
          <Flex justify="space-between" align="center">
            <p>Sydney</p>
            <p>25K</p>
          </Flex>
          <Slider defaultValue={50} disabled />
        </Flex>

        <Flex
          style={{
            flexDirection: "column",
          }}
        >
          <Flex justify="space-between" align="center">
            <p>Singapore</p>
            <p>61K</p>
          </Flex>
          <Slider defaultValue={60} disabled />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default GeopgraphWrapper;
