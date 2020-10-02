import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

const chartConfigs = {
    type: 'angulargauge',
    width: 500,
    height: 300,
    dataFormat: 'json',
    dataSource: { },
};

class Chart extends Component {
    render () {
        return (<ReactFC {...chartConfigs} />);
    }
}export default Chart
