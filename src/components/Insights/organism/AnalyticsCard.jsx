import { useNavigate } from "react-router-dom";
import { Row, Col } from "antd";
import InfoCard from "../atoms/InfoCard";

const AnalyticsCard = () => {
  const navigate = useNavigate();

  return (
    <Row gutter={[24, 24]}>
      <Col span={12}>
        <InfoCard
          title="Customers"
          value="3,781"
          percentageValue="+11.01"
          backgroundColor="#E3F5FF"
        />
      </Col>
      <Col span={12}>
        <InfoCard
          onClick={() => navigate("/orders")}
          title="Orders"
          value="1,219"
          percentageValue="-0.03"
          backgroundColor="#F7F9FB"
        />
      </Col>
      <Col span={12}>
        <InfoCard
          title="Revenue"
          value="$695"
          percentageValue="+15.03"
          backgroundColor="#F7F9FB"
        />
      </Col>
      <Col span={12}>
        <InfoCard
          title="Growth"
          value="30.1"
          percentageValue="+6.08"
          backgroundColor="#E5ECF6"
        />
      </Col>
    </Row>
  );
};

export default AnalyticsCard;
