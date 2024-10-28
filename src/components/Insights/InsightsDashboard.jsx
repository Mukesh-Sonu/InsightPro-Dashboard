import { useState } from "react";
import { Row, Col, theme } from "antd";
import { AgCharts } from "ag-charts-react";
import InfoCard from "../common/InfoCard";
const { useToken } = theme;

function getData() {
  return [
    {
      monthX: "Jan",
      projection: 4,
      actual: 18,
    },
    {
      monthX: "Feb",
      projection: 4,
      actual: 21,
    },
    {
      monthX: "Mar",
      projection: 3,
      actual: 19,
    },
    {
      monthX: "Apr",
      projection: 6,
      actual: 23,
    },
    {
      monthX: "May",
      projection: 2,
      actual: 17,
    },
    {
      monthX: "Jun",
      projection: 4,
      actual: 21,
    },
  ];
}
function getChartData() {
  return [
    {
      monthX: "Jan",
      projection: 14,
      actual: 15,
    },
    {
      monthX: "Feb",
      projection: 19,
      actual: 10,
    },
    {
      monthX: "Mar",
      projection: 16,
      actual: 11,
    },
    {
      monthX: "Apr",
      projection: 13,
      actual: 19,
    },
    {
      monthX: "May",
      projection: 14,
      actual: 24,
    },
    {
      monthX: "Jun",
      projection: 25,
      actual: 26,
    },
    {
      monthX: "Aug",
      projection: 0,
      actual: 0,
    },
  ];
}

const AnalyticsGrid = () => {
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

const LineBarGrid = () => {
  const { token } = useToken();
  const [options, setOptions] = useState({
    title: {
      text: "Projections vs Actuals",
      textAlign: "left",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue",
    },
    subtitle: {
      text: "",
    },
    legend: {
      enabled: false,
    },
    data: getData(),
    series: [
      {
        type: "bar",
        xKey: "monthX",
        yKey: "actual",
        yName: "Actual",
        stacked: true,
        tooltip: false,
        cornerRadius: 3,
        fill: "#A8C5DA",
      },
      {
        type: "bar",
        xKey: "monthX",
        yKey: "projection",
        yName: "valueY",
        stacked: true,
        tooltip: false,
        cornerRadius: 3,
        fill: "#CFDFEB",
      },
    ],
    height: 230,
    background: {
      fill: "#F7F9FB",
    },
    seriesArea: {
      padding: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    },
    axes: [
      {
        type: "number",
        position: "left",
        label: {
          formatter: (params) => {
            return Math.round(params.value) + "M";
          },
          color: token.colorTextDisabled,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue",
        },
        interval: {
          step: 10,
        },
      },
      {
        type: "category",
        position: "bottom",
        label: {
          color: token.colorTextDisabled,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue",
        },
        paddingInner: 0.7,
        paddingOuter: 0.3,
      },
    ],
  });

  return <AgCharts options={options} />;
};

const ChartExample = () => {
  const { token } = useToken();
  const [options, setOptions] = useState({
    title: {
      text: "Projections vs Actuals",
      textAlign: "left",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue",
    },
    subtitle: {
      text: "",
    },
    legend: {
      enabled: false,
    },
    data: getChartData(),
    series: [
      {
        type: "line",
        xKey: "monthX",
        yKey: "actual",
        yName: "Actual",
        tooltip: false,
        stroke: "#1C1C1C",
        strokeWidth: 3,
        data: getChartData().slice(0, 4),
        marker: {
          enabled: false,
        },
        interpolation: {
          type: "smooth",
        },
      },
      {
        type: "line",
        xKey: "monthX",
        yKey: "actual",
        yName: "Actual",
        tooltip: false,
        stroke: "#1C1C1C",
        strokeWidth: 3,
        lineDash: [10],
        data: getChartData().slice(3, 7),
        interpolation: {
          type: "smooth",
        },
        marker: {
          enabled: false,
        },
      },
      {
        type: "line",
        xKey: "monthX",
        yKey: "projection",
        yName: "Projection",
        strokeWidth: 3,
        marker: {
          enabled: false,
        },
        stroke: "#A8C5DA",
        interpolation: {
          type: "smooth",
        },
      },
    ],
    height: 300,
    background: {
      fill: "#F7F9FB",
    },
    axes: [
      {
        type: "number",
        position: "left",
        label: {
          formatter: (params) => {
            return Math.round(params.value) + "M";
          },
          color: token.colorTextDisabled,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue",
        },
        interval: {
          step: 10,
          // values: [0, 10, 20],
        },
      },
      {
        type: "category",
        position: "bottom",
        label: {
          color: token.colorTextDisabled,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue",
        },
        paddingInner: 0.7,
        paddingOuter: 0.3,
      },
    ],
  });

  return <AgCharts options={options} />;
};

const InsightsDashboard = () => {
  return (
    <>
      {/* Four cards */}
      <Row gutter={[20, 16]}>
        <Col span={12}>
          <AnalyticsGrid />
        </Col>
        <Col span={12}>
          <div
            style={{
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <LineBarGrid />
          </div>
        </Col>
        <Col span={18}>
          <div
            style={{
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <ChartExample />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default InsightsDashboard;
