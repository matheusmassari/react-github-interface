import React from "react";
import FusionCharts from "fusioncharts";
import ReactFC from "react-fusioncharts";
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import Charts from "fusioncharts/fusioncharts.charts";

ReactFC.fcRoot(FusionCharts, Charts, CandyTheme);

const Pie3D = ({ data }) => {
  const chartConfigs = {
    type: "pie3d",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Languages",
        theme: "candy",
        decimals: 0,
        pieRadius: "40%",
        bgColor: "#476072",
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

export default Pie3D;
