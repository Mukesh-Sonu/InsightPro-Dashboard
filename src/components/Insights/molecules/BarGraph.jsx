import { useEffect, useState } from "react";
import { theme } from "antd";
import { AgCharts } from "ag-charts-react";
const { useToken } = theme;
import { getBarGraphData } from "../../common/utils";
import { FONT_FAMILY } from "../../common/constants";

const initialData = ({ colorTextHeading, colorInfoBg, customColors }) => {
  return {
    title: {
      text: "Projections vs Actuals",
      textAlign: "left",
      fontFamily: FONT_FAMILY,
      fontSize: 14,
      color: colorTextHeading,
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
        fill: customColors.barPrimary,
      },
      {
        type: "bar",
        xKey: "monthX",
        yKey: "projection",
        stacked: true,
        tooltip: false,
        cornerRadius: 3,
        fill: customColors.barSecondary,
      },
    ],
    height: 230,
    background: {
      fill: colorInfoBg,
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
          color: customColors.barTextColor,
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
          color: customColors.barTextColor,
          fontFamily: FONT_FAMILY,
        },
        paddingInner: 0.7,
        paddingOuter: 0.3,
      },
    ],
  };
};

const BarGraph = () => {
  const { token } = useToken();
  const [options, setOptions] = useState(() => initialData(token));

  useEffect(() => {
    setOptions(initialData(token));
  }, [token]);

  return <AgCharts options={options} />;
};

export default BarGraph;
