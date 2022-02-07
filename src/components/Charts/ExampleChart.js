import React from "react";
import FusionCharts from "fusioncharts";
// import Maps from "fusioncharts/fusioncharts.maps";
// import World from "fusioncharts/maps/fusioncharts.world";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import Charts from "fusioncharts/fusioncharts.charts";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ExampleChart = ({ data }) => {

const chartConfigs = {
  type: "doughnut3d",
  width: 365,
  height: 400,
  dataFormat: "json",
  dataSource: data,
};
  return <ReactFC {...chartConfigs} />;
};

export default ExampleChart;
