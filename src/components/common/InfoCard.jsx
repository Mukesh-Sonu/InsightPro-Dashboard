import React from "react";
import { Card, Typography, Flex, theme } from "antd";
const { Title, Text } = Typography;
import { PiTrendDownFill, PiTrendUpFill } from "react-icons/pi";
const { useToken } = theme;

const InfoCard = ({ title, value, percentageValue, backgroundColor }) => {
  const { token } = useToken();
  return (
    <div>
      <Card
        style={{
          backgroundColor,
          borderRadius: "16px",
        }}
      >
        <p
          style={{
            textAlign: "left",
          }}
        >
          {title}
        </p>
        <Flex align="center" justify="space-between">
          <Title level={3}>{value}</Title>
          <Flex align="center" gap="small">
            <Text
              style={{
                fontSize: "12px",
                color: token.colorTextSecondary,
              }}
            >
              {percentageValue}
            </Text>
            {percentageValue >= 0 ? (
              <PiTrendUpFill />
            ) : (
              <PiTrendDownFill
                style={{
                  transform: `rotate(0deg) scaleX(-1)`,
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