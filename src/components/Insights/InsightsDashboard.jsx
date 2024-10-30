import { Row, Col, theme } from "antd";
import "ag-charts-enterprise";
import DataTable from "./organism/DataTable";
import BarGraph from "./molecules/BarGraph";
import AnalyticsCard from "./organism/AnalyticsCard";
import SalesCardWrapper from "./organism/SalesCardWrapper";
import LineGraphWrapper from "./organism/LineGraphWrapper";
import GeopgraphWrapper from "./organism/GeopgraphWrapper";
const { useToken } = theme;

const Container = ({ children }) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

const InsightsDashboard = () => {
  const { token } = useToken();
  return (
    <>
      <Row
        gutter={[20, 16]}
        style={{
          background: token.colorBgBase,
        }}
      >
        <Col xs={24} sm={24} md={12}>
          <AnalyticsCard />
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Container>
            <BarGraph />
          </Container>
        </Col>
        <Col xs={24} sm={24} md={18}>
          <Container>
            <LineGraphWrapper />
          </Container>
        </Col>
        <Col xs={24} sm={24} md={6}>
          <Container>
            <GeopgraphWrapper />
          </Container>
        </Col>
        <Col xs={24} sm={24} md={18}>
          <Container>
            <DataTable />
          </Container>
        </Col>
        <Col xs={24} sm={24} md={6}>
          <Container>
            <SalesCardWrapper />
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default InsightsDashboard;
