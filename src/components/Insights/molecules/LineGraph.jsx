import { useEffect, useState } from "react";
import { AgCharts } from "ag-charts-react";
import { getLineGraphData } from "../../common/utils";
import { FONT_FAMILY } from "../../common/constants";
import { theme } from "antd";
const { useToken } = theme;

const initialData = ({ colorTextHeading, colorInfoBg, customColors }) => {
  return {
    title: {
      text: "Revenue",
      fontSize: 14,
      fontWeight: "bold",
      fontFamily: FONT_FAMILY,
      color: colorTextHeading,
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
          color: customColors?.lineFill,
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
        stroke: customColors?.lineFill,
        fill: customColors?.lineFill,
        strokeWidth: 3,
        data: getLineGraphData().slice(0, 4),
        marker: { enabled: false, stroke: customColors?.lineFill },
        interpolation: { type: "smooth" },
        borderRadius: 10,
      },
      {
        type: "line",
        xKey: "monthX",
        yKey: "actual",
        stroke: customColors?.lineFill,
        fill: customColors?.lineFill,
        strokeWidth: 3,
        lineDash: [7],
        data: getLineGraphData().slice(3, 7),
        marker: { enabled: false, stroke: customColors?.lineFill },
        interpolation: { type: "smooth" },
        borderRadius: 10,
        showInLegend: false,
      },
      {
        type: "line",
        xKey: "monthX",
        yKey: "projection",
        stroke: customColors?.barPrimary,
        fill: customColors?.barPrimary,
        strokeWidth: 3,
        marker: { enabled: false },
        interpolation: { type: "smooth", stroke: customColors?.barPrimary },
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
    background: { fill: colorInfoBg },
  };
};

const LineGraph = () => {
  const { token } = useToken();
  const [options, setOptions] = useState(() => initialData(token));

  useEffect(() => {
    setOptions(initialData(token));
  }, [token]);

  return <AgCharts options={options} />;
};

export default LineGraph;
