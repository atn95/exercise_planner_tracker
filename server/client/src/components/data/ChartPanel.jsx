import LineChart from './LineChart';
const ChartPanel = ({ chartData, chartOptions }) => {
	return (
		<div style={{ width: `90%`, borderRadius: `10px` }}>
			<LineChart chartData={chartData} chartOptions={chartOptions}></LineChart>
		</div>
	);
};

export default ChartPanel;
