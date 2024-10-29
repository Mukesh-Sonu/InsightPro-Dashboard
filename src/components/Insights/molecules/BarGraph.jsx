import { useState } from "react";
import { theme } from "antd";
import { AgCharts } from "ag-charts-react";
const { useToken } = theme;
import { getBarGraphData } from "../../common/utils";
import { FONT_FAMILY } from "../../common/constants";

const BarGraph = () => {
  const { token } = useToken();
  const [options] = useState({
    title: {
      text: "Projections vs Actuals",
      textAlign: "left",
      fontFamily: FONT_FAMILY,
      fontSize: 14,
    },
    subtitle: {
      text: "",
    },
    legend: {
      enabled: false,
    },
    data: getBarGraphData(),
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
          fontFamily: FONT_FAMILY,
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
          fontFamily: FONT_FAMILY,
        },
        paddingInner: 0.7,
        paddingOuter: 0.3,
      },
    ],
  });

  return <AgCharts options={options} />;
};

export default BarGraph;
