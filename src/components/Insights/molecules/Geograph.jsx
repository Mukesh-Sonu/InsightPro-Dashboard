import { useEffect, useState } from "react";
import { AgCharts } from "ag-charts-react";
import { FONT_FAMILY } from "../../common/constants";
import topology from "../../common/topology";
import { theme } from "antd";
const { useToken } = theme;

const intitalData = ({ colorTextHeading, colorInfoBg, customColors }) => {
  return {
    title: {
      text: "Revenue by Location",
      fontSize: 14,
      fontWeight: "bold",
      fontFamily: FONT_FAMILY,
      color: colorTextHeading,
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
        fill: customColors.mapBg,
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
        stroke: customColors.mapStroke,
        fill: customColors.mapFill,
        showInLegend: false,
        highlightStyle: {
          stroke: "orange",
        },
      },
    ],
    background: { fill: colorInfoBg },
    height: 200,
  };
};

const Geograph = () => {
  const { token } = useToken();
  const [options, setOptions] = useState(() => intitalData(token));

  useEffect(() => {
    setOptions(intitalData(token));
  }, [token.colorInfoBg]);

  return <AgCharts options={options} />;
};

export default Geograph;
