export const THEME_CONTEXT = {
  token: {
    colorPrimary: "#dee2e6",
  },
  components: {
    Menu: {
      itemHeight: "28px",
      itemSelectedColor: "#000000E0",
      itemSelectedBg: "rgba(0, 0, 0, 0.06)",
    },
    List: {
      itemPadding: "0px",
      titleMarginBottom: "1px",
      metaMarginBottom: "0px",
    },
    Steps: {
      navArrowColor: "pink",
    },
    Typography: {
      titleMarginBottom: 0,
    },
    Table: {
      headerColor: "#A0A1A2",
      rowHoverBg: "#F7F9FB",
      rowSelectedBg: "transparent",
      headerBg: "transparent",
      cellFontSizeSM: 12,
    },
  },
};

export const getBarGraphData = () => [
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

export const getLineGraphData = () => [
  { monthX: "Jan", projection: 11, actual: 14 },
  { monthX: "Feb", projection: 19, actual: 10 },
  { monthX: "Mar", projection: 17, actual: 12 },
  { monthX: "Apr", projection: 13, actual: 18 },
  { monthX: "May", projection: 16, actual: 22 },
  { monthX: "Jun", projection: 25, actual: 21 },
];

export const getSalesCardData = () => [
  { asset: "Direct", amount: 600 },
  { asset: "Affilliate", amount: 400 },
  { asset: "Sponsored", amount: 100 },
  { asset: "E-mail", amount: 300 },
];
