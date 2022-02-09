import React from "react";
import FusionCharts from "fusioncharts";
import ReactFC from "react-fusioncharts";
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import Charts from "fusioncharts/fusioncharts.charts";

ReactFC.fcRoot(FusionCharts, Charts, CandyTheme);

const Doughnut2d = ({ data }) => {
  const chartConfigs = {
    type: "doughnut2d",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Stars Per Language",
        theme: "candy",
        decimals: 0,
        pieRadius: "40%",
        bgColor: "#476072",
        showPercentValues: 0,
        xAxisNameFontColor: "#EEEEEE",
        labelFontColor: "#EEEEEE",
        yAxisNameFontColor: "#EEEEEE",
        yAxisValueFontColor: "#EEEEEE",
        captionFontColor: "#EEEEEE",
        paletteColors: "#EBE645, #BAABDA, #CDDEFF, #7900FF, #FFFCDC",
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Doughnut2d;
