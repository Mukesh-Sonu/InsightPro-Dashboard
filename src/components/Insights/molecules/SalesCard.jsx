import { useEffect, useState } from "react";
import { AgCharts } from "ag-charts-react";
import { getSalesCardData } from "../../common/utils";
import { theme } from "antd";
import { FONT_FAMILY } from "../../common/constants";
const { useToken } = theme;

const initialData = ({ colorTextHeading, colorInfoBg, customColors }) => {
  return {
    data: getSalesCardData(),
    title: {
      text: "Total Sales",
      textAlign: "left",
      fontSize: 14,
      fontWeight: "bold",
      color: colorTextHeading,
      fontFamily: FONT_FAMILY,
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
        calloutLabel: {
          enabled: false,
        },
      },
    ],
    height: 200,
    background: { fill: colorInfoBg },
  };
};

const SalesCard = () => {
  const { token } = useToken();
  const [options, setOptions] = useState(() => initialData(token));

  useEffect(() => {
    setOptions(initialData(token));
  }, [token]);

  return <AgCharts options={options} />;
};

export default SalesCard;
