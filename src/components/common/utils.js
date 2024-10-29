const lightTheme = {
  colorPrimary: "#f4f4f4",
  colorSecondary: "#bbbbbb",
  textDisabled: "#D2D2D2",
  colorBgBase: "#ffffff",
  colorTextBase: "#000000",
  colorBorderBg: "#E8E8E8",
  colorTextHeading: "#1c1c1c",
  defaultPrimaryTextHeading: "#000000",
  colorInfoBg: "#F8F9FB",
  customColors: {
    mapBg: "#CFDFEB",
    mapStroke: "#FFFFFF",
    mapFill: "#1C1C1C",
    barPrimary: "#A8C5DA",
    barSecondary: "#CFDFEB",
    barTextColor: "#C1C2C3",
    lineFill: "#1C1C1C",
  },
};

const darkTheme = {
  colorPrimary: "#333333",
  colorSecondary: "#777777",
  textDisabled: "#494949",
  colorBgBase: "#1C1C1C",
  colorTextBase: "#ffffff",
  colorBorderBg: "#333333",
  colorTextHeading: "#ffffff",
  defaultPrimaryTextHeading: "#000000",
  colorInfoBg: "#282828",
  customColors: {
    mapBg: "#687681",
    mapStroke: "#FFFFFF",
    mapFill: "#C6C7F8",
    barPrimary: "#A8C5DA",
    barSecondary: "#687681",
    barTextColor: "#7E7E7E",
    lineFill: "#C6C7F8",
  },
};

export const getAppTheme = (theme) => ({
  token: theme === "light" ? lightTheme : darkTheme,
  components: {
    Menu: {
      itemHeight: "28px",
      itemSelectedColor: theme === "light" ? "#1C1C1C" : "#FFFFFF",
      itemSelectedBg: theme === "light" ? "#F4F4F4" : "#333333",
    },
    List: {
      itemPadding: "0px",
      titleMarginBottom: "1px",
      metaMarginBottom: "0px",
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
});

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
