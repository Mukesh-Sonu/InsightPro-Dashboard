import { useState } from "react";
import { Row, Col, theme, Flex, Slider } from "antd";
import { AgCharts } from "ag-charts-react";
import InfoCard from "../common/InfoCard";
import topology from "./topology";
import "ag-charts-enterprise";
import DataTable from "./DataTable/DataTable";
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
    { monthX: "Jan", projection: 11, actual: 14 },
    { monthX: "Feb", projection: 19, actual: 10 },
    { monthX: "Mar", projection: 17, actual: 12 },
    { monthX: "Apr", projection: 13, actual: 18 },
    { monthX: "May", projection: 16, actual: 22 },
    { monthX: "Jun", projection: 25, actual: 21 },
  ];
}
export function getSalesData() {
  return [
    { asset: "Direct", amount: 600 },
    { asset: "Affilliate", amount: 400 },
    { asset: "Sponsored", amount: 100 },
    { asset: "E-mail", amount: 300 },
  ];
}

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

const BarGraph = () => {
  const { token } = useToken();
  const [options, setOptions] = useState({
    title: {
      text: "Projections vs Actuals",
      textAlign: "left",
      fontFamily,
      fontSize: 14,
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
        stacked: true,
        tooltip: false,
        cornerRadius: 3,
        fill: "#A8C5DA",
      },
      {
        type: "bar",
        xKey: "monthX",
        yKey: "projection",
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

const LineGraph = () => {
  const { token } = useToken();
  const [options, setOptions] = useState({
    title: {
      text: "Revenue",
      fontSize: 14,
      fontWeight: "bold",
      fontFamily,
      color: "#2e2e2e",
      textAlign: "left",
      enabled: false,
    },
    subtitle: {
      text: "",
    },
    legend: {
      // enabled: true,
      enabled: false,
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
        fill: "#1C1C1C",
        strokeWidth: 3,
        data: getChartData().slice(0, 4),
        marker: { enabled: false, stroke: "#1C1C1C" },
        interpolation: { type: "smooth" },
        borderRadius: 10,
      },
      {
        type: "line",
        xKey: "monthX",
        yKey: "actual",
        stroke: "#1C1C1C",
        fill: "#1C1C1C",
        strokeWidth: 3,
        lineDash: [7],
        data: getChartData().slice(3, 7),
        marker: { enabled: false, stroke: "#1C1C1C" },
        interpolation: { type: "smooth" },
        borderRadius: 10,
        showInLegend: false,
      },
      {
        type: "line",
        xKey: "monthX",
        yKey: "projection",
        stroke: "#A8C5DA",
        fill: "#A8C5DA",
        strokeWidth: 3,
        marker: { enabled: false },
        interpolation: { type: "smooth", stroke: "#A8C5DA" },
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
    height: 310,
    background: { fill: "#F7F9FB" },
  });

  return <AgCharts options={options} />;
};

const Map = () => {
  const [options, setOptions] = useState({
    title: {
      text: "Revenue by Location",
      fontSize: 14,
      fontWeight: "bold",
      fontFamily,
      color: "#2e2e2e",
      textAlign: "left",
    },
    padding: {
      top: 10,
      // right: 0,
      // bottom: 0,
      // left: 0,
    },
    topology,
    series: [
      {
        type: "map-shape-background",
        topology,
      },
      {
        type: "map-marker",
        topology,
        data: [
          // ...europeData,
          // ...asiaData,
          // ...africaData,
          // ...northAmericaData,
          // ...southAmericaData,
          // ...oceaniaData,
          {
            pop_est: 37589262,
            pop_rank: 15,
            gdp_md: 1736425,
            iso2: "CA",
            iso3: "CAN",
            name: "Canada",
          },
          {
            pop_est: 25364307,
            pop_rank: 15,
            gdp_md: 1396567,
            iso2: "AU",
            iso3: "AUS",
            name: "Australia",
          },
          {
            pop_est: 5997,
            pop_rank: 5,
            gdp_md: 215,
            iso2: "PM",
            iso3: "SPM",
            name: "Saint Pierre and Miquelon",
          },
          {
            pop_est: 270625568,
            pop_rank: 17,
            gdp_md: 1119190,
            iso2: "ID",
            iso3: "IDN",
            name: "Indonesia",
          },
        ],
        title: "Population",
        idKey: "name",
        idName: "Country",
        sizeKey: "pop_est",
        sizeName: "Population Estimate",
        topologyIdKey: "NAME_ENGL",
        size: 10,
        maxSize: 10,
        strokeWidth: 2,
        fillOpacity: 0.8,
        // labelKey: "name",
        stroke: "white",
        fill: "#1C1C1C",
        showInLegend: false,
        highlightStyle: {
          stroke: "orange",
        },
      },
    ],
    background: { fill: "#F7F9FB" },
    height: 200,
  });

  return <AgCharts options={options} />;
};

const SalesCard = () => {
  const [options, setOptions] = useState({
    data: getSalesData(),
    title: {
      text: "Total Sales",
      textAlign: "left",
      fontSize: 14,
    },
    padding: {
      top: 10,
      bottom: 0,
      left: 20,
      right: 20,
    },
    series: [
      {
        type: "donut",
        calloutLabelKey: "asset",
        angleKey: "amount",
        innerRadiusRatio: 0.7,
        showInLegend: false,
        cornerRadius: 2,
        sectorSpacing: 3,
        fills: ["#1C1C1C", "#BAEDBD", "#B1E3FF", "#95A4FC"],
        // sectorLabel: {
        //   enabled: false,
        // },
        calloutLabel: {
          enabled: false,
        },
      },
    ],
    height: 200,
    background: { fill: "#F7F9FB" },
  });

  return <AgCharts options={options} />;
};

const CountryInsights = () => {
  return (
    <Flex
      style={{
        flexDirection: "column",
      }}
    >
      <Map />

      <Flex
        className="display-range"
        style={{
          flexDirection: "column",
          background: "#F7F9FB",
          padding: "0 10px",
          paddingBottom: 10,
        }}
        gap="small"
      >
        <Flex
          style={{
            flexDirection: "column",
          }}
        >
          <Flex justify="space-between" align="center">
            <p>New York</p>
            <p>72K</p>
          </Flex>
          <Slider defaultValue={80} disabled />
        </Flex>

        <Flex
          style={{
            flexDirection: "column",
          }}
        >
          <Flex justify="space-between" align="center">
            <p>San Fransisco</p>
            <p>39K</p>
          </Flex>
          <Slider defaultValue={40} disabled />
        </Flex>

        <Flex
          style={{
            flexDirection: "column",
          }}
        >
          <Flex justify="space-between" align="center">
            <p>Sydney</p>
            <p>25K</p>
          </Flex>
          <Slider defaultValue={50} disabled />
        </Flex>

        <Flex
          style={{
            flexDirection: "column",
          }}
        >
          <Flex justify="space-between" align="center">
            <p>Singapore</p>
            <p>61K</p>
          </Flex>
          <Slider defaultValue={60} disabled />
        </Flex>
      </Flex>
    </Flex>
  );
};

const LineGraphWrapper = () => {
  return (
    <Flex
      style={{
        flexDirection: "column",
      }}
    >
      <Flex
        style={{
          padding: "20px",
          paddingBottom: 0,
          background: "#F7F9FB",
        }}
        align="center"
      >
        <p
          style={{
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Revenue
        </p>
        <span
          style={{
            margin: "0 20px",
          }}
        >
          {" "}
          |
        </span>

        <Flex gap={30}>
          <Flex align="center" gap="small">
            <span
              className="dot"
              style={{
                background: "#A8C5DA",
              }}
            ></span>
            <p>Current Week $58,211</p>
          </Flex>
          <Flex align="center" gap="small">
            <span
              className="dot"
              style={{
                background: "#1C1C1C",
              }}
            ></span>
            <p>Previous Week $68,768</p>
          </Flex>
        </Flex>
      </Flex>

      <LineGraph />
    </Flex>
  );
};

const SalesWrapper = () => {
  return (
    <div>
      <SalesCard />
      <Flex
        style={{
          flexDirection: "column",
          background: "#F7F9FB",
          padding: "20px",
          gap: 8,
        }}
      >
        <Flex justify="space-between">
          <Flex align="center" gap="small">
            <span
              className="dot"
              style={{
                background: "#1C1C1C",
              }}
            ></span>
            <p>Direct</p>
          </Flex>
          <p>$300.56</p>
        </Flex>
        <Flex justify="space-between">
          <Flex align="center" gap="small">
            <span
              className="dot"
              style={{
                background: "#BAEDBD",
              }}
            ></span>
            <p>Affiliate</p>
          </Flex>
          <p>$135.18</p>
        </Flex>
        <Flex justify="space-between">
          <Flex align="center" gap="small">
            <span
              className="dot"
              style={{
                background: "#A8C5DA",
              }}
            ></span>
            <p>Sponsored</p>
          </Flex>
          <p>$154.02</p>
        </Flex>
        <Flex justify="space-between">
          <Flex align="center" gap="small">
            <span
              className="dot"
              style={{
                background: "#A8C5DA",
              }}
            ></span>
            <p>Email</p>
          </Flex>
          <p>$48.96</p>
        </Flex>
      </Flex>
    </div>
  );
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
            <CountryInsights />
          </Container>
        </Col>
        <Col span={18}>
          <Container>
            <DataTable />
          </Container>
        </Col>
        <Col span={6}>
          <Container>
            <SalesWrapper />
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default InsightsDashboard;
