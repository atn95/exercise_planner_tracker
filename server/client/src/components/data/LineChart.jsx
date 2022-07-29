import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

const LineChart = ({ chartData, chartOptions }) => {
	return <Line data={chartData} options={chartOptions} />;
};

export default LineChart;
