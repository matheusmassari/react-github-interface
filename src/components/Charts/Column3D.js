import React from "react";
import FusionCharts from "fusioncharts";
import ReactFC from "react-fusioncharts";
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import Charts from "fusioncharts/fusioncharts.charts";

ReactFC.fcRoot(FusionCharts, Charts, CandyTheme);

const Column3D = ({ data }) => {
  const chartConfigs = {
    type: "column3d",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Popular",
        yAxisName: "Stars",
        xAxisName: "Repos",
        xAxisNameFontSize: "16px",
        xAxisNameFontColor: "#EEEEEE",
        labelFontColor: "#EEEEEE",
        yAxisNameFontColor: "#EEEEEE",
        yAxisValueFontColor: "#EEEEEE",
        captionFontColor: "#EEEEEE",
        bgColor: "#476072",
        canvasBgColor: "#476072",
        canvasBaseColor: "#476072",
        valueFontColor: "#EEEEEE",
        paletteColors: "#EBE645,#7900FF,#CDDEFF,#BAABDA,#FFFCDC",
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Column3D;
