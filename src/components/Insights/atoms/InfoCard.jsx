/* eslint-disable react/prop-types */
import { Card, Typography, Flex, theme } from "antd";
const { Title, Text } = Typography;
import { PiTrendDownFill, PiTrendUpFill } from "react-icons/pi";

const InfoCard = ({
  title,
  value,
  percentageValue,
  backgroundColor,
  onClick,
  color,
  padding,
  valueSize,
  percentSize,
}) => {
  return (
    <div
      style={{
        backgroundColor,
        borderRadius: "16px",
        cursor: onClick ? "pointer" : "default",
        padding,
      }}
      onClick={onClick ? onClick : () => {}}
    >
      <p
        style={{
          textAlign: "left",
          color,
        }}
      >
        {title}
      </p>
      <Flex align="center" justify="space-between">
        <Title
          level={valueSize}
          style={{
            color,
          }}
        >
          {value}
        </Title>
        <Flex align="center" gap="small">
          <Text
            style={{
              fontSize: percentSize,
              color,
            }}
          >
            {percentageValue}%
          </Text>
          {percentageValue >= 0 ? (
            <PiTrendUpFill
              style={{
                color,
              }}
            />
          ) : (
            <PiTrendDownFill
              style={{
                transform: `rotate(0deg) scaleX(-1)`,
                color,
              }}
            />
          )}
        </Flex>
      </Flex>
    </div>
  );
};

export default InfoCard;
