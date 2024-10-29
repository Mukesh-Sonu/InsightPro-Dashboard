import { Row, Col } from "antd";
import "ag-charts-enterprise";
import DataTable from "./organism/DataTable";
import BarGraph from "./molecules/BarGraph";
import AnalyticsCard from "./organism/AnalyticsCard";
import SalesCardWrapper from "./organism/SalesCardWrapper";
import LineGraphWrapper from "./organism/LineGraphWrapper";
import GeopgraphWrapper from "./organism/GeopgraphWrapper";

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
  return (
    <>
      <Row gutter={[20, 16]}>
        <Col span={12}>
          <AnalyticsCard />
        </Col>
        <Col span={12}>
          <Container>
            <BarGraph />
          </Container>
        </Col>
        <Col span={18}>
          <Container>
            <LineGraphWrapper />
          </Container>
        </Col>
        <Col span={6}>
          <Container>
            <GeopgraphWrapper />
          </Container>
        </Col>
        <Col span={18}>
          <Container>
            <DataTable />
          </Container>
        </Col>
        <Col span={6}>
          <Container>
            <SalesCardWrapper />
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default InsightsDashboard;
