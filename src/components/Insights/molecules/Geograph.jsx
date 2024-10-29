import { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { FONT_FAMILY } from "../../common/constants";
import topology from "../../common/topology";

const Geograph = () => {
  const [options] = useState({
    title: {
      text: "Revenue by Location",
      fontSize: 14,
      fontWeight: "bold",
      fontFamily: FONT_FAMILY,
      color: "#2e2e2e",
      textAlign: "left",
    },
    padding: {
      top: 10,
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

export default Geograph;
