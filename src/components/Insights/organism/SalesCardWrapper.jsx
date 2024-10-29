import SalesCard from "../molecules/SalesCard";
import { Flex } from "antd";
import { theme } from "antd";
import Text from "../../common/Text";
const { useToken } = theme;

const revenueData = [
  { label: "Direct", amount: "$300.56", color: "#1C1C1C" },
  { label: "Affiliate", amount: "$135.18", color: "#BAEDBD" },
  { label: "Sponsored", amount: "$154.02", color: "#A8C5DA" },
  { label: "Email", amount: "$48.96", color: "#A8C5DA" },
];

const RevenueItem = ({ label, amount, color }) => (
  <Flex justify="space-between">
    <Flex align="center" gap="small">
      <span className="dot" style={{ background: color }}></span>
      <Text text={label} />
    </Flex>
    <Text text={amount} />
  </Flex>
);

const SalesCardWrapper = () => {
  const { token } = useToken();
  return (
    <div>
      <SalesCard />
      <Flex
        vertical
        style={{
          background: token.colorInfoBg,
          padding: "20px",
          gap: 8,
        }}
      >
        {revenueData.map((item, index) => (
          <RevenueItem
            key={index}
            label={item.label}
            amount={item.amount}
            color={item.color}
          />
        ))}
      </Flex>
    </div>
  );
};

export default SalesCardWrapper;
