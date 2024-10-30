import { useNavigate } from "react-router-dom";
import { Row, Col, theme } from "antd";
import InfoCard from "../atoms/InfoCard";
import { useAppContext } from "../../../context/appContext";

const { useToken } = theme;

const AnalyticsCard = () => {
  const navigate = useNavigate();
  const { token } = useToken();
  const { isLgScreen, isSmScreen } = useAppContext();
  const padding = isSmScreen ? 10 : 24;
  const valueSize = !isLgScreen ? 5 : 3;
  const percentSize = !isLgScreen ? 12 : 10;

  const cardsData = [
    {
      title: "Customers",
      value: "3,781",
      percentageValue: "+11.01",
      backgroundColor: "#E3F5FF",
      color: token.defaultPrimaryTextHeading,
    },
    {
      title: "Orders",
      value: "1,219",
      percentageValue: "-0.03",
      backgroundColor: token.colorInfoBg,
      onClick: () => navigate("/orders"),
      color: token.colorTextHeading,
    },
    {
      title: "Revenue",
      value: "$695",
      percentageValue: "+15.03",
      backgroundColor: token.colorInfoBg,
      color: token.colorTextHeading,
    },
    {
      title: "Growth",
      value: "30.1",
      percentageValue: "+6.08",
      backgroundColor: "#E5ECF6",
      color: token.defaultPrimaryTextHeading,
    },
  ];

  const renderInfoCard = ({
    title,
    value,
    percentageValue,
    backgroundColor,
    color,
    onClick,
  }) => (
    <InfoCard
      title={title}
      valueSize={valueSize}
      percentSize={percentSize}
      value={value}
      percentageValue={percentageValue}
      backgroundColor={backgroundColor}
      color={color || token.defaultPrimaryTextHeading}
      padding={padding}
      onClick={onClick}
    />
  );

  return (
    <Row
      gutter={!isLgScreen ? [10, 10] : [24, 24]}
      style={{
        background: token.colorBgBase,
      }}
    >
      {cardsData.map((card, index) => (
        <Col key={index} span={12}>
          {renderInfoCard(card)}
        </Col>
      ))}
    </Row>
  );
};

export default AnalyticsCard;
