import { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { getLineGraphData } from "../../common/utils";
import { FONT_FAMILY } from "../../common/constants";

const LineGraph = () => {
  const [options] = useState({
    title: {
      text: "Revenue",
      fontSize: 14,
      fontWeight: "bold",
      fontFamily: FONT_FAMILY,
      color: "#2e2e2e",
      textAlign: "left",
      enabled: false,
    },
    subtitle: {
      text: "",
    },
    legend: {
      enabled: false,
      position: "top",
      item: {
        showSeriesStroke: false,
        label: {
          fontSize: 14,
          fontFamily: FONT_FAMILY,
          maxLength: 30,
          color: "#1C1C1C",
          formatter: ({ value }) => {
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
    data: getLineGraphData(),
    series: [
      {
        type: "line",
        xKey: "monthX",
        yKey: "actual",
        stroke: "#1C1C1C",
        fill: "#1C1C1C",
        strokeWidth: 3,
        data: getLineGraphData().slice(0, 4),
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
        data: getLineGraphData().slice(3, 7),
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
          fontFamily: FONT_FAMILY,
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
          fontFamily: FONT_FAMILY,
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

export default LineGraph;
