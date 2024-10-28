import { useState } from "react";
import { Row, Col, theme } from "antd";
import { AgCharts } from "ag-charts-react";
import InfoCard from "../common/InfoCard";
const { useToken } = theme;

const fontFamily =
  "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue";

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
    { monthX: "Jan", projection: 10, actual: 14 },
    { monthX: "Feb", projection: 19, actual: 10 },
    { monthX: "Mar", projection: 17, actual: 12 },
    { monthX: "Apr", projection: 11, actual: 18 },
    { monthX: "May", projection: 13, actual: 21 },
    { monthX: "Jun", projection: 25, actual: 21 },
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
      fontFamily,
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
        // yName: "Actual",
        stacked: true,
        tooltip: false,
        cornerRadius: 3,
        fill: "#A8C5DA",
      },
      {
        type: "bar",
        xKey: "monthX",
        yKey: "projection",
        // yName: "valueY",
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
    axes: [
      {
        type: "number",
        position: "left",
        label: {
          formatter: (params) => {
            const value = Math.round(params.value);
            return value > 0 ? value + "M" : value;
          },
          color: token.colorTextDisabled,
          fontFamily,
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
          fontFamily,
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
      text: "Revenue",
      fontSize: 18,
      fontWeight: "bold",
      fontFamily,
      color: "#2e2e2e",
      textAlign: "left",
    },
    subtitle: {
      text: "",
    },
    legend: {
      enabled: true,
      reverseOrder: true,
      position: "top",
      item: {
        showSeriesStroke: false,
        label: {
          fontSize: 14,
          fontFamily,
          maxLength: 30,
          color: "#1C1C1C",
          formatter: ({ value }) => {
            console.log(value);
            return value == "actual"
              ? "Current Week $58, 211"
              : "Previous Week  $68,768";
          },
        },
        marker: {
          size: 5,
          strokeWidth: 1,
          shape: "circle",
        },
      },
    },
    data: getChartData(),
    series: [
      {
        type: "line",
        xKey: "monthX",
        yKey: "actual",
        stroke: "#1C1C1C",
        strokeWidth: 3,
        data: getChartData().slice(0, 4),
        marker: { enabled: false },
        interpolation: { type: "smooth" },
        borderRadius: 10,
      },
      {
        type: "line",
        xKey: "monthX",
        yKey: "actual",
        stroke: "#1C1C1C",
        strokeWidth: 3,
        lineDash: [7],
        data: getChartData().slice(3, 7),
        marker: { enabled: false },
        interpolation: { type: "smooth" },
        borderRadius: 10,
        showInLegend: false,
      },
      {
        type: "line",
        xKey: "monthX",
        yKey: "projection",
        stroke: "#A8C5DA",
        strokeWidth: 3,
        marker: { enabled: false },
        interpolation: { type: "smooth" },
      },
    ],
    axes: [
      {
        type: "number",
        position: "left",
        label: {
          color: "#8c8c8c",
          formatter: (params) => {
            const value = Math.round(params.value);
            return value > 0 ? value + "M" : value;
          },
          fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue",
        },
        min: 0,
        max: 30,
        tick: { count: 4 },
        line: {
          width: 0,
        },
        interval: {
          step: 10,
        },
      },
      {
        type: "category",
        position: "bottom",
        label: {
          color: "#8c8c8c",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue",
        },
        line: {
          width: 0,
        },
      },
    ],
    height: 350,
    background: { fill: "#F7F9FB" },
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
        <Col span={16}>
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
