import { Flex } from "antd";
import LineGraph from "../molecules/LineGraph";
import { theme } from "antd";
import Text from "../../common/Text";
const { useToken } = theme;

const LineGraphWrapper = () => {
  const { token } = useToken();
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
          background: token.colorInfoBg,
        }}
        align="center"
      >
        <Text text="Revenue" fontSize="14px" fontWeight="bold" />
        <span
          style={{
            margin: "0 20px",
            color: token.colorTextDisabled,
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
                background: token?.customColors?.lineFill,
              }}
            ></span>
            <Text text="Current Week $58,211" />
          </Flex>
          <Flex align="center" gap="small">
            <span
              className="dot"
              style={{
                background: token?.customColors?.barPrimary,
              }}
            ></span>
            <Text text="Previous Week $68,768" />
          </Flex>
        </Flex>
      </Flex>

      <LineGraph />
    </Flex>
  );
};
export default LineGraphWrapper;
