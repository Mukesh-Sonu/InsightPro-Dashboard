import { useNavigate } from "react-router-dom";
import { Row, Col, theme } from "antd";
import InfoCard from "../atoms/InfoCard";
const { useToken } = theme;

const AnalyticsCard = () => {
  const navigate = useNavigate();
  const { token } = useToken();

  return (
    <Row
      gutter={[24, 24]}
      style={{
        background: token.colorBgBase,
      }}
    >
      <Col span={12}>
        <InfoCard
          title="Customers"
          value="3,781"
          percentageValue="+11.01"
          backgroundColor="#E3F5FF"
          color={token.defaultPrimaryTextHeading}
        />
      </Col>
      <Col span={12}>
        <InfoCard
          onClick={() => navigate("/orders")}
          title="Orders"
          value="1,219"
          percentageValue="-0.03"
          backgroundColor={token.colorInfoBg}
        />
      </Col>
      <Col span={12}>
        <InfoCard
          title="Revenue"
          value="$695"
          percentageValue="+15.03"
          backgroundColor={token.colorInfoBg}
        />
      </Col>
      <Col span={12}>
        <InfoCard
          title="Growth"
          value="30.1"
          percentageValue="+6.08"
          backgroundColor="#E5ECF6"
          color={token.defaultPrimaryTextHeading}
        />
      </Col>
    </Row>
  );
};

export default AnalyticsCard;
