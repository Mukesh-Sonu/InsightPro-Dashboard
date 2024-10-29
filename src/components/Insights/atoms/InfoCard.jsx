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
}) => {
  return (
    <div>
      <Card
        style={{
          backgroundColor,
          borderRadius: "16px",
          cursor: onClick ? "pointer" : "default",
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
            level={3}
            style={{
              color,
            }}
          >
            {value}
          </Title>
          <Flex align="center" gap="small">
            <Text
              style={{
                fontSize: "12px",
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
      </Card>
    </div>
  );
};

export default InfoCard;
