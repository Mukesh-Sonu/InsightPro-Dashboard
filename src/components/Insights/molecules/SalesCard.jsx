import { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { getSalesCardData } from "../../common/utils";

const SalesCard = () => {
  const [options] = useState({
    data: getSalesCardData(),
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

export default SalesCard;
