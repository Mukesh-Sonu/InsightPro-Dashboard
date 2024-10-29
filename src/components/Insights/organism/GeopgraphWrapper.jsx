import { Flex, Slider, theme } from "antd";
import Geograph from "../molecules/Geograph";
import Text from "../../common/Text";
const { useToken } = theme;

const GeopgraphWrapper = () => {
  const { token } = useToken();
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
          background: token.colorInfoBg,
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
            <Text text="New York" />
            <Text text="72K" />
          </Flex>
          <Slider defaultValue={80} disabled />
        </Flex>

        <Flex
          style={{
            flexDirection: "column",
          }}
        >
          <Flex justify="space-between" align="center">
            <Text text="San Fransisco" />
            <Text text="39K" />
          </Flex>
          <Slider defaultValue={40} disabled />
        </Flex>

        <Flex
          style={{
            flexDirection: "column",
          }}
        >
          <Flex justify="space-between" align="center">
            <Text text="Sydney" />
            <Text text="25K" />
          </Flex>
          <Slider defaultValue={50} disabled />
        </Flex>

        <Flex
          style={{
            flexDirection: "column",
          }}
        >
          <Flex justify="space-between" align="center">
            <Text text="Singapore" />
            <Text text="61K" />
          </Flex>
          <Slider defaultValue={60} disabled />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default GeopgraphWrapper;
