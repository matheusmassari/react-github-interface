import React from "react";
import FusionCharts from "fusioncharts";
// import Maps from "fusioncharts/fusioncharts.maps";
// import World from "fusioncharts/maps/fusioncharts.world";
import ReactFC from "react-fusioncharts";
// import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
// import ZuneTheme from "fusioncharts/themes/fusioncharts.theme.zune";
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import Charts from "fusioncharts/fusioncharts.charts";

ReactFC.fcRoot(FusionCharts, Charts, CandyTheme);

const Pie3D = ({ data }) => {
  const chartConfigs = {
    type: "pie3d",
    width: 500,
    height: 400,
    dataFormat: "json",
    dataSource: data,
  };
  return <ReactFC {...chartConfigs} />;
};

export default Pie3D;
